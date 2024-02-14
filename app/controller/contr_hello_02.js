import { getUser } from '../service/api.js';
import helloView from '../view/view_hello_02.js';

export default function init() {
    const {firstName, lastName, section} = getUser();
    helloView(`Hello_02 ${firstName} ${lastName}, ${section}02`);
}