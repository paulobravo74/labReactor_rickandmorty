import { get_character } from '../service/serv_character.js'
import fetchOut from './contr_home.js'
import wait from '../view/view_wait.js'
import error from '../view/view_error.js'
import characterDetail from '../view/view_details.js'








//export default function init() {
export default async function init() {
    wait();

       
        try {
            const character = await fetchOut();
            characterDetail(character);   
            
            //$('#app').append($('<div id="characterName">Hello ' + character[10].name + " you're " + character[10].status + '</div>'))
            console.log(character);
            
        } catch (error) {
            console.error("Erro ao buscar os dados:", error);
        }
    
    
    
    
}
  