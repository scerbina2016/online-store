import App from './pages/app';
import makeHeader from './core/header';
import headerNav from './core/headerNav';
import cartHead from './core/cartHead';
import  makeMiddleBanner from './core/makeMiddleBanner';
const app = new App();

makeHeader('Online store','#06560b','7vh');
headerNav('head-naw','head-container','#06560b',5,2,'3vh','About as','Free sale','Top sale');
cartHead('head-cart','head-cart-top','#06560b',9,2,'5vh','Cart');
makeMiddleBanner('main-banner','main-banner-top','Buy And Be Happy','#06560b','7vh','100vw','14vh');
console.log(`It's working ===================444444`);