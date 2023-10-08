const express = require('express');
const app = express()

const { router } = require('./routers/router')

app.use(express.json());

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.static(__dirname + '/../public'));

app.use('/', router);

app.use((request, response, next) => {
  response.send('404 | not found')
})

module.exports = {
    app
}