import { getUser } from '../service/api.js';
import helloView from '../view/view_hello_03.js';

export default function init() {
    const {firstName, lastName, section} = getUser();
    helloView(`Hello_03 ${firstName} ${lastName}, ${section}03`);
}