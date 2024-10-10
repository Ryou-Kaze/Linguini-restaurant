import { createElement,textElement,imageMaker } from "./elementMaker";


function cardMaker(imagesrc,title,desc,price){
    
    const card  = createElement('div','menu-item-card');

    const cardImageContainer = createElement('div','menu-item-image-container')
    const cardOneImage = imageMaker(imagesrc,"80","80","image of food");
    cardImageContainer.append(cardOneImage);

    const cardPara = createElement('div','menu-item-para');
    const cardH2 = createElement('h2','menu-item-title');
    textElement(cardH2,title)
    const cardP = createElement('p','menu-item-desc');
    textElement(cardP,desc)
    const cardPrice= createElement('div','menu-item-price');
    textElement(cardPrice,price);
    cardPara.append(cardH2);
    cardPara.append(cardP);
    cardPara.append(cardPrice);

    card.append(cardImageContainer);
    card.append(cardPara);
    return card;
}



const cardOne = cardMaker("public/salt-and-pepper-chicken-la-horiz-4.jpg","Salted Fried Chicken","Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.","$35.50")
cardOne.setAttribute('id',"card1")
const cardTwo  = cardMaker("public/salt-and-pepper-chicken-la-horiz-4.jpg","Salted Fried Chicken","Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.","$35.50")
cardTwo.setAttribute('id',"card2")
const cardThree  = cardMaker("public/salt-and-pepper-chicken-la-horiz-4.jpg","Salted Fried Chicken","Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.","$35.50")
const cardFour  = cardMaker("public/salt-and-pepper-chicken-la-horiz-4.jpg","Salted Fried Chicken","Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.","$35.50")
const cardFive  = cardMaker("public/salt-and-pepper-chicken-la-horiz-4.jpg","Salted Fried Chicken","Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.","$35.50")
const cardSix  = cardMaker("public/salt-and-pepper-chicken-la-horiz-4.jpg","Salted Fried Chicken","Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.","$35.50")
const itemsContainerBF = [cardOne,cardTwo,cardThree,cardFour,cardFive,cardSix];

export{itemsContainerBF,cardMaker};