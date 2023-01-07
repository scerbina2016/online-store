function makeHeader(name:string, colorName:string,fontSize: string):void {
    const head = document.createElement('header');
    head.id = 'header-container';
    //document.body.append(head);
    document.body.insertAdjacentElement('afterbegin', head);
    head.style.cssText = `display: grid;
                        grid-template-columns: 1fr repeat(8,10vw) 5vw 5vw 5vw 5vw 1fr;
                        grid-template-rows: 5vh 5vh 5vh;`
head.style.color = colorName;                        
let bodyInner = document.getElementsByTagName('header');
let bodyInnerById = bodyInner[0];
// ===========================================
let elem = document.createElement('p');
elem.id = 'header-name';
elem.style.cssText =`grid-column: 1/5;
                     grid-row: 1/3;
                     font-size: ${fontSize};
                     margin:auto;`;

elem.innerText = name;
elem.style.color = colorName;
// ========================================

let headerHook= bodyInner[0].id;
document.getElementById(headerHook)?.appendChild(elem)
}
export default makeHeader;


