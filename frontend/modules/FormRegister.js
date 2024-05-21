import validator from "validator";

export default class FormRegister {
    constructor(formClass) {
        this.form = document.querySelector(formClass);
    }

    init() {
        this.events();
    }

    events() {
        if (!this.form) return;
        this.form.addEventListener('submit', e => {
            e.preventDefault();
            this.handleSubmit(e);
        });
    }

    handleSubmit(e) {
        const el = e.target;
        const email = el.querySelector('#email');
        const password = el.querySelector('#password');
        
        let error = false;
        
        const errorMessages = document.querySelector('.error-messages');
        errorMessages.innerHTML = '';

        if (!validator.isEmail(email.value)) {
            const p = document.createElement('p');
            p.classList.add('alert');
            p.innerHTML = 'Email inválido.';
            errorMessages.appendChild(p);

            error = true;
        }

        if (password.value.length < 3 || password.value.length > 50) {
            const p = document.createElement('p');
            p.classList.add('alert');
            p.innerHTML = 'A senha precisa ter entre 3 e 50 caracteres.';
            errorMessages.appendChild(p);

            error = true;
        }

        if (!error) el.submit();

    }
}