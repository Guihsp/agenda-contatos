const express = require('express');
const routes = express.Router();
const homeController = require('./controllers/homeController'); // import home controller
const loginController = require('./controllers/loginController'); // import login controller
const registerController = require('./controllers/registerController'); // import register controller
const contactController = require('./controllers/contactController'); // import contact controller
const { loginRequired, page404 } = require('./middlewares/middleware'); // import middleware

// home routes
routes.get('/',homeController.index); // get home page

// login routes
routes.get('/login', loginController.index);//get login page
routes.post('/login', loginController.login);//post login page
routes.get('/logout', loginController.logout); //logout

// register routes
routes.get('/register', registerController.index); //get register page
routes.post('/register', registerController.register);//post register page

//contact routes
routes.get('/contact', loginRequired, contactController.index); // get contact page
routes.post('/contact/register', loginRequired, contactController.register); // post contact page
routes.get('/contact/index/:id', loginRequired, contactController.editIndex); // get contact edit page
routes.post('/contact/edit/:id', loginRequired, contactController.edit); // post contact edit page
routes.get('/contact/delete/:id', loginRequired, contactController.delete); // delete contact

// 404 page
routes.use(page404); 

module.exports = routes;