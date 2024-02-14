export default function render(message) {
    /*    let header = $('<div id="header');
    
    */  
    let header_text = $('<p>Hello World</p>');
       // $('#app').empty().append('<img src="https://images.hdqwalls.com/wallpapers/rick-and-morty-smith-adventures-4k-di.jpg" width="500px" alt="">');
       
        $('#app').empty().append('<div class="bg_green">' + 
                                    '<div><img class="image_header bg_green" src="https://images.hdqwalls.com/wallpapers/rick-and-morty-smith-adventures-4k-di.jpg" alt=""></div>' + 
                                    '<div><h1 class="text">Ricky and Morty</h1></div>' +
                                '</div>');
       
        $('#app').append($('<div class="search bg_red">' + 
                            '<p class="arrow bg_green"><<<</p>' +
                            '<form class="bg_blue">' + 
                              //  '<img class="icon" src="./img/icon-search.png" alt="">' +
                                '<input type="text" id="search_input" name="search_input" placeholder="Search..">' + 
                            '</form>' + 
                            '<p class="arrow bg_green">>>></p>' +
                            '</div>'));

        $('#app').append($('<h1 class="temp_padding bg_red">').text(message));
       
        $('#app').append($('<a href="./#hello_03" title="Tricks page03">page03</a>'));
    }