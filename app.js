const express = require('express');
const app = express();
const routes = require('./src/routes/routes');
const healthcheck = require('./src/routes/healthcheck.routes');
const swaggerUi = require('swagger-ui-express');
const swaggerDoc = require('./swagger.json');

/**
 * Adicionando Middlewares
 */
app.use(express.json());
app.use(routes);
app.use(healthcheck);
app.use('/api-docs/v1', swaggerUi.serve, swaggerUi.setup(swaggerDoc));


module.exports = app