import moongose from 'moongose'

const user = new moongose.Schema({
    password: {
        type: Number,
        required: true,
        unique: true, 
        // trim: true
    },
    username: {
        type: String,
        required: true
    }},
    {timestamps: true}
)

const User = moongose.model('User', user)

export default User