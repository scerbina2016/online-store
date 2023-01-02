import listMakers from './listMaker';
import fillGifts from './fillGifts';
import Gifts from '../components/modules/interfaces';

async function giftFieldCheking(arrExp:Gifts[],categoryList:string[],brandList:string[],serchCategory:string[],
    serchBrand:string[]){

let arrCateg = listMakers(arrExp, categoryList,serchCategory,'category-list','category-list','main-field-category','#08300a','2vw',9);
let arrBrand = listMakers(arrExp,brandList,serchBrand,'brand-list','brand-list','main-field-brand','#08300a','2vw',47);
fillGifts(arrExp,'gift-container','gift-id','main-field-gifts','#08300a','1.8vw','23%','25vw','#06560b','0.5vh','2vh','column','none');
console.log('from gift checking =>=>=> categ');
console.log(arrCateg);
console.log('from gift checking =>=>=> brand');
console.log(arrBrand);
console.log('^^^^^^^^^^^^^^^^^^^^^^^^');
}

export default giftFieldCheking;