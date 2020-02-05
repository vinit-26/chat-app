const jwt = require('jsonwebtoken');
const shortid = require('shortid');
const secretKey = 'someRandomSecretKeyWhichCantBeGuess';

let generateToken = (data,cb) => {
    try{
        let claims = {
            jwtid : shortid.generate(),
            iat : Date.now(),
            exp : Math.floor(Date.now() / 1000) + (60 * 60 * 24),
            sub : 'authToken',
            iss : 'edChat',
            data : data
        };
        let tokenDetails = {
            token : jwt.sign(claims,secretKey),
            tokenSecret : secretKey
        };
        cb(null,tokenDetails);
    }catch(error){
        console.log(erro);
        cb(error,null);
    }
}

let verifyClaim = (token,cb) => {
        jwt.verify(token,secretKey, function(error,decoded){
            if(error){
                console.log('error while verifying user');
                console.log(error);
                cb(error,null);
            }else{
                console.log('user verified');
                console.log(decoded);
                cb(null,decoded);
            }
        });
}

module.exports = {
    generateToken: generateToken,
    verifyClaim: verifyClaim
}




