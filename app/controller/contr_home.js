//import { getCharacters } from '../service/serv_character.js';
import { getUser } from '../service/api.js';
import helloView from '../view/view_home.js';

export default function init() {
//    const {id, name, status} = getCharacters();

  

    const {firstName, lastName, section} = getUser();
    helloView(`Hello_home ${firstName} ${lastName}, ${section}home`);
    
}