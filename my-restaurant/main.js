import './style.css'
import { textContainer } from './home.js'
import { menuContainer ,breakfastButton} from './menu.js';
import { contentHeaderContainer,contentBody } from './about.js';



const content = document.querySelector('#content');
const home = document.querySelector('#home');
const menu = document.querySelector('#menu');
const about = document.querySelector('#about')
home.addEventListener('click',()=>{
  content.className='';                             //remove all classes
  content.classList.add('content-home');
  content.innerHTML="";
  content.append(textContainer);
})
menu.addEventListener('click',()=>{
  content.className='';
  content.classList.add('content-menu');
  content.innerHTML="";
  content.append(menuContainer);
   window.scrollTo({ top: 0, behavior: 'smooth' });
  document.querySelector('#breakfastB').click();
})
about.addEventListener('click',()=>{
  content.className='';
  content.classList.add('content-about');
  content.innerHTML="";
  content.append(contentHeaderContainer);
  content.append(contentBody);
})



content.append(textContainer);


