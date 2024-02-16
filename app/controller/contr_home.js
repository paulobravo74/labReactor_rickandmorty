import { fetchData } from '../service/serv_character.js';
import wait from '../view/view_wait.js'
import home from '../view/view_home.js'








//export default function init() {
export default async function () {
    wait();

    
    
    
    //const displayCharacterName = async () => {
        try {
            const characterName = await fetchData();
            
            //$('#app').append($('<div id="characterName">Hello ' + characterName.name + " you're " + characterName.status + '</div>'))
            console.log(characterName);
            
        } catch (error) {
            console.error("Erro ao buscar os dados:", error);
        }
    //};
    
   // displayCharacterName();
    
    const {name, status} = fetchData();

    home();


    //waitView();

    //helloView(`This is another message ${firstName}`);
    
    
    
}
