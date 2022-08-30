const express = require('express')
const router= express.Router()
const bcrypt = require('bcrypt');
const User = require("../db/userModel")
const jwt = require('jsonwebtoken')

router.post('/', (req, res) => {
    User.findOne({
        email: req.body.email.toLowerCase()
    }, ((err, user) => {
        if (user) {
            console.log(user);

            bcrypt.compare(req.body.password, user.password)
                .then(passwordcheck => {
                    if (!passwordcheck) {
                        return res.status(400).send({
                            message: "Password does not match",
                            error: err,
                        })
                    }
                    const token = jwt.sign({
                        userId: user._id,
                        userEmail: user.email
                    },
                        "RANDOM-TOKEN",
                        { expiresIn: "24h" })

                    res.status(200).send({
                        message: "Login Successful",
                        email: user.email,
                        token,
                    })
                })
        } else {
            res.status(404).send({
                message: "email not found",
                error: err,
            })
        }
    })
    )
})



module.exports = router