const fs = require('fs');
const path = require('path');

module.exports = (caminho, nomeDoArquivo, callbackImagemCriada) => {

  const tiposValidos =  ['png','jpg','jpeg']
  const tipo = path.extname(caminho);
  const tipoEhValido = tiposValidos.indexOf(tipo.substring(1));
  const novoCaminho = `./assets/imagens/${nomeDoArquivo}${tipo}`;

  if (tipoEhValido === -1) {
    console.log('ERRO - tipo invalido');
  } else {
    fs.createReadStream(caminho)
      .pipe(fs.createWriteStream(novoCaminho))
      .on('finish', () => callbackImagemCriada(novoCaminho) );
  }

}