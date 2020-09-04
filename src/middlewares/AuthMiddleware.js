const jwt = require('../util/jwt');

module.exports = {
    authorization(req, res, next){
        try{
            const [, token ] = req.headers.authorization.split(' ');

            jwt.verify(token);

            next()
        }
        catch(e){
            res.status(401).send('Unauthorized.')
        }
    }
}