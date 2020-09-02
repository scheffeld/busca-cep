const addZero = require('../../src/util/addZero');
const validateCEP = require('../../src/util/validateCEP');

describe('Add zero.', () => {
    it('should replace the last digit of a valid zip code, with zero.', () => {
        const newCEP = addZero('14401226')
        const validatedCEP = validateCEP(newCEP)

        expect(validatedCEP).toBeTruthy();
    })
})