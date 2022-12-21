import basketTop from './basketTop';

function cartHead(className: string, id:string,colorName:string,colBegin:number,
    rowBegin:number,fontSize:string, ... args:string[] ):void{
        const bodyInner = document.getElementsByTagName('header');
        const headElemCart = document.createElement('a');
        headElemCart.className = className;
        headElemCart.id = id;
        headElemCart.innerText = 'Cart';
        headElemCart.style.color = colorName;
        console.log('color =>' +headElemCart.style.color);
        headElemCart.href = '';
        headElemCart.style.cssText = `grid-column: ${colBegin}/${colBegin+1};
                                     grid-row: ${rowBegin}/${rowBegin+1};
                                     font-size: ${fontSize};
                                     margin-left:auto`;
        document.getElementById(bodyInner[0].id)?.insertAdjacentElement('beforeend', headElemCart);
        headElemCart.addEventListener('pointerover',() =>{
            headElemCart.style.color = '#3dbe45';
            headElemCart.style.textDecorationLine = 'underline';
         });
         headElemCart.addEventListener('pointerout',() =>{
            headElemCart.style.color = colorName;//'#3dbe45';
            headElemCart.style.textDecorationLine = 'none';
         });
         basketTop(className, 'head-bascket-img', colorName,colBegin,rowBegin); 
    }
    export default cartHead;