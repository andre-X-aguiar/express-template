// Importando a dependência Express (responsável pelo Web Server)
const express = require('express');

// Importando o módulo Router (Responsável pelas rotas da aplicação) do Express
const router = express.Router();

// Rota básica GET / | Exemplo; http://localhost/
router.get('/', (request, response, next) => {
    // Renderizando o arquivo "index" do Template Engine EJS no arquivo views/index.ejs
    response.render('index')
});

// Exportando o módulo Router para utilizar no arquivo app.js
module.exports = {
    router
}