import Stuff from "./Stuff.js"

export const mp = async(req, res) => {
    const {name, dep, count} = req.body
    try{
        const data = await Stuff.creat({name, dep, count})
        res.status(200).json(data) 
    }
    catch(error){
        console.error(error.message)
        res.status(500).json({state: false})
    }
}

export const mg = async(req, res) => {
    try{
        const data = await Stuff.find()
        res.status(200).json(data) 
    }
    catch(error){
        console.error(error.message)
        res.status(500).json({state: false})
    }
}