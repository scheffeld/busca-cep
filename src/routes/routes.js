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
routes.get('/api/v1/ping', (req, res) => {
    return res.json({ ping: 'pong' })
});

/**
 * Rota de busca do CEP
 * Method: GET
 */
routes.post('/api/v1/busca-cep', BuscaCEPController.show)

/**
 * Rota default
 * Method: GET
 */
routes.use((req, res) => {
    return res.status(404).send('Não foi possível localizar esse recurso.')
})


module.exports = routes