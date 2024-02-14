import helloHome from './controller/contr_home.js';
import helloController from './controller/contr_hello.js';
import hello02Controller from './controller/contr_hello_02.js';
import hello03Controller from './controller/contr_hello_03.js';
//import api_character from './controller/contr_character.js';

export const hello_home = {
    hash: '#hello_home',
    init: helloHome
};

export const hello = {
    hash: '#hello_01',
    init: helloController
};

export const hello02 = {
    hash: '#hello_09',
    init: hello02Controller
};

export const hello03 = {
    hash: '#hello_03',
    init: hello03Controller
};

/*
export const api = {
    hash: '#api_00',
    init: api_character
};
*/

