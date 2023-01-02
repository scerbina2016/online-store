function basketTop (className: string, id:string,colorName:string,colBegin:number,
                    rowBegin:number):void {
            const bodyInner = document.getElementsByTagName('header');
            const headElemCart = document.createElement('div');
            headElemCart.className = className;
            headElemCart.id = id;
           
            
          
            headElemCart.style.cssText = `grid-column: ${colBegin+1}/${colBegin+3};
                                         grid-row: ${rowBegin}/${rowBegin+2};
                                         background-image: url('./images/bascketSign64.png');
                                         
                                         background-size:contain;
                                         background-position:top;
                                         background-repeat: no-repeat;

                                         position:relative;
                                         top: -2vh`;
            document.getElementById(bodyInner[0].id)?.insertAdjacentElement('beforeend', headElemCart);
            headElemCart.addEventListener('pointerover',() =>{
                headElemCart.style.cursor = 'pointer';
            
             });
             headElemCart.addEventListener('pointerout',() =>{
                headElemCart.style.cursor = 'inherit';//'#3dbe45';
                
             });
             //return [colBegin,rowBegin];
             
             headElemCart.addEventListener('click',() =>{
                headElemCart.style.color = 'red';
                console.log('Make basket in first, stupid!!!')
            // TODO function for works with cart
             });
        }

export default basketTop;