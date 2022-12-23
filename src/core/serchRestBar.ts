function serchResetBar (className:string, id:string, inBlockClass:string,
    colorName:string, fontSize: string, width:string, height:string, borderColor:string,
    borderWidth:string, borderRadius:string,flexDir:string, overflow:string):void{
        const bodyInner:HTMLCollectionOf<Element> = document.getElementsByClassName(inBlockClass);
        
        const mainField:HTMLElement = document.createElement('section');
        
        
        mainField.className = className;
        mainField.id = id;
        mainField.style.color = colorName;
        mainField.style.fontSize = fontSize;
        mainField.style.width = width;
        mainField.style.height = height;
        mainField.style.display ='flex';
        mainField.style.flexDirection = flexDir;
        mainField.style.borderColor = borderColor;
        mainField.style.borderWidth = borderWidth;
        mainField.style.borderStyle = 'solid';
        mainField.style.borderRadius = borderRadius;
        mainField.style.marginLeft = '0.5vh';
        mainField.style.marginRight = '0.5vh';
        mainField.style.marginTop = '0.5vh';
        mainField.style.marginBottom = '0.5vh';
        mainField.style.overflowY = overflow;
        document.getElementById(bodyInner[0].id)?.insertAdjacentElement('beforeend', mainField);
    }
    
    export default serchResetBar;