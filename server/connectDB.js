import mongoose from 'mongoose'

const connectDB = async() => {
    try{
        await mongoose.connect('mongodb+srv://warrendsteinacker_db_user:EwlgLHfoAoDSB5xr@cluster0.xe9m85j.mongodb.net/')
        console.log('connected')
    }
    catch(error){
        console.error(error.message)
        console.log('not connected')
    }
}

export default connectDB