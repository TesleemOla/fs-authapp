const express= require('express');
const bcrypt=require('bcrypt');
const dbConnect= require("./db/dbConnect")
const User = require("./db/userModel")
const app = express()

app.use(express.json({ urlextended:true}))
dbConnect()
const PORT = process.env.PORT ||3000;

app.get('/',(req, res)=>{
    res.send("Hello world")
})


app.post('/register',(req, res)=>{
    bcrypt.hash(req.body.password, 10)
    .then((hashedPassword)=>{
        const user = new User({
            email: req.body.email,
            password: hashedPassword
        })
        user.save().then((result)=>{
            res.status(201).send({
                message: "User Created Successfully",
                result,
            })
        })
        .catch((error)=>{
            res.status(500).send({
                message: "Error creating user",
                error,
            })
        })
    })
    .catch(err=> {
        console.error(err)
        res.status(500).send({
            
            message: "Password not hashed successfully",
            err: err
        })
    })
 
})

app.listen(PORT, ()=>{
    console.log(`server running on ${PORT}`)
})