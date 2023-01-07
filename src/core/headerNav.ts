function headerNav(className: string, id:string,colorName:string,colBegin:number,
   rowBegin:number,fontSize:string, ... args:string[] ):void{
      
   let bodyInner = document.getElementsByTagName('header');
   for (let i = 0; i < args.length; i++){
      const headElemNav = document.createElement('a');
      headElemNav.className = className;
      headElemNav.id = `${className}-${i}`;
      headElemNav.innerText = args[i];
      headElemNav.style.color = colorName;
      console.log('color =>' +headElemNav.style.color);
      //headElemNav.href = '';
      headElemNav.style.cssText = `grid-column: ${colBegin+i}/${colBegin+i+1};
                                   grid-row: ${rowBegin}/${rowBegin+1};
                                   font-size: ${fontSize};`;
      document.getElementById(bodyInner[0].id)?.insertAdjacentElement('beforeend', headElemNav);
      headElemNav.addEventListener('pointerover',() =>{
         headElemNav.style.color = '#3dbe45';
      });
      headElemNav.addEventListener('pointerout',() =>{
         headElemNav.style.color = colorName;//'#3dbe45';
      });
   }


}
export default headerNav;