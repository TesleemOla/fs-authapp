const express= require('express');
const bcrypt = require('bcrypt');
const dbConnect= require("./db/dbConnect")

const login = require("./Routes/login")
const register = require("./Routes/register")
const PORT = process.env.PORT || 5000;
const app = express()

app.use(express.json({ urlextended:true}))
dbConnect()

app.use("/login", login)
app.use("/register", register)
app.get('/',(req, res)=>{
    res.send("Hello world")
})

app.listen(PORT, ()=>{
    console.log(`server running on ${PORT}`)
})