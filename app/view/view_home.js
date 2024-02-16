import banner from '../view/components/banner.js'



const image_banner = 'https://images.hdqwalls.com/wallpapers/rick-and-morty-smith-adventures-4k-di.jpg';

export default function render() {
     
    banner();
    //$('#app').append($('<div id="characterName">Hello ' + characterName.name + " you're " + characterName.status + '</div>'))

  /*
    // header image
    $('#app').empty().append('<div class="bg_green">' + 
    '<div><img class="image_header bg_green" src="https://images.hdqwalls.com/wallpapers/rick-and-morty-smith-adventures-4k-di.jpg" alt=""></div>' + 
    '<div><h1 class="text">Ricky and Morty</h1></div>' +
    '</div>');
    */

    // arrows and search                        
    $('#app').empty().append($('<div class="search bg_red">' + 
                        '<p class="arrow bg_green"><<<</p>' +
                        '<form class="bg_blue">' + 
                          //  '<img class="icon" src="./img/icon-search.png" alt="">' +
                            '<input type="text" id="search_input" name="search_input" placeholder="Search..">' + 
                        '</form>' + 
                        '<p class="arrow bg_green">>>></p>' +
                        '</div>'));


    
    /*
      const displayCharacterName = async () => {
        try {
          const characterName = await fetchData();

          $('#app').append($('<div id="characterName">Hello ' + characterName.name + " you're " + characterName.status + '</div>'))
          console.log(characterName);
          

          

        } catch (error) {
          console.error("Erro ao buscar os dados:", error);
        }
      };
      
      displayCharacterName();
    */


    
      $('#app').append($('<a href="./#hello_01" title="Tricks page01">page01</a><br>'));
      $('#app').append($('<a>home</a><br><br>'));
  
      $('#app').append($('<a href="./#error" title="Tricks error">error  </a>'));
      $('#app').append($('<a href="./#wait" title="Tricks wait">wait  </a>'));



  }