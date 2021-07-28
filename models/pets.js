const connection = require('../infraestrutura/conexao');

class Pet {
  adiciona(pet, res) {
    const query = 'INSERT INTO Pets SET ?';
    connection.query(query, pet, (erro) => {
      if(erro) {
        console.log(erro);
        res.status(400).json(erro);
      } else {
        console.log('Inseriu o PET');
        res.status(200).json(pet);
      }
    })
  }
}

module.exports = new Pet();