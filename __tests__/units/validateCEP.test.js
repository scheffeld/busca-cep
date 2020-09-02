const validateCEP = require('../../src/util/validateCEP');

describe('Validate CEP.', () => {
    it('should validate the received zip code.', () => {
        const validatedCEP = validateCEP('14401226')

        expect(validatedCEP).toBeTruthy();
    })
})