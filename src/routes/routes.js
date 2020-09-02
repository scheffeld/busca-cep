const express = require('express');
const routes = express.Router();

/**
 * Adicionando Controllers
 */
const BuscaCEPController = require('../controllers/BuscaCEPController')

/**
 * Rota de verificaçao do Servidor.
 * Method: GET
 */
routes.get('/v1/', (req, res) => {
    return res.json({ ping: 'pong' })
});

/**
 * Rota de busca do CEP
 * Method: GET
 */
routes.get('/v1/busca-cep', BuscaCEPController.show)


module.exports = routes