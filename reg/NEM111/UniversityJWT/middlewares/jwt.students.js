var jwt = require('jsonwebtoken');

const jwtVerifier = ((req, res, next)=>{
    const token = req.headers.auth;
    jwt.verify(token, 'masai', (err, decoded)=>{
        if(decoded) next()
        else res.send(err.message)
    })

})

module.exports = { jwtVerifier }