const app = require('../../app');
const request = require('supertest');
const jwt = require('../../src/util/jwt');

describe('BuscaCEP Controller', () => {
    it('should return address data from a valid zip code.', async () => {
        const userInfo = {
            user: 'admin',
            pass: 'admin'
        }
        const response = await request(app)
            .post('/api/v1/busca-cep')
            .set({
                Authorization: `Bearer ${jwt.sign(userInfo)}`
            })
            .send({
                cep: '14401221'
            })

        expect(response.status)
            .toBe(200)

        expect(response.body).not.toBeNull()
        
        expect(response.body)
        .toHaveProperty('rua')
            
    }, 30000); 
})