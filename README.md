# agenda-contatos

leia em: [PT](#sobre-o-projeto) | [EN](#english-version)

## Sobre o projeto

Este projeto foi desenvolvido com o intuito de praticar alguns conhecimentos em Node.js, Express, MongoDB e JavaScript. A aplicação é uma agenda de contatos, onde é possível cadastrar, listar, atualizar e deletar contatos. A aplicação também conta com um sistema de autenticação, onde é possível realizar o cadastro de usuários, login e logout onde as informações são armazenadas no banco de dados.

## Tabela de Conteúdos
- [Sobre o Projeto](#sobre-o-projeto)
- [Imagem da Aplicação](#imagem-da-aplicação)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Como Rodar o Projeto](#como-rodar-o-projeto)
- [Funcionalidades](#funcionalidades)
- [Próximos Passos](#próximos-passos)
- [Contribuições](#contribuições)
- [Autor](#autor)
- [Contatos](#contatos)
- [Licença](#licença)

## Imagem da aplicação

![Imagem da aplicação](https://imgur.com/ZiQxflO.png)

## Tecnologias utilizadas

- Node.js
- Express
- MongoDB
- JavaScript
- CSS
- EJS

## Como rodar o projeto

1. Clone o repositório utilizando `git clone https://github.com/Guihsp/agenda-contatos.git`. Você também pode baixar o arquivo .zip do projeto.
2. Instale as dependências com `npm install` ou `yarn install`.
3. Crie um arquivo `.env` na raiz do projeto e adicione as variáveis de ambiente conforme o arquivo `.env.example`. Você precisará de uma conta no MongoDB Atlas para obter a URL de conexão com o banco de dados.
4. Rode o projeto com `npm start` ou `yarn start`. O servidor estará rodando na porta 3000. Você pode alterar a porta no arquivo `server.js` no seguinte trecho de código:

`app.on('pronto', () => {
    // Inicia o servidor na porta 3000 e imprime uma mensagem no console após o servidor ser iniciado
    app.listen(3000, () => {
        console.log('Acessar http://localhost:3000');
        console.log('Servidor executando na porta 3000');
    });
});
`

5. Acesse `http://localhost:3000` no seu navegador. Você será redirecionado para a página de login. Caso não tenha uma conta, clique em "Cadastrar-se" para criar uma conta.

## Funcionalidades

- Cadastro de usuários
- Login
- Logout
- Cadastro de contatos
- Listagem de contatos
- Atualização de contatos
- Deleção de contatos

## Próximos passos

- [x] Adicionar validações de formulários no front-end

## Contribuições

Contribuições são sempre bem-vindas! Caso queira contribuir com o projeto, siga os passos abaixo:

1. Faça um fork do projeto
2. Crie uma nova branch com a sua feature (`git checkout -b feature/nome-da-feature`)
3. Faça um commit das suas alterações (`git commit -m 'Adiciona uma nova feature'`)
4. Faça um push para a sua branch (`git push origin feature/nome-da-feature`)
5. Abra um pull request

## Autor

- [Guilherme Henrique Silva Pereira](https://www.github.com/Guihsp)

## Contatos

<a href="https://linkedin.com/in/guilherme-henrique-silva-pereira-9283b023a" target="_blank"><img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank" alt="Linkedin"></a> 
<a href = "mailto:guilhermehsp26@gmail.com"><img src="https://img.shields.io/badge/-Gmail-%23333?style=for-the-badge&logo=gmail&logoColor=white" target="_blank" alt="Gmail"></a>
<a href ="https://api.whatsapp.com/send?phone=5511993123958"><img src="https://img.shields.io/badge/WhatsApp-25D366?style=for-the-badge&logo=whatsapp&logoColor=white" target="_blank" alt="Whatsapp"></a>
<a href="https://www.instagram.com/guizin__silva" target="_blank" alt="Instagram"><img src="https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white"></a>

## Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

# English version

## about the project

This project was developed with the aim of practicing some knowledge in Node.js, Express, MongoDB, and JavaScript. The application is a contact agenda, where it is possible to register, list, update, and delete contacts. The application also has an authentication system, where it is possible to register users, login, and logout where the information is stored in the database.

## Table of Contents
- [About the Project](#about-the-project)
- [Application Image](#application-image)
- [Technologies Used](#technologies-used)
- [How to Run the Project](#how-to-run-the-project)
- [Features](#features)
- [Next Steps](#next-steps)
- [Contributions](#contributions)
- [Author](#author)
- [Contacts](#contacts)
- [License](#license)

## Application Image

![Application Image](https://imgur.com/ZiQxflO.png)

## Technologies Used

- Node.js
- Express
- MongoDB
- JavaScript
- CSS
- EJS

## How to Run the Project

1. Clone the repository using `git clone https://github.com/Guihsp/contact-agenda.git`. You can also download the .zip file of the project.
2. Install the dependencies with `npm install` or `yarn install`.
3. Create a `.env` file at the root of the project and add the environment variables as per the `.env.example` file. You will need a MongoDB Atlas account to get the database connection URL.
4. Run the project with `npm start` or `yarn start`. The server will be running on port 3000. You can change the port in the `server.js` file in the following code snippet:

`app.on('ready', () => {
    // Starts the server on port 3000 and prints a message on the console after the server has started
    app.listen(3000, () => {
        console.log('Access http://localhost:3000');
        console.log('Server running on port 3000');
    });
});
`

5. Access `http://localhost:3000` in your browser. You will be redirected to the login page. If you do not have an account, click on "Register" to create an account.

## Features

- User registration
- Login
- Logout
- Contact registration
- Contact listing
- Contact update
- Contact deletion

## Next Steps

- [x] Add form validations on the front-end

## Contributions

Contributions are always welcome! If you want to contribute to the project, follow the steps below:

1. Fork the project
2. Create a new branch with your feature (`git checkout -b feature/feature-name`)
3. Commit your changes (`git commit -m 'Add a new feature'`)
4. Push to your branch (`git push origin feature/feature-name`)
5. Open a pull request

## Author

- [Guilherme Henrique Silva Pereira](https://www.github.com/Guihsp)

## Contacts

<a href="https://linkedin.com/in/guilherme-henrique-silva-pereira-9283b023a" target="_blank"><img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank" alt="Linkedin"></a> 
<a href = "mailto:guilhermehsp26@gmail.com"><img src="https://img.shields.io/badge/-Gmail-%23333?style=for-the-badge&logo=gmail&logoColor=white" target="_blank" alt="Gmail"></a>
<a href ="https://api.whatsapp.com/send?phone=5511993123958"><img src="https://img.shields.io/badge/WhatsApp-25D366?style=for-the-badge&logo=whatsapp&logoColor=white" target="_blank" alt="Whatsapp"></a>
<a href="https://www.instagram.com/guizin__silva" target="_blank" alt="Instagram"><img src="https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white"></a>

## License

This project is under the MIT license. See the [LICENSE](LICENSE) file for more details.