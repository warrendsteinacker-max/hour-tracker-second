import mongoose from 'mongoose'

const stuff = new mongoose.Schema({
    name:{
        type: String        
    },
    dep:{
        type: String
    },
    count:{
        type: Number
    }
   
})

const Stuff = mongoose.model('Stuff', stuff)

export default Stuff