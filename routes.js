const express = require('express');
const routes = express.Router();
const homeController = require('./src/controllers/homeController');
const loginController = require('./src/controllers/loginController');
const registerController = require('./src/controllers/registerController'); 

routes.get('/',homeController.index);

// login routes
routes.get('/login', loginController.index);//get login page
routes.post('/login', loginController.login);//post login page

// register routes
routes.get('/register', registerController.index); //get register page
routes.post('/register', registerController.register);//post register page

module.exports = routes;