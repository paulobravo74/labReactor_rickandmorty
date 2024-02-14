import $ from 'jquery';


function getApi(callback) {
    const url = 'https://rickandmortyapi.com/api/episode';
  
    $.ajax({
      url: url,
      method: 'GET',
      dataType: 'json',
      success: function(response) {
        callback(null, response);
      },
      error: function(error) {
        callback(error);
      }
    });
}


export { getApi };