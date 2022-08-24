const mongoose=require('mongoose')

const userSchema= new mongoose.Schema({
    email: {
        type: String,
        required: [true, "Please provide an Email!"],
        unique: [true, "Email Exist"]
    },
    password: {
        type: String,
        require: [true, "Please provide a password!"]
    }
})

module.exports = mongoose.model.Users || mongoose.model("Users", userSchema)