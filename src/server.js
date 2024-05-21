require('dotenv').config(); // Importa o módulo dotenv e carrega as variáveis de ambiente do arquivo .env
const express = require('express');// Importa o módulo express do Node.js
const app = express();// Cria uma nova aplicação express

const mongoose = require('mongoose');// Importa o módulo mongoose

mongoose.connect(process.env.CONNECTION_STRING). // Conecta ao banco de dados MongoDB
    then(() => { // Se a conexão for bem-sucedida executa o código abaixo
        app.emit('ready'); // Emite o evento 'ready' para iniciar o servidor
    }).catch (e => console.log(e)); // Se a conexão falhar, imprime o erro no console
        

const session = require('express-session'); // Importa o módulo express-session
const MongoStore = require('connect-mongo'); // Importa o módulo connect-mongo
const flash = require('connect-flash'); // Importa o módulo connect-flash
const routes = require('./routes'); // Importa o módulo de rotas
const path = require('path'); // Importa o módulo path do Node.js
const helmet = require('helmet'); // Importa o módulo helmet
const csrf = require('csurf'); // Importa o módulo csurf
const {globalMiddleware, checkCsrfError, csrfMiddleware} = require('./middlewares/middleware'); // Importa o módulo de middleware

app.use(express.urlencoded({ extended: true }));// Configura o middleware para analisar o corpo das solicitações HTTP POST que estão no formato urlencoded
app.use(express.json());// Configura o middleware para analisar o corpo das solicitações HTTP POST que estão no formato JSON
app.use(express.static(path.resolve('public')));// Configura o middleware para servir arquivos estáticos do diretório 'public'
app.use(helmet());// Configura o middleware para usar o helmet

const sessionOptions = session({ // Configura as opções da sessão
    secret: process.env.SESSION_SECRET, // Chave secreta para assinar o cookie da sessão
    store: MongoStore.create({ mongoUrl: process.env.CONNECTION_STRING }), // Armazena a sessão no banco de dados
    resave: false, // Não salva a sessão a cada requisição
    saveUninitialized: false, // Não salva sessões vazias
    cookie: { // Configura o cookie
        maxAge: 1000 * 60 * 60 * 24 * 7, // Tempo de vida do cookie em milissegundos (7 dias)
        httpOnly: true // O cookie só pode ser acessado pelo servidor
    }
});
app.use(sessionOptions); // Configura o middleware para usar sessões
app.use(flash()); // Configura o middleware para usar mensagens flash

app.set('views', path.resolve(__dirname, 'views')); // Configura o caminho onde o express vai procurar as views
app.set('view engine', 'ejs'); // Configura o mecanismo de visualização para EJS

app.use(csrf());// Configura o middleware para usar o csurf
app.use(globalMiddleware);// Configura o middleware para usar o middleware importado
app.use(checkCsrfError);// Configura o middleware para usar o middleware importado
app.use(csrfMiddleware);// Configura o middleware para usar o middleware importado
app.use(routes);// Configura o middleware para usar as rotas importadas

app.on('ready', () => {
    // Inicia o servidor na porta 3000 e imprime uma mensagem no console após o servidor ser iniciado
    app.listen(3000, () => {
        console.log('Acessar http://localhost:3000');
        console.log('Servidor executando na porta 3000');
    });
});