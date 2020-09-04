const jwt = require('../util/jwt')

module.exports = {
    async generateToken(req, res){
        const userInfo = {
            user: 'admin',
            pass: 'admin'
        }
    
        const token = jwt.sign(userInfo);
    
        return res.status(201).json({ token })
    }
}