 const createElement =(elements,selectors)=>{
    const element =document.createElement(elements);
    element.classList.add(selectors);
    return element;
}
const textElement=(element,text)=>{
    element.textContent=text;
    return element;
}


const imageMaker=(src,width,height,alt)=>{
    const image= document.createElement('img');
    image.setAttribute('src',src);
    image.setAttribute('width',width);
    image.setAttribute('height',height);
    image.setAttribute('alt',alt);
    return image;
}

export{createElement,textElement,imageMaker}