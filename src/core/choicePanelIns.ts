import { StringChain } from "lodash";

function choicePanelIns (name:string,nameNeed:string,className:string, id:string, inBlockClass:string,
    colorName:string, fontSize: string, width:string, height:string, borderColor:string,
    borderWidth:string, borderRadius:string,display:string,flexDir:string, flexWrap:string, overflow:string):void{
        const bodyInner:HTMLCollectionOf<Element> = document.getElementsByClassName(inBlockClass);
        if(nameNeed === 'need'){
        const nameField:HTMLElement = document.createElement('p');
        nameField.innerText = name;
        nameField.style.color = colorName;
        nameField.style.margin = '1vh auto 1vh auto';
        nameField.style.borderBottom = `0.5vh solid ${borderColor}`;
        document.getElementById(bodyInner[0].id)?.insertAdjacentElement('beforeend', nameField);
        }
        const mainField:HTMLElement = document.createElement('section');
        
        
        mainField.className = className;
        mainField.id = id;
        mainField.style.color = colorName;
        mainField.style.fontSize = fontSize;
        mainField.style.width = width;
       
        mainField.style.height = height;
        mainField.style.maxHeight = '100%';

        mainField.style.display =display;
        mainField.style.flexWrap = flexWrap;
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
        mainField.style.padding = 'auto';
        mainField.style.justifyContent = 'space-around';

        document.getElementById(bodyInner[0].id)?.insertAdjacentElement('beforeend', mainField);
    }
    
    export default choicePanelIns;