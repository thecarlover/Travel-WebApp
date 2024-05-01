const mongoose = require('mongoose')
const Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost:27017/ojasvi')

const userSchema = new Schema({
    firstName: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    },
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        minLength: 3,
        maxLength: 30
    },
    password:{
        type: String,
        required: true,
        minLength:6
    }
})

const user = mongoose.model('users', userSchema);

module.exports = {
    user
}