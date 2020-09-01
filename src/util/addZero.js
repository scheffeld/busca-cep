/**
 * Substitui o digito por zero.
 * @param {String} cep CEP válido
 */
const addZero = (cep) => {

    const chars = cep.split('');
    for(let i = cep.length; i--; i <= 0){
        if(chars[i] != '0'){
            chars[i] = '0'
            return chars.join('')
        }
    }

}

module.exports = addZero