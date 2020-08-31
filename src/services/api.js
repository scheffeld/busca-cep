const axios = require('axios').default;

const api = axios.create({
    baseURL: 'https://webmaniabr.com/api/1/cep/',
    params: {
        app_key: 'Yz1vL5BueMLid1xeHwVKRzZGd2Jj2JOU',
        app_secret: 'LzoB9kl6JwyFWlqMPUZOH0KQU2x2igYXJpen2KalqCcnTIWv'
    }
})

module.exports = api