export default function render() {

    return $('<div class="search bg_red">' + 
    '<p class="arrow bg_green"><<<</p>' +
    '<form class="bg_blue">' + 
      //  '<img class="icon" src="./img/icon-search.png" alt="">' +
        '<input type="text" id="search_input" name="search_input" placeholder="Search..">' + 
    '</form>' + 
    '<p class="arrow bg_green">>>></p>' +
    '</div>');

}