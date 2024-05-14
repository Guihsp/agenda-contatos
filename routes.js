const express = require('express');
const routes = express.Router();
const homeController = require('./src/controllers/homeController');
const loginController = require('./src/controllers/loginController');
const registerController = require('./src/controllers/registerController');
const contactController = require('./src/controllers/contactController'); 

routes.get('/',homeController.index);

// login routes
routes.get('/login', loginController.index);//get login page
routes.post('/login', loginController.login);//post login page
routes.get('/logout', loginController.logout); //logout

// register routes
routes.get('/register', registerController.index); //get register page
routes.post('/register', registerController.register);//post register page

//contact routes
routes.get('/contact', contactController.index);

module.exports = routes;