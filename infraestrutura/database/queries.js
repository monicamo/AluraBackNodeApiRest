import { resolve } from "path/posix";

const conexao = require('./conexao');


const executeQuery = (query, parametros = '') => {
  return new Promise(( resolve, reject ) => {
    conexao.query(query, parametros, (erros, resultados, campos) => {
      if (erros) {
        reject(erros);
      } else {
        resolve(resultados);
      }
    });
  }) 
}
