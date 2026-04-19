const express = require('express')
const rotas = require('./rotas')
const app = express();


 app.get('/jogadores',rotas.listarJogadores)


app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000')
})