/**
 * ArrowFunction que valida o CEP informado pelo usuário
 * @param {*} cep Number
 */
const validateCEP = (cep) => {
    
    const stringfyCEP = String(cep)

    if(stringfyCEP.length < 8){
        return false
    }

    return true
};

module.exports = validateCEP