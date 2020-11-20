const { route } = require('./routes');

const routes = require('express').Router();

const healthcheck = {
    uptime: process.uptime(),
    message: 'OK',
    timestamp: Date.now()
};

routes.get('/api/v1/healthcheck', (req, res) => {
    try {
        return res.status(200).json(healthcheck)
    }
    catch(e){
        return res.status(500).json(e.message)
    }
})

module.exports = routes;