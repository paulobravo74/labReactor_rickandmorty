export default function render(message_error) {

    $('#app').empty().append($('<h1>').text(message_error));


    $('#app').append($('<a href="./#home" title="Tricks home">home</a><br>'));
}