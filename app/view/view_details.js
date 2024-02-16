


export default function render(character_view) {
    $('#app').empty().append($('<h1>').text(character_view));

    $('#app').append($('<a>page01</a><br>'));
    $('#app').append($('<a href="./#hello_09" title="Tricks page02">page02</a><br>'));
    $('#app').append($('<a href="./#hello_03" title="Tricks page03">page03</a>'));
}