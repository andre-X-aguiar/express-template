const express = require('express');
const app = express()

// Importando o Router: Responsável por estabelecer as rotas da aplicação
const { router } = require('./routers/router')

// Codificando o corpo das requisições para JSON
app.use(express.json());

// Definindo o Template Engine EJS: SSR (Server Side Rendering)
app.set('view engine', 'ejs');
app.set('views', './views');

// Definindo arquivos estáticos (CSS, JS (público), etc..)
app.use(express.static(__dirname + '/../public'));

// Utilizando o Router
app.use('/', router);

// Apresentando 404 se a rota não for encontrada no Router
app.use((request, response, next) => {
  response.send('404 | not found')
})

// Exportando o módulo Application para utilizar no server.js
module.exports = {
    app
}