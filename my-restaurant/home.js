import { createElement,textElement } from "./elementMaker";


const textContainer= createElement('div','text-container');
const greeting = createElement('div','greeting');
const h1 = document.createElement('h1');
textElement(h1,"Welcome to Linguini");
const h2 = document.createElement('h2');
textElement(h2,"Ho Chi Minh's best italian restaurant");
greeting.append(h1);
greeting.append(h2);
const buttonContainer=createElement('div','button-container');
const button = document.createElement('button');
textElement(button,"Check Menu!");
buttonContainer.append(button);
textContainer.append(greeting);
textContainer.append(buttonContainer);
export{textContainer};


