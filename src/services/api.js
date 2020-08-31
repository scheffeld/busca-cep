const axios = require('axios').default;

const api = axios.create({
    baseURL: 'https://api.postmon.com.br/v1/cep/',
})

module.exports = api