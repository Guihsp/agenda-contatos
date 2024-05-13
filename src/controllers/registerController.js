const Register = require('../models/RegisterModel');

exports.index = (req, res) => { 
    res.render('register');
}

exports.register = async (req, res) => {
    try {
        const register = new Register(req.body);
        await register.register();
    
        if(register.errors.length > 0) {
            req.flash('errors', register.errors);
            req.session.save(() => res.redirect('/register'));
            return;
        }
        
        req.flash('success', 'Seu usuário foi criado com sucesso.');
        req.session.save(() => res.redirect('/'));
        
    } catch(e) {
        res.render('404');
        console.log(e);
    }

}

