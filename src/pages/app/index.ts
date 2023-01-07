import { initial } from "lodash";
import MainPage from "../main";

class App {
private container: HTMLElement;
private initialPage: MainPage;

constructor () {
    this.container = document.body;
    this.initialPage = new MainPage('main-page');
}
run () {
    const MainPageHTML = this.initialPage.render();
    this.container.append(MainPageHTML); 
    
}

}



export default App;