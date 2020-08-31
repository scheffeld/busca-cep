const express = require('express');
const routes = express.Router();

/**
 * Rota de verificaçao do Servidor.
 * Método: GET
 */
routes.get('/', (req, res) => {
    return res.json({ ping: 'pong' })
})


module.exports = routes