const express = require('express');
const routes = express.Router();

/**
 * Adicionando Controllers
 */
const BuscaCEPController = require('../controllers/BuscaCEPController');
const AuthorizationController = require('../controllers/AuthorizationController');

/**
 * Adicionando Middlewares
 */
const AuthMiddleware = require('../middlewares/AuthMiddleware');

/**
 * Rota de verificação do Servidor.
 * Method: GET
 */
routes.get('/api/v1/ping', (req, res) => {
    return res.json({ ping: 'pong' })
});

/**
 * Rota para gerar um token válido
 * Method: GET
 */
routes.get('/api/v1/token', AuthorizationController.generateToken);

/**
 * Rota de busca do CEP
 * Method: GET
 */
routes.get('/api/v1/busca-cep', AuthMiddleware.authorization, BuscaCEPController.show)


module.exports = routes