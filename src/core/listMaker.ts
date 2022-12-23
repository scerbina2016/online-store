function listMakers (fromArr:string[],className:string, id:string, inBlockClass:string,
    colorName:string, fontSize: string):void{
        
        const bodyInner:HTMLCollectionOf<Element> = document.getElementsByClassName(inBlockClass);
      for (let i = 0; i < fromArr.length; i ++){
        const mainField:HTMLElement = document.createElement('div');  
        mainField.className = className;
        mainField.id = `${id}-${i}`;
        mainField.style.color = colorName;
        mainField.style.fontSize = fontSize;
        mainField.style.marginLeft = '0.5vh';
        mainField.style.marginTop = '0.5vh';
      
        mainField.innerText = fromArr[i];
        document.getElementById(bodyInner[0].id)?.insertAdjacentElement('afterbegin', mainField);


    }
    }
    
    export default listMakers;