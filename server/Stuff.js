import mongoose from 'mongoose'

const stuff = new mongoose.Schema(
    {
    name:{
        type: String,
        trim: true        
    },
    dep:{
        type: String,
        trim: true
    }
    }, 
    {timestamps: true}
   
)

const Stuff = mongoose.model('Stuff', stuff)

export default Stuff