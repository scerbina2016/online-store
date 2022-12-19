function makeHeader(name:string, colorName:string):void {
    const head = document.createElement('header');
    head.id = 'header-container';
    document.body.append(head);
    head.style.cssText = `display: grid;
                        grid-template-columns: 1fr repeat(10,10vw) 1fr;
                        grid-template-rows: 50px 50px 50px;`
let bodyInner = document.getElementsByTagName('header');
let bodyInnerById = bodyInner[0];
let elem = document.createElement('p');
elem.id = 'paragraf2';
elem.style.cssText =`grid-column: 2/6;
                     grid-row: 1/3;
                     border: 1px solid red;
                     font-size: 5vmin;`

elem.innerText = name;
elem.style.color = colorName;
let headerHook= bodyInner[0].id;
document.getElementById(headerHook)?.appendChild(elem)

}
export default makeHeader;


/*let bodyInner = document.getElementsByTagName('header');
let bodyInnerById = bodyInner[0];
bodyInnerById.style.cssText= `display: flex;
                              flex-direction:column;  `;
let elem = document.createElement('p');
elem.id = 'paragraf2';
elem.innerText = 'par 2 elem from code'
let headerHook= bodyInner[0].id;
document.getElementById(headerHook)?.appendChild(elem);*/