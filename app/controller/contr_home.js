import { fetchData } from '../service/serv_character.js';
import wait from '../view/view_wait.js'
import error from '../view/view_error.js'
import home from '../view/view_home.js'


export let fetchOut = fetchData();



//export default function init() {
export default async function () {
    wait();

       
        try {
            const characters = await fetchData();
            home(characters);   
            
            
            //console.log(characters[10]);
            
        } catch (error) {
            console.error("Erro ao buscar os dados:", error);
        }
    
    
    
    
}
