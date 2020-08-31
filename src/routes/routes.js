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
routes.get('/', (req, res) => {
    return res.json({ ping: 'pong' })
});

/**
 * Rota de busca do CEP
 * Method: GET
 */
routes.get('/busca-cep', BuscaCEPController.show)


module.exports = routes