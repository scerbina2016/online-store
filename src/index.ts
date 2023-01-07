//import giftsData from './components/db/giftsEn'
import Gifts from './components/modules/interfaces'

import {default as giftsData} from './components/db/giftsEn'
import makeHeader from './core/header';
import headerNav from './core/headerNav';
import cartHead from './core/cartHead';
import  makeMiddleBanner from './core/makeMiddleBanner';
import makeMainField from './core/makeMainField';
import choicePanelIns from './core/choicePanelIns';
import brandArrMakes from './core/brandArrMakes';
import categoryArrMakes from './core/categoryArrMakes';
import listMakers from './core/listMaker';
import fillGifts from './core/fillGifts';
import giftFieldCheking from './core/giftFieldCheking';
//import getDbFromServer from './components/modules/getDbFromServer'
//const app = new App();
var arrExp:Gifts[] = [];
let serchCategory:string[]=[];
let serchBrand:string[]=[];

const URL = 'https://scerbina2016.github.io/online-store/src/components/db/giftsEn.json';






const request = async (method:string, url:string, body = null) =>{
    const request = await fetch(url, {
        method: method,
        body: body
    });
    return await request.json();
    
}
//===========================================================

//==========================================================
const start = async ()=>{  // ============ json load asinc function begin
    let a = await request('GET', URL)
    //console.log(a);
    console.log(a.limit);
    for (let i = 0; i<a.limit; i++){
       arrExp = a.products  // json to arr
    }
    console.log(arrExp[0]);
    
const brandList = brandArrMakes(arrExp,'brand');

const categoryList = categoryArrMakes(arrExp,'category');



makeHeader('Online store','#06560b','7vh');
headerNav('head-naw','head-container','#06560b',5,2,'3vh','About as','Free sale','Top sale');
cartHead('head-cart','head-cart-top','#06560b',9,2,'5vh','Cart');
makeMiddleBanner('main-banner','main-banner-top','Buy And Be Happy','#06560b','7vh','98vw','14vh','2vh');
makeMainField('main-field','main-container','main-banner','red','3vh','98vw');
choicePanelIns('','dont','main-field-choice','main-choice','main-field','#06560b','3vh','27vw','100vh','#06560b','0.5vh','1vw','flex','column','nowrap','none');
choicePanelIns('Category','need','main-field-category','choice-category','main-field-choice','#06560b','1vw','24vw','25vw','#06560b','0.5vh','1vh','flex','column','nowrap','auto');
choicePanelIns('Brand','need','main-field-brand','choice-brand','main-field-choice','#06560b','1vw','24vw','25vw','#06560b','0.5vh','1vh','flex','column','nowrap','auto');
choicePanelIns('','dont','main-field-gifts','main-gifts','main-field','#06560b','3vh','100%','','#06560b','0.5vh','2vh','flex','row','wrap','none');
choicePanelIns('','dont','gifts-top','gifts-serch-rest','main-field-gifts','#06560b','3vh','99.5%','10vh','#06560b','0.5vh','2vh','flex','column','nowrap','none');

giftFieldCheking(arrExp,categoryList,brandList,serchCategory,serchBrand);

//listMakers(arrExp, categoryList,serchCategory,'category-list','category-list','main-field-category','#08300a','2vw',9);
//listMakers(arrExp,brandList,serchBrand,'brand-list','brand-list','main-field-brand','#08300a','2vw',47);
//fillGifts(arrExp,'gift-container','gift-id','main-field-gifts','#08300a','1.8vw','23%','25vw','#06560b','0.5vh','2vh','column','none')

} // asinc function end




  start()
  /*.then( // с уещпщ ьусеф иидно весь Dom
    response =>{
    let asd = document.getElementsByClassName('category-list');
        console.log(asd);
        for (let i=0;i<asd.length;i++){
        asd[i]?.addEventListener('click',() =>{

            alert(`its work on position  => ${i}`)
        })
        }    
    let qwe = document.getElementsByClassName('head-cart');
    qwe[0].addEventListener('click',() =>{
        alert('Bu bum'+qwe[0]);
        //qwe[0].innerText = 'red'
      
    })
    /*let cartContainer:HTMLCollectionOf<Element> = document.getElementsByClassName('cart');
    cartContainer[0].innerHTML = '<p>aaaaaaaaaaaaaaaaaaaaa</p>';*/


    /*let gift = document.getElementById('gift-in-img0');
    gift?.addEventListener('click',()=>{

        alert(gift?.style.backgroundImage);


    })
    console.log(gift);
    for (let i=0;i<asd.length;i++){
    /*gift[i]?.addEventListener('click',() =>{
        //gift[i].remove(); //TODO копировать всю секцию в корзину (корзина отдельная секция)
        alert(`its gift on position  => ${gift[i].id}`)
    })
    } 
    
    }
  

  );// all begin !!!!!!!!!!!!!!!!!!!*/

