const express = require('express');
const routes = express.Router();
const jwt = require('../util/jwt');

/**
 * Adicionando Controllers
 */
const BuscaCEPController = require('../controllers/BuscaCEPController')

/**
 * Rota de verificaçao do Servidor.
 * Method: GET
 */
routes.get('/api/v1/ping', (req, res) => {
    return res.json({ ping: 'pong' })
});

/**
 * Rota para gerar um token válido
 * Method: GET
 */
routes.get('/api/v1/token', (req, res) => {
    const userInfo = {
        user: 'admin',
        pass: 'admin'
    }

    const token = jwt.sign(userInfo);

    return res.json({ token })
})

/**
 * Rota de busca do CEP
 * Method: GET
 */
routes.post('/api/v1/busca-cep', BuscaCEPController.show)


module.exports = routes