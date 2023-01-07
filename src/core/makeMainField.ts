function makeMainField (className:string,id:string,afterBlock:string,
    colorName:string,fontSize: string,width:string,height?:string):void{
        const mainField:HTMLElement = document.createElement('section');
        const bodyInner:HTMLCollectionOf<Element> = document.getElementsByClassName(afterBlock);
        mainField.className = className;
        mainField.id = id;
        mainField.style.color = colorName;
        mainField.style.fontSize = fontSize;
        mainField.style.width = width;
        mainField.style.display ='flex';
        document.getElementById(bodyInner[0].id)?.insertAdjacentElement('afterend', mainField);
    }

    export default makeMainField