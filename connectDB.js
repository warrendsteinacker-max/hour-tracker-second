import mongoose from 'mongoose'

const connectDB = async() => {
    try{
        await mongoose.connect('mongodb+srv://warrendsteinacker_db_user:7SFmtcD45dYhA8np@cluster0.tu6nber.mongodb.net/')
        console.log('connected')
    }
    catch(error){
        console.error(error.message)
        console.log('not connected')
    }
}

export default connectDB