import App from './pages/app';
import makeHeader from './core/header';
import headerNav from './core/headerNav';
const app = new App();

makeHeader('Online store','#0a470e');
headerNav('head-container','Home','About','Popular','Etc');

console.log(`It's working ===================444444`);