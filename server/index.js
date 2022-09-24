const express= require('express');

const dbConnect= require("./db/dbConnect")
const auth = require("./middlewares/auth")
const CORSmiddle = require("./middlewares/cors")
const login = require("./Routes/login")
const register = require("./Routes/register")
const PORT = process.env.PORT || 5000;
const app = express()

app.use(express.json({ urlextended:true}))
app.use(CORSmiddle)
dbConnect()

app.use("/login",  login)
app.use("/register", register)
app.get('/auth',auth, (req, res)=>{
    res.send("Hello world")
})

app.listen(PORT, ()=>{
    console.log(`server running on ${PORT}`)
})