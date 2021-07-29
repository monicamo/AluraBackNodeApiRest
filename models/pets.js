const connection = require('../infraestrutura/conexao');
const uploadDeArquivo =  require('../arquivos/uploadDeArquivos');

class Pet {
  adiciona(pet, res) {
    const query = 'INSERT INTO Pets SET ?';
    uploadDeArquivo(pet.imagem, pet.nome, (erro, newPath) => {
      if (erro) {
          res.status(400).json({erro})
      } else {
        const newPet = {
          nome: pet.nome,
          imagem: newPath
        };
        connection.query(query, newPet, (erro) => {
          if(erro) {
            console.log(erro);
            res.status(400).json(erro);
          } else {
            res.status(200).json(newPet);
          }
        })
      }
    });

  }
}

module.exports = new Pet();