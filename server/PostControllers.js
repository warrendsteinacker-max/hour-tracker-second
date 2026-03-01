// import Stuff from "../Stuff.js"

// export const mp = async(req, res) => {
//     const {name, dep, count} = req.body
//     try{
//         const data = await Stuff.create({name, dep, count, userId: req.user.id})
//         res.status(201).json(data) 
//     }
//     catch(error){
//         console.error(error.message)
//         res.status(500).json({state: false})
//     }
// }

// export const mg = async(req, res) => {
//     try{
//         const data = await Stuff.find()
//         console.log(data)
//         res.status(200).json(data) 
//     }
//     catch(error){
//         console.error(error.message)
//         res.status(500).json({state: false})
//     }

// }

// export const md = async(req, res) => {

//     try{
//         const response = await Stuff.findOneAndDelete({_id: req.params.id, userId: req.user.id},)

//         if(!response){
//             return res.status(401).json({message: 'You can Not delete This Content'})
//         }
        
//         res.status(200).json({state: true})   
//     }
//     catch(error){
//         console.error(error.message)
//         res.status(500).json({state: false})
//     }
// }

// export const me = async(req, res) => {
//     const {name, dep} = req.body
//     try{
//         const response = await Stuff.findOneAndUpdate({_id: req.params.id, userId: req.user.id}, {name: name, dep: dep}, {new: true})
        
//         if(!response){
//             return res.status(401).json({message: 'You can Not Update This Content'})
//         }

//         return res.status(200).json({state: true})
//     }
//     catch(error){
//         console.error(error.message)
//         return res.status(500).json({state: false})
//     }
// }



///////moded version///////

import Stuff from "../Stuff.js"

// 1. CREATE - Links the new item to the logged-in user
export const mp = async(req, res) => {
    const {name, dep, count} = req.body
    try {
        // We add 'userId' from req.user (provided by Jwtcheck)
        const data = await Stuff.create({
            name, 
            dep, 
            count, 
            userId: req.user.id 
        })
        return res.status(201).json(data) 
    }
    catch(error){
        console.error(error.message)
        return res.status(500).json({state: false})
    }
}

// 2. GET - Only finds items belonging to this specific user
export const mg = async(req, res) => {
    try {
        // Filter by userId so users don't see each other's data
        const data = await Stuff.find({ userId: req.user.id })
        return res.status(200).json(data) 
    }
    catch(error){
        console.error(error.message)
        return res.status(500).json({state: false})
    }
}

// 3. DELETE - Ensures the user can only delete THEIR items
export const md = async(req, res) => {
    try {
        // Find by ID AND ensure the userId matches the logged-in person
        const da = await Stuff.findOneAndDelete({ 
            _id: req.params.id, 
            userId: req.user.id 
        })

        if (!da) {
            return res.status(404).json({ message: "Item not found or unauthorized" })
        }
 
        return res.status(200).json({state: true})   
    }
    catch(error){
        console.error(error.message)
        return res.status(500).json({state: false})
    }
}

// 4. EDIT - Ensures only the owner can update the item
export const me = async(req, res) => {
    const {name, dep} = req.body
    try {
        const updated = await Stuff.findOneAndUpdate(
            { _id: req.params.id, userId: req.user.id }, // Match ID and Owner
            { name, dep },
            { new: true } // Return the updated document
        )

        if (!updated) {
            return res.status(404).json({ message: "Update failed: unauthorized or not found" })
        }

        return res.status(200).json({state: true})
    }
    catch(error){
        console.error(error.message)
        return res.status(500).json({state: false})
    }
}