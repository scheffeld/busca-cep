const app = require('../../app');
const request = require('supertest');

describe('BuscaCEP Controller', () => {
    it('should return address data from a valid zip code.', async () => {
        const response = await request(app)
            .get('/v1/busca-cep')
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