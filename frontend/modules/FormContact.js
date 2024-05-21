export default class FormContact {
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
        const name = el.querySelector('#name');
        const email = el.querySelector('#email');
        const phone = el.querySelector('#phone');

        let error = false;

        const errorMessages = document.querySelector('.error-messages');
        errorMessages.innerHTML = '';

        if (!name.value) {
            const p = document.createElement('p');
            p.classList.add('alert');
            p.innerHTML = 'Nome é um campo obrigatório.';
            errorMessages.appendChild(p);

            error = true;
        }

        if (!email.value && !phone.value) {
            const p = document.createElement('p');
            p.classList.add('alert');
            p.innerHTML = 'Pelo menos um contato precisa ser preenchido: e-mail ou telefone.';
            errorMessages.appendChild(p);

            error = true;
        }

        if (!error) el.submit();

    }
}