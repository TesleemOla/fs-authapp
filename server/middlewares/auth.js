const jwt = require("jsonwebtoken")

const auth = async (req, res, next)=>{

    try{
        const token = await req.headers.authorization.split(" ")[1];
        const decodedToken =  jwt.verify(token, "RANDOM-TOKEN");
        const user = decodedToken;
        req.user = user
        next()
    }

    catch(err){
        res.status(401).json({
            error: new Error("invalid request")
        })
    }

}

module.exports = auth;