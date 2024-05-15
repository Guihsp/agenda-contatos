const mongoose = require('mongoose');
const validator = require('validator');

const ContactSchema = new mongoose.Schema({
    name: { type: String, required: true },
    lastName: { type: String, required: false, default: ''},
    email: { type: String, required: false, default: ''},
    phone: { type: String, required: false, default: '' },
    created: { type: Date, default: Date.now },
});

const ContactModel = mongoose.model('Contact', ContactSchema);

class Contact {
    constructor(body) {
        this.body = body;
        this.errors = [];
        this.contact = null;
    }

    static async findById(id) { 
        if (typeof id !== 'string') return;
        const contact = await ContactModel.findById(id);
        console.log(contact);
        return contact;
    } 

    async register() {
        this.validate();
        if (this.errors.length > 0) return;
        this.contact = await ContactModel.create(this.body);
    }

    async edit(id) {
        if (typeof id !== 'string') return;
        this.validate();
        if (this.errors.length > 0) return;
        this.contact = await ContactModel.findByIdAndUpdate(id, this.body, { new: true });
    } 

    validate() {
        this.cleanUp();

        if (this.body.email && !validator.isEmail(this.body.email)) this.errors.push('E-mail inválido');
        if (!this.body.name) this.errors.push('Nome é um campo obrigatório.');
        if (!this.body.email && !this.body.phone) {
            this.errors.push('Pelo menos um contato precisa ser preenchido: e-mail ou telefone.');
        }

    }

    cleanUp() {
        for (const key in this.body) {
            if (typeof this.body[key] !== 'string') {
                this.body[key] = '';
            }
        }

        this.body = {
            name: this.body.name,
            lastName: this.body.lastName,
            email: this.body.email,
            phone: this.body.phone,
        };
    }
}

module.exports = Contact;