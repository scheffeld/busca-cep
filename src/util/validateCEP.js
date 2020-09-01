/**
 * Valida o CEP informado pelo usuário.
 * @param {String} cep CEP à ser validado
 */
const validateCEP = (cep) => {

    const cepRegex = new RegExp(/(^\d{8}$)|(^\d{5}-\d{3}$)|(^\d{5} \d{3}$)/)
    
    return cepRegex.test(cep)

};

module.exports = validateCEP