import Gifts from "../components/modules/interfaces";
import fillGifts from "./fillGifts";
import fillGiftsInn from "./fillGiftsInn";
function listMakers (arrExp:Gifts[], fromArr:string[],toArr:string[],className:string, id:string, inBlockClass:string,
    colorName:string, fontSize: string,adder:number):string[]{
        
        const bodyInner:HTMLCollectionOf<Element> = document.getElementsByClassName(inBlockClass);
        for(let i=0;i<adder;i++){
        const mainFieldFirst:HTMLElement = document.createElement('div');
        mainFieldFirst.innerHTML = `<p style="height:2vw"></p>`
        document.getElementById(bodyInner[0].id)?.insertAdjacentElement('beforeend', mainFieldFirst);
        } 
      for (let i = 0; i < fromArr.length; i ++){
        const mainField:HTMLElement = document.createElement('div');  
        mainField.className = className;
        mainField.id = `${id}-${i}`;
        mainField.style.color = colorName;
        mainField.style.fontSize = fontSize;
        mainField.style.marginLeft = '0.5vh';
        mainField.style.marginTop = '0.5vh';
        mainField.style.cursor = 'pointer';
        mainField.innerText = fromArr[i];
        //console.log(`i => ${i} cat: ${fromArr[i]}`)
        document.getElementById(bodyInner[0].id)?.insertAdjacentElement('beforeend', mainField);

        mainField.addEventListener('pointerover',() =>{
          mainField.style.color = 'red';
       });
       mainField.addEventListener('pointerout',() =>{
          mainField.style.color = colorName;//'#3dbe45';
       });

       mainField.addEventListener('click',()=>{
        //alert(`add choice  click => ${mainField.id}`);
        
            console.log(`in if true ${fromArr[i]}+  => toArr[${i}]  ${toArr[i]}`);
            if(toArr.indexOf(fromArr[i])=== -1){
              console.log('aaaaaaaaaaaaaaaaaaaa!!!!!!!!!!!!!!!!!=>'+ mainField.innerText+'=>'+toArr.indexOf(fromArr[i]));
             toArr.unshift(fromArr[i]);
             mainField.innerHTML = `<span>${mainField.innerText}</span><span class="birds" style = "color:red">&#10004</span>`;
             
             // TODO clear gifts-container- #gift-id- before ran next fillGifts
             const giftToErase:HTMLCollectionOf<Element> = document.getElementsByClassName('section-gift');
              console.log('gift to erase======================='+giftToErase.length);
              

              while(giftToErase.length) {
                giftToErase[0].remove();
              }

             
             fillGiftsInn(toArr,arrExp,'gift-container','gift-id','main-field-gifts','#08300a','1.8vw','23%','25vw','#06560b','0.5vh','2vh','column','none')
            } else {
              console.log('bbbbbbbbbbbbbbbbbbbb!!!!!!!!!!!!!!!!!=>'+ mainField.innerText+'=>'+toArr.indexOf(fromArr[i]));
              mainField.innerHTML = `<span>${fromArr[i]}</span>`;
              toArr.splice(toArr.indexOf(fromArr[i],1));

              // ===================erase============================
              const giftToErase:HTMLCollectionOf<Element> = document.getElementsByClassName('section-gift');
              console.log('gift to erase======================='+giftToErase.length);
              //console.log(giftToErase);

              while(giftToErase.length) {
                giftToErase[0].remove();
              }
              // =================== end of erase ======================
              fillGiftsInn(toArr,arrExp,'gift-container','gift-id','main-field-gifts','#08300a','1.8vw','23%','25vw','#06560b','0.5vh','2vh','column','none')
            }
       
        console.log('=======toArr============');
        console.log(toArr);
        
      
    
    
    })

    }


    


    return toArr;
    }
    
    export default listMakers;