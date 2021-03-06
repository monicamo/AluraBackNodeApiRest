const moment = require('moment')
const conn = require('../infraestrutura/database/conexao')
const axios = require('axios');
const atendimentoRepository = require('../repositorios/atendimento')
class Atendimento {

  adiciona(atendimento) {

    const dataCriacao = moment().format('YYYY-MM-DD HH:mm:ss');
    const data = moment(atendimento.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:mm:ss');

    const dataEhValida = moment(dataCriacao).isSameOrAfter(data);
    const clienteEhValido = atendimento.cliente.length >= 5;

    const validacoes = [ 
      {
        nome: 'data',
        mensagem: 'Data deve ser maior ou igual a data atual',
        valido: dataEhValida
      },
      {
        nome: 'cliente',
        mensagem: 'Cliente de ter pelo menos 5 caracteres',
        valido: clienteEhValido
      }
    ];

    const erros = validacoes.filter(campo => !campo.valido);
    const existemErros = erros.length;

    if (existemErros) {
      return new Promise( (resolve, reject) => reject(erros));
    } else {
      const atendimentoDatado = { ...atendimento, dataCriacao, data };

      return atendimentoRepository.adiciona(atendimentoDatado)
        .then( (resultados) => {
          const id = resultados.insertId;
          return {...atendimentoDatado, id}
        });
    }

  }

  buscaPorId(id, res) {
    const sql = ` SELECT * from Atendimentos WHERE id=${id}`;

    conn.query(sql, async (erro, resultados) => {
      const atendimento = resultados[0];
      const cpf = atendimento.cliente;

      if (erro) {
        res.status(400).json(erro);
      } else {
        const { data } = await axios.get(`http://localhost:8082/${cpf}`);
        atendimento.cliente = data;
        res.status(200).json(atendimento);
      }
    })
  }

  lista() {
    return atendimentoRepository.lista();
  }

  altera(id, valores, res) {
    if (valores.data) {
      valores.data = moment(valores.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:mm:ss');
    }
    const sql = 'UPDATE Atendimentos SET ? where id = ?';
    conn.query(sql, [valores, id] , (erro, resultados) => {
      if(erro) {
        res.status(400).json(erro);
      } else {
        res.status(200).json({...valores, id})
      }
    })
  }

  deleta(id, res) {
    const sql = ` DELETE FROM Atendimentos WHERE id=${id}`;
    conn.query(sql, (erro, resultados) => {
      if(erro) {
        res.status(400).json(erro);
      } else {
        res.status(200).json({id})
      }
    })
  }
}

module.exports = new Atendimento