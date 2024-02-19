let list_content = $('<div>').addClass('list_content bg_blue');

let character_section = $('<div>').addClass('list_character bg_blue');

let num = 4;


            

export default function render(character) {

    // Mouse over event
    $('#character_' +  character.id + '').mouseover(function() {
        $(this).addClass('list_character_mouseOver');
    });
    
    $('#character_' +  character.id + '').mouseout(function() {
        $(this).removeClass('list_character_mouseOver');
    });
    /*
    */                          
    

    //console.log(characters);
    return  character.map(character => $(list_content)
    .append($('<a href="./#details_" id="character_' + character.id + '">').addClass('list_character bg_blue').prop('title', character.name)
            .append($('<img>').addClass('list_img').attr('src', character.image ))
            .append($('<h2>').addClass('text-center').text(character.name))))

}

/*
character.map(character => $(list_content)
            .append($('<div>').addClass('list_character bg_blue')
                    .append($('<img>').addClass('list_img').attr('src', character.image ))
                    .append($('<h2>').addClass('text-center').text(character.name))))
*/