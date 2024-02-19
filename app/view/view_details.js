//import list from '../view/components/list.js'


export default function render(character) {
    $('#app').empty().append($('<h1>').text('character'));
    console.log(character);


    $('#app').append($('<a href="./#home" title="Tricks home">home</a><br>'));
}