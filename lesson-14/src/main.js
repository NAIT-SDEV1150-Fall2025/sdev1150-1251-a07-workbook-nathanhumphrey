import dayjs from 'dayjs';
// perform a named import
import { greetUser } from './utils.js';
// perform default import
import utils from './utils.js'; // utils can be any name you like

const name = prompt('Enter your name:');
const message = greetUser(name || utils.defaultName);
const currentDate = dayjs().format('dddd, MMMM D, YYYY');

document.querySelector('#today').textContent = `Today is ${currentDate}`;
document.querySelector('#greeting').textContent = message;
