const jwt = require('../../src/util/jwt');

describe('JWT Test', () => {
    it('should generate a valid token.', () => {
        const userInfo = {
            user: 'admin',
            pass: 'admin'
        }
        const token = jwt.sign(userInfo)

        expect(token).not.toBeNull();
    }),
    it('should validate a token.', () => {
        const userInfo = {
            user: 'admin',
            pass: 'admin'
        }
        const token = jwt.sign(userInfo)
        const validate = jwt.verify(token)

        expect(validate).not.toBeNull()

    })
})