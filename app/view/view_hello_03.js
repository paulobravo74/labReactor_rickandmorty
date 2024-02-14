export default function render(message) {
    $('#app').empty().append($('<h1>').text(message));

    $('#app').append($('<a href="./#hello_01" title="Tricks page01">page01</a><br>'));
    $('#app').append($('<a href="./#hello_09" title="Tricks page02">page02</a><br>'));
    $('#app').append($('<a>page03</a>'));
}