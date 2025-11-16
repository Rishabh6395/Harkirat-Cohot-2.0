const {JWT_SCRETE} = require('../config')
const jwt = require('jsonwebtoken')

const authMiddlware = (req, res, next)=>{
    const authHeader = req.headers.authorization;

    if(!authHeader || !authHeader.startsWith('Bearer')){
        return res.status(403).json({})
    }
    const token = authHeader.split('')[1]

    try{
        const decoded = jwt.verify(token,JWT_SCRETE)
        req.userId = decoded.userid;
        next()

    }catch(err){
        return res.status(403).json({})
    }
}

module.exports = {
    authMiddlware
}