import { getUser } from '../service/api.js';
import helloView from '../view/view_hello.js';

export default function init() {
    const {firstName, lastName, section, text} = getUser();
    
    
    helloView(`Hello_01 ${firstName} ${lastName}, ${section}01`);
    

}
