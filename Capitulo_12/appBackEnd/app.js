const express = require("express")();
const app = express;
const port = 3001;
const livros = require('./livros');

app.get('/', (req, res) => {
  res.send("<a href='/livros'>Livros</a>");
});

app.get('/cap12', (req, res) => {
  res.send('<h2>Capitulo 12: Introdução ao Express</h2><a href="/">Home</a>')
});

const log = (req, res, next) => {
  console.log(`................ Acessado em ${new Date()}`);
  next();
}

app.get('/transfere', log, (req, res) => {
  res.send("Ok! Valor transferido com sucesso...")
});

app.use('/livros', livros);

app.listen(port, () => {
  console.log(`Servidor rodando me http://localhost:${port}`);
});
