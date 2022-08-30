const express= require("express");
const router = express.Router()
const bcrypt = require('bcrypt');
const dbConnect = require("../db/dbConnect")
const User = require("../db/userModel")

router.post('/', (req, res) => {
    bcrypt.hash(req.body.password, 10)
        .then((hashedPassword) => {
            const user = new User({
                email: req.body.email.toLowerCase(),
                password: hashedPassword
            })
            user.save().then((result) => {
                res.status(201).send({
                    message: "User Created Successfully",
                    result,
                })
            })
                .catch((error) => {
                    res.status(500).send({
                        message: "Error creating user",
                        error,
                    })
                })
        })
        .catch(error => {
            console.error(err)
            res.status(500).send({
                message: "Password not hashed successfully",
                error
            })
        })
})



module.exports = router