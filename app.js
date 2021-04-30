const express = require('express');
const paginaInicial = require('./paginas/paginaInicial');
const paginaRegistro = require('./paginas/registro');
const paginaValidaRegistro = require('./paginas/paginaValidaRegistro');
const paginaLogin = require('./paginas/paginaLogin');
const paginaValidaLogin = require('./paginas/paginaValidaLogin');


const app = express();
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));

app.get('/', paginaInicial);
app.get('/registro', paginaRegistro);
app.post('/registro', paginaValidaRegistro);
app.get('/login', paginaLogin);
app.post('/login', paginaValidaLogin);

const port = 5000;

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}.`);
    console.log(`Acesse http://localhost:${port} para testar.`);
})