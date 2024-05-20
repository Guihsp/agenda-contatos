# agenda-contatos

Este projeto foi desenvolvido com o intuito de praticar alguns conhecimentos em Node.js, Express, MongoDB e JavaScript. A aplicação é uma agenda de contatos, onde é possível cadastrar, listar, atualizar e deletar contatos. A aplicação também conta com um sistema de autenticação, onde é possível realizar o cadastro de usuários, login e logout onde as informações são armazenadas no banco de dados.

## Tabela de Conteúdos
- [Descrição do Projeto](#agenda-contatos)
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

- Adicionar validações de formulários no front-end

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
