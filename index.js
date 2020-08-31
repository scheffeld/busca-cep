const express = require('express');
const app = express();

/**
 * Adicionando Middlewares
 */
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

console.log({ serverUp: true })

app.listen('3333')