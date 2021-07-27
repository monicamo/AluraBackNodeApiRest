const fs = require('fs');

fs.readFile('./assets/cao1.jpg', (erro, buffer) => {
  console.log('IMAGEM BUFERIZADA');

  fs.writeFile('./assets/salsicha2.jpg', buffer, (erro) => {
    console.log('imagem escrita');
  });
});