const jwt = require('jsonwebtoken');

const secret = 'BB80E45569E2002DF29283DF98E5E9CE760ABD44F13069EF5F46DDAB0072F303'

const sign = payload => jwt.sign(payload, secret, { expiresIn: 900 });
const verify = token => jwt.verify(token, secret);

module.exports = { sign, verify }