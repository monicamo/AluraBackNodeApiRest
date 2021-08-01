const fs = require('fs');
const path = require('path');

module.exports = (caminho, nomeDoArquivo, callbackImagemCriada) => {

  const tiposValidos =  ['png','jpg','jpeg']
  const tipo = path.extname(caminho);
  const tipoEhValido = tiposValidos.indexOf(tipo.substring(1)) !== -1;
  const novoCaminho = `./assets/imagens/${nomeDoArquivo}${tipo}`;
  
  if (!tipoEhValido) {
    const erro = "Tipo é inválido";
    callbackImagemCriada(erro);
  } else {
    fs.createReadStream(caminho)
      .pipe(fs.createWriteStream(novoCaminho))
      .on('finish', () => callbackImagemCriada(false, novoCaminho) );
  }

}