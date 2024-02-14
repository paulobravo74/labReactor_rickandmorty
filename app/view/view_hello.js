export default function render(message) {
/*    let header = $('<div id="header');

*/  
let header_text = $('<p>Hello World</p>');
    $('#app').empty().append($('<h1>').text(message));
    

    $('#app').append($('<a>page01</a><br>'));
    $('#app').append($('<a href="./#hello_home" title="Tricks page02">home</a><br>'));
    $('#app').append($('<a href="./#hello_03" title="Tricks page03">page03</a>'));
}
