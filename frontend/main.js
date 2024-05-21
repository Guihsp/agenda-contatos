// Importing polyfills for older browsers
import 'core-js/stable';
import 'regenerator-runtime/runtime';

// Import modules to validate forms
import FormLogin from './modules/FormLogin'; // Importing the FormLogin class
import FormRegister from './modules/FormRegister';// Importing the FormRegister class
import FormContact from './modules/FormContact';// Importing the FormContact class

const formLogin = new FormLogin('.form-login'); // Creating a new instance of the FormLogin class
formLogin.init();// Initializing the formLogin object

const formRegister = new FormRegister('.form-register');// Creating a new instance of the FormRegister class
formRegister.init();// Initializing the formRegister object

const formContact = new FormContact('.form-contact');// Creating a new instance of the FormRegister class
formContact.init();// Initializing the formContact object

//Importing CSS files to be processed by Webpack
import './assets/css/main.css';
