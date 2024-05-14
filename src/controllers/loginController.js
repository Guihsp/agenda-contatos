const Register = require('../models/RegisterModel');

exports.index = (req, res) => {
    if(req.session.user) return res.render('login-logado');
    res.render('login');
}

exports.login = async (req, res) => {
    try {
        const register = new Register(req.body);
        await register.login();

        if(register.errors.length > 0) {
            req.flash('errors', register.errors);
            req.session.save(() => res.redirect('/login'));
            return;
        }

        req.flash('success', 'Seja bem-vindo(a). Você está logado(a).');
        req.session.user = register.user;
        req.session.save(() => res.redirect('/'));  

    } catch (e) {
        console.log(e);
        return res.render('404');   
    }
}

exports.logout = (req, res) => {
    req.session.destroy();
    res.redirect('/');
}