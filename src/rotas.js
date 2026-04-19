const bancodedados = require('./bancodedados')

let jogadorDaVez = 0;

const listarJogadores = (req, res) => {
   const nomeJogador = bancodedados[jogadorDaVez];
   
   jogadorDaVez++;
   if(jogadorDaVez >= bancodedados.length){
    jogadorDaVez = 0;
   }    
   return res.send(`É a vez de ${nomeJogador} jogar!`);
}

module.exports = {
  listarJogadores
}