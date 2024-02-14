// Importando a função do módulo apiModule.js
import { getCharacters } from '../service/serv_character.js';

let data;
// Utilizando a função para buscar a informação da API
getCharacters()
  .then(response => {
    // Fazendo algo com a resposta da API
    data = response.results
    return results;
    console.log(response);
  })
  .catch(error => {
    // Lida com o erro, se houver algum
    console.error(error);
  });

  