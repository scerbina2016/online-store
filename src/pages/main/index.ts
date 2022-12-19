class MainPage {
private container: HTMLElement;

static TextObject = {
MainTitle: 'Main page',
}
constructor (id: string) {
    this.container = document.createElement('div');
    this.container.id = id;
}

private createHeaderTitle (text: string) {
    const headrTitle = document.createElement('h1');
    headrTitle.innerText = text;
    return headrTitle;
}
render(){
    const title = this.createHeaderTitle(MainPage.TextObject.MainTitle);
    this.container.append(title);
    return this.container;
}
}

export default MainPage;