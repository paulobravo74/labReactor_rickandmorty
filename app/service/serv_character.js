// Importando o jQuery
import $ from 'jquery';

// Função para buscar a informação da API
export function getCharacters() {
  return new Promise((resolve, reject) => {
    $.ajax({
      url: 'https://rickandmortyapi.com/api/character',
      method: 'GET',
      success: response => {
        resolve(response);
      },
      error: error => {
        reject(error);
      }
    });
  });
}


  
