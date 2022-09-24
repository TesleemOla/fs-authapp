const CORSmiddle = (req, res, next)=>{
    req.setHeader("Access-Control-Allow-Origin", "*");
    req.setHeader(
        "Access-COntrol-ALlow-Headers",
        "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, PUT, DELET, PATCH, OPTIONS"
    );
    next();
}

module.exports = CORSmiddle