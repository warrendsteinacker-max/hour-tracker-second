import jwt from 'jsonwebtoken'

export const Jwtcheck = (req, res, next) => {

    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){

        try{
            const token = req.headers.authorization.split(' ')[1]

            const decoded = jwt.verify(token, JWT_TOKEN)

            if(!decoded){
                return res.status(401).json({message: 'Bad Token'})
            }

            req.user = decoded

            next()
        }
        catch(error){
            console.error(error.message)
            return res.status(500)
        }

    }

    else{
        res.status(401).json({message: 'No Token'})
    }

}