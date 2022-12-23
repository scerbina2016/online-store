//import giftsData from './components/db/giftsEn'
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
//import getDbFromServer from './components/modules/getDbFromServer'
//const app = new App();

//===========================================================

//==========================================================
const brandList = brandArrMakes(giftsData,'brand');
const categoryList = categoryArrMakes(giftsData,'category');
console.log(categoryList);


makeHeader('Online store','#06560b','7vh');
headerNav('head-naw','head-container','#06560b',5,2,'3vh','About as','Free sale','Top sale');
cartHead('head-cart','head-cart-top','#06560b',9,2,'5vh','Cart');
makeMiddleBanner('main-banner','main-banner-top','Buy And Be Happy','#06560b','7vh','98vw','14vh','2vh');
makeMainField('main-field','main-container','main-banner','red','3vh','98vw');
choicePanelIns('','dont','main-field-choice','main-choice','main-field','#06560b','3vh','50vh','100vh','#06560b','0.5vh','2vh','column','none');
choicePanelIns('Category','need','main-field-category','choice-category','main-field-choice','#06560b','3vh','48vh','50vh','#06560b','0.5vh','1vh','column','scroll');
choicePanelIns('Brand','need','main-field-brand','choice-brand','main-field-choice','#06560b','3vh','48vh','50vh','#06560b','0.5vh','1vh','column','scroll');

choicePanelIns('','dont','main-field-gifts','main-gifts','main-field','#06560b','3vh','100%','80vh','#06560b','0.5vh','2vh','column','none');
listMakers(categoryList,'category-list','category-list','main-field-category','red','3vh');
listMakers(brandList,'brand-list','brand-list','main-field-brand','green','3vh');

choicePanelIns('','dont','gifts-top','gifts-serch-rest','main-field-gifts','#06560b','3vh','99.5%','10vh','#06560b','0.5vh','2vh','column','none');
console.log(`It's working ===================444444`);