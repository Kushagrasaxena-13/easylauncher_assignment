const jwt = require('jsonwebtoken');
require('dotenv').config();

async function create_token() {
    let tokenSession = Math.floor((Date.now() + 1 * (1) * 60 * 60 * 1000)/ 1000);
    let tokenPlayload = {
        user_id: "kushagra007",
        exp: tokenSession
    }
    return jwt.sign(tokenPlayload, process.env.SECRET_KEY);
}

async function validate_token(req, res, next) {
    let authHeader = req.body?.token || req.headers['Authorization'] || req.headers['authorization'] || undefined;
	let accessToken = authHeader && authHeader.split(' ') ? authHeader.split(' ')[1] : authHeader;
    if(accessToken) {
        jwt.verify(accessToken, process.env.SECRET_KEY, async(err, decoded) => {
            if(decoded) {
                let currentTimeStamp = Math.floor((Date.now())/ 1000);
                if(decoded.exp < currentTimeStamp) {
                    return res.status(401).send({success: false, message: 'Token Expired'});
                }
                if(decoded.user_id !== "kushagra007") {
                    res.status(401).send({success: false, message: 'Invalid user'});
                }
                next();
            } else {
                res.status(401).send({success: false, message: 'Invalid token'});
            }
        });
    } else {
        res.status(401).send({success: false, message: 'Invalid token'});
    }
}

module.exports = {
    validate_token,
    create_token
}