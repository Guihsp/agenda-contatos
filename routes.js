const express = require('express');
const routes = express.Router();
const homeController = require('./src/controllers/homeController');
const contatoController = require('./src/controllers/contatoController');

routes.get('/',homeController.paginaInicial);
routes.post('/', homeController.trataPost);

routes.get('/contato', contatoController.paginaInicial);

module.exports = routes;