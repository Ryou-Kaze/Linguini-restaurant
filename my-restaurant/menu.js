import { createElement,imageMaker,textElement } from "./elementMaker";
import { itemsContainerBF } from "./menuBreakfast";
import { itemsContainerL } from "./menuLunch";
import { itemsContainerD } from "./menuDinner";
const menuContainer = createElement('div','menu-container');
const h1=document.createElement('h1');
textElement(h1,"Our Menu")
h1.setAttribute('id','ourMenu')
const h2=document.createElement('h2');
textElement(h2,"Even the most picky eaters will have many options with our menu")
menuContainer.append(h1);
menuContainer.append(h2);
const menuContent= createElement('div','menu-content');
const periodButtonContainer= createElement('div','time-period-buttons-container');
const breakfastButton = document.createElement('button');
textElement(breakfastButton,"BREAKFAST");
breakfastButton.setAttribute('id','breakfastB');
const lunchButton = document.createElement('button');
textElement(lunchButton,"LUNCH");
lunchButton.setAttribute('id','lunchB');
const dinnerButton = document.createElement('button');
textElement(dinnerButton,"DINNER");
dinnerButton.setAttribute('id','dinnerB');
const itemsContainer= createElement('div','menu-items-container')
breakfastButton.addEventListener('click',()=>{


  
  lunchButton.className=""
  dinnerButton.className=""
  
  if (!breakfastButton.classList.contains('active')){
    document.querySelectorAll('.menu-item-image-container').forEach(item=>{
      item.classList.remove('move');
    })
    document.querySelectorAll('.menu-item-para').forEach(item => {
      item.classList.remove('move');
    });
    itemsContainer.innerHTML=""
    itemsContainerBF.forEach(card => {
      itemsContainer.append(card);
    });
    menuContent.append(itemsContainer);
    setTimeout(()=>{    
      document.querySelectorAll('.menu-item-image-container').forEach(item=>{
        item.classList.add('move');
      })
      document.querySelectorAll('.menu-item-para').forEach(item => {
        item.classList.add('move');
      })
      breakfastButton.classList.add('active');
    },10);
    if(!document.querySelector('.menu-item-image-container').classList.includes('move')){
      setTimeout(() => {
        document.querySelectorAll('.menu-item-image-container').forEach(item=>{
          item.classList.add('move');
        })
        document.querySelectorAll('.menu-item-para').forEach(item => {
          item.classList.add('move');
        })
        breakfastButton.classList.add('active');
      },10);
    }
  }
  

})
lunchButton.addEventListener('click',()=>{
  


  breakfastButton.className=""
  dinnerButton.className="";

  


  if (!lunchButton.classList.contains('active')){
    document.querySelectorAll('.menu-item-image-container').forEach(item=>{
      item.classList.remove('move');
    })
    document.querySelectorAll('.menu-item-para').forEach(item => {
      item.classList.remove('move');
    });
    itemsContainer.innerHTML=""
    itemsContainerL.forEach(card => {
      itemsContainer.append(card);
    });
    menuContent.append(itemsContainer);
    setTimeout(()=>{    
      document.querySelectorAll('.menu-item-image-container').forEach(item=>{
        item.classList.add('move');
      })
      document.querySelectorAll('.menu-item-para').forEach(item => {
        item.classList.add('move');
      })
      lunchButton.classList.add('active');
    },10);
    if(!document.querySelector('.menu-item-image-container').classList.includes('move')){
      setTimeout(() => {
        document.querySelectorAll('.menu-item-image-container').forEach(item=>{
          item.classList.add('move');
        })
        document.querySelectorAll('.menu-item-para').forEach(item => {
          item.classList.add('move');
        })
        lunchButton.classList.add('active');
      },10);
    }
  }

})
dinnerButton.addEventListener('click',()=>{

  lunchButton.className=""
  breakfastButton.className=""
  


  if (!dinnerButton.classList.contains('active')){
    document.querySelectorAll('.menu-item-image-container').forEach(item=>{
      item.classList.remove('move');
    })
    document.querySelectorAll('.menu-item-para').forEach(item => {
      item.classList.remove('move');
    });
    itemsContainer.innerHTML=""
    itemsContainerD.forEach(card => {
      itemsContainer.append(card);
    });
    menuContent.append(itemsContainer);
    setTimeout(()=>{    
      document.querySelectorAll('.menu-item-image-container').forEach(item=>{
        item.classList.add('move');
      })
      document.querySelectorAll('.menu-item-para').forEach(item => {
        item.classList.add('move');
      })
      dinnerButton.classList.add('active');
    },10);
    if(!document.querySelector('.menu-item-image-container').classList.includes('move')){
      setTimeout(() => {
        document.querySelectorAll('.menu-item-image-container').forEach(item=>{
          item.classList.add('move');
        })
        document.querySelectorAll('.menu-item-para').forEach(item => {
          item.classList.add('move');
        })
        dinnerButton.classList.add('active');
      },10);
    }
  }
  

})
periodButtonContainer.append(breakfastButton);
periodButtonContainer.append(lunchButton);
periodButtonContainer.append(dinnerButton);
menuContent.append(periodButtonContainer);

menuContainer.append(menuContent);

export{menuContainer,breakfastButton};












