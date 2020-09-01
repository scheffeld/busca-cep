/**
 * Substitui o digito por zero.
 * @param {String} cep CEP válido
 */
const addZero = (cep, index) => {

    const chars = cep.split('');
    chars[index] = '0'
    return chars.join('')

}

module.exports = addZero