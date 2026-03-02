import jwt from 'jsonwebtoken'
import User from './User'
import bcrypt from 'bcrypt'




// const singIn = async (req, res) => {
//     const { password, username } = req.body;

//     try {
//         const user = await User.findOne({ username: username });

//         if(!user) {
//             return res.status(401).json({ message: 'Invalid username or password' });
//         }

//         const Hashedp = await bcrypt.compare(password, user.password)
//         // Generic messages are safer than "Password Not Found"

//         if(!Hashedp){
//             return res.status(401).json({ message: 'Invalid username or password' });
//         }

//         const token = jwt.sign(
//             { id: user._id }, 
//             process.env.JWT_TOKEN, 
//             { expiresIn: '30m' }
//         );

//         // Returning the token and a success message
//         return res.status(200).json({ 
//             token: token, 
//             message: 'Login successful' 
//         });

//     } catch(error) {
//         console.error("Auth Error:", error.message);
//         return res.status(500).json({ message: 'The Server is Down' });
//     }
// };

const singIn = async (req, res) => {
    const { password, username } = req.body;

    try {
        const user = await User.findOne({ username: username });

        // 1. FIRST: Check if user exists. 
        // If 'user' is null, the code stops here and doesn't crash.
        if (!user) {
            return res.status(401).json({ message: 'Invalid username or password' });
        }

        // 2. SECOND: Compare the password now that we know 'user' is safe to read
        const isMatch = await bcrypt.compare(password, user.password);

        // 3. THIRD: If the password doesn't match
        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid username or password' });
        }

        // 4. GENERATE TOKEN
        const token = jwt.sign(
            { id: user._id }, 
            process.env.JWT_TOKEN, 
            { expiresIn: '30m' }
        );

        return res.status(200).json({ 
            token: token, 
            message: 'Login successful' 
        });

    } catch(error) {
        console.error("Auth Error:", error.message);
        return res.status(500).json({ message: 'The Server is Down' });
    }
};


// const creatA = async(req, res) => {
//     const {username, password} = req.body

//     try{

//         const user = await User.findOne({username: username})

//         if(user){
//             return res.status(409).json({message: 'username all ready exists'})
//         }

//         const newuser = await User.create({username: username, password: password})

//         const token = jwt.sign(
//             {id: newuser._id},
//             process.env.JWT_TOKEN,
//             {expiresIn: '30m'}
//         )

//         return res.status(200).json({message: 'acount created', token: token})

//     }
//     catch(error){
//         console.error(error.message)
//         return res.status(500).json({ message: 'The Server is Down' })
//     }
// }


const creatA = async(req, res) => {
    const {username, password} = req.body

    try {
        const user = await User.findOne({username: username})

        if(user){
            return res.status(409).json({message: 'username already exists'})
        }

        const Hashedp = await bcrypt.hash(password, 10) 

        // Added the 'e' to .create
        const newuser = await User.create({username: username, password: Hashedp})

        const token = jwt.sign(
            {id: newuser._id},
            process.env.JWT_TOKEN,
            {expiresIn: '30m'}
        )

        return res.status(200).json({message: 'account created', token: token})

    }
    catch(error){
        console.error(error.message)
        return res.status(500).json({ message: 'The Server is Down' })
    }
}