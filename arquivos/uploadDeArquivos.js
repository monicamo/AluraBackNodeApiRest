const fs = require('fs');

fs.createReadStream('./assets/cao1.jpg')
  .pipe(fs.createWriteStream('./assets/salsicha-stream.jpg'))
  .on('finish', () => console.log('imagem foi escrita com sucesso'));