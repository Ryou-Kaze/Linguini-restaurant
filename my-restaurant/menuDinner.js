
import { cardMaker } from "./menuBreakfast";


const cardOne = cardMaker("public/salt-and-pepper-chicken-la-horiz-4.jpg","Dinner","Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.","$35.50")
cardOne.setAttribute('id',"card1")
const cardTwo  = cardMaker("public/salt-and-pepper-chicken-la-horiz-4.jpg","Salted Fried Chicken","Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.","$35.50")
cardTwo.setAttribute('id',"card2")
const cardThree  = cardMaker("public/salt-and-pepper-chicken-la-horiz-4.jpg","Salted Fried Chicken","Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.","$35.50")
const cardFour  = cardMaker("public/salt-and-pepper-chicken-la-horiz-4.jpg","Salted Fried Chicken","Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.","$35.50")
const cardFive  = cardMaker("public/salt-and-pepper-chicken-la-horiz-4.jpg","Salted Fried Chicken","Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.","$35.50")
const cardSix  = cardMaker("public/salt-and-pepper-chicken-la-horiz-4.jpg","Salted Fried Chicken","Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.","$35.50")

const itemsContainerD= [cardOne,cardTwo,cardThree,cardFour,cardFive,cardSix];
export {itemsContainerD};