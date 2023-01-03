import giftContainerHTML from "../components/modules/giftContainerHTML";
import Gifts from "../components/modules/interfaces";
import addToCart from "./addToCart";
function fillGifts (giftsData:Gifts[],className:string, id:string, inBlockClass:string,
    colorName:string, fontSize: string, width:string, height:string, borderColor:string,
    borderWidth:string, borderRadius:string,flexDir:string, overflow:string):void{
        const bodyInner:HTMLCollectionOf<Element> = document.getElementsByClassName(inBlockClass);
       
     for(let i =0; i<giftsData.length; i++){   
        const mainField:HTMLElement = document.createElement('section');
        //mainField.innerHTML = giftContainerHTML;
        
        mainField.className = `${className}-${i} section-gift`;//==================================
        mainField.id = `${id}-${giftsData[i].id}`;
        //alert(`ID in gift section set ${giftsData[i].id}`);
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
        mainField.style.padding = 'auto';
        /*mainField.style.backgroundImage = `url(${giftsData[i].images[0]})`;
        mainField.style.backgroundSize = 'contain';
        mainField.style.backgroundRepeat = 'no-repeat';*/



        /*const giftName:HTMLCollectionOf<Element> = document.getElementById("gift-in-name");
        giftName[0].innerHTML = giftsData[0].title;
        console.log('TITLE');
        console.log(giftsData[0].title);*/

//   ============================= fill gift container =======================================

        document.getElementById(bodyInner[0].id)?.insertAdjacentElement('beforeend', mainField);
        mainField.addEventListener('click',() =>{
            //gift[i].remove(); //TODO копировать всю секцию в корзину (корзина отдельная секция)
            
            const giftCont:HTMLElement = document.createElement('section');
            giftCont.className = 'gift-view2';
            giftCont.style.color = colorName;
            giftCont.style.fontSize = fontSize;
            giftCont.style.width = '96vw';
            giftCont.style.height = '90vh';
            giftCont.style.display ='grid';
            giftCont.style.gridTemplateColumns = 'repeat(10 10vh)';
            giftCont.style.gridTemplateRows = 'repeat(10 10vh)';
            giftCont.style.position ='fixed';
            giftCont.style.top ='0%';
            giftCont.style.left = '0%';
            giftCont.style.zIndex = '3;'
            giftCont.style.backgroundColor = 'white';
            giftCont.style.backgroundSize = 'contain';
            giftCont.style.flexDirection = flexDir;
            giftCont.style.borderColor = borderColor;
            giftCont.style.borderWidth = borderWidth;
            giftCont.style.borderStyle = 'solid';
            giftCont.style.borderRadius = borderRadius;
            giftCont.style.marginLeft = '0.5vh';
            giftCont.style.marginRight = '0.5vh';
            giftCont.style.marginTop = '0.5vh';
            giftCont.style.marginBottom = '0.5vh';
            giftCont.style.overflowY = overflow;
            giftCont.style.padding = 'auto';
            //giftCont.style.cursor = 'pointer';
            giftCont.innerHTML = `  <div class="gift-container-in" id="gift-in-name">${giftsData[i].title}</div>
                    <div class="gift-cont-img" id="gift-in-img0" style="background-image: url(${giftsData[i].images[0]})"></div>
                    <div class="gift-cont-img" id="gift-in-img1" style="background-image: url(${giftsData[i].images[1]})"></div>                
                    <div class="gift-cont-img" id="gift-in-img2" style="background-image: url(${giftsData[i].images[2]})"></div>                
                    <div class="gift-cont-img" id="gift-in-img3" style="background-image: url(${giftsData[i].images[3]})"></div>                
                    <div class="gift-cont-img-main" id="gift-in-img-main" style="background-image: url(${giftsData[i].images[0]})"></div>

                                    <div class="gift-container-in" id="gift-in-price"></div>
                                    <div class="gift-container-in" id="gift-in-description"></div>
                                    <div class="gift-container-in" id="but-gift-in-add"></div>
                                    <div class="gift-container-in" id="gift-in-detalis"></div>
                                    <div class="gift-container-close" id="gift-close"><p>&#9587</p></div>`;

            document.getElementById(bodyInner[0].id)?.insertAdjacentElement('beforeend', giftCont);
          /*  const img0 = document.getElementsByClassName('gift-in-img0');
            console.log('img0');console.log(img0);
            img0[0].style.backgroundImage =`url(${giftsData[i].images[0]})`;;
            const img1 = document.getElementsByClassName('gift-cont-img1');
            const img2 = document.getElementsByClassName('gift-cont-img2');
            const img3 = document.getElementsByClassName('gift-cont-img3');*/

           
          



            const ader = document.getElementsByClassName('gift-container-close');
            ader[0].addEventListener('click',() =>{
                giftCont.remove();
            })
            //alert(`its gift on position !!!!! => ${i}  giftsData.id  ${giftsData[i].id}`)

            // показать товар в отдельном окне
            







        });


        const giftIn:HTMLCollectionOf<Element> = document.getElementsByClassName(`${className}-${i}`);//===
      
        const giftName:HTMLElement = document.createElement('div');
        giftName.className = 'gift-container-in';
        giftName.id = `gift-in-name-${giftsData[i].id}`;
        giftName.innerHTML = `<abbr title="${giftsData[i].description}">${giftsData[i].title}</abbr>`;
        
        
        
        document.getElementById(giftIn[0].id)?.insertAdjacentElement('beforeend', giftName);

        const giftIMG:HTMLElement = document.createElement('div');
        giftIMG.className = 'gift-container-in';
        giftIMG.id = `gift-in-img-${giftsData[i].id}`;
        giftIMG.style.backgroundImage = `url(${giftsData[i].images[0]})`;
        giftIMG.style.backgroundSize = 'cover';
        giftIMG.style.backgroundRepeat = 'no-repeat';
        giftIMG.style.backgroundPosition = 'left';
        giftIMG.style.width = '100%';
        giftIMG.style.height = '100%';
        giftIMG.style.cursor = 'pointer';
        
        document.getElementById(giftIn[0].id)?.insertAdjacentElement('beforeend', giftIMG);

        const giftPrice:HTMLElement = document.createElement('div');
        giftPrice.className = 'gift-container-in';
        giftPrice.id = `gift-in-price-${giftsData[i].id}`;
        giftPrice.innerHTML = `<p>Price: ${String.fromCharCode(8364)} ${giftsData[i].price}</p>`;

       // `<abbr title="${giftsData[i].description}">Price: ${String.fromCharCode(8364)} ${giftsData[i].price}</abbr>`

        giftPrice.style.color = colorName;
        giftPrice.style.fontSize = fontSize;
        
        document.getElementById(giftIn[0].id)?.insertAdjacentElement('beforeend', giftPrice);

        const giftInCart:HTMLElement = document.createElement('div');
        giftInCart.className = 'gift-container-in';
        giftInCart.id = `gift-in-cart-${giftsData[i].id}`;
        giftInCart.innerText = `Add to cart`;
        giftInCart.style.display = 'inline-block';
       // `<abbr title="${giftsData[i].description}">Price: ${String.fromCharCode(8364)} ${giftsData[i].price}</abbr>`

       giftInCart.style.color = colorName;
       giftInCart.style.fontSize = fontSize;
       giftInCart.style.borderColor = borderColor;
       giftInCart.style.borderWidth = borderWidth;
       giftInCart.style.borderStyle = 'solid';
       giftInCart.style.borderRadius = borderRadius;
       giftInCart.style.cursor = 'pointer'; 
      // ================== listener for add to cart ==================== 
        giftInCart.addEventListener('click',()=>{
            alert(`add to cart button click => ${giftInCart.id}`);

        })
        // =================== end of listener for add to cart ====================
        document.getElementById(giftIn[0].id)?.insertAdjacentElement('beforeend', giftInCart);
        
        giftInCart.addEventListener('pointerover',() =>{
            giftInCart.style.color = 'red';
         });
         giftInCart.addEventListener('pointerout',() =>{
            giftInCart.style.color = colorName;//'#3dbe45';
         });




        const giftInDetalis:HTMLElement = document.createElement('div');
        giftInDetalis.className = 'gift-container-in';
        giftInDetalis.id = `gift-in-detalis-${giftsData[i].id}`;
        giftInDetalis.innerText = `Detalis`;
        giftInDetalis.style.display = 'inline-block';
       // `<abbr title="${giftsData[i].description}">Price: ${String.fromCharCode(8364)} ${giftsData[i].price}</abbr>`

       giftInDetalis.style.color = colorName;
       giftInDetalis.style.borderColor = borderColor;
       giftInDetalis.style.fontSize = fontSize;
       giftInDetalis.style.borderWidth = borderWidth;
       giftInDetalis.style.borderStyle = 'solid';
       giftInDetalis.style.borderRadius = borderRadius;
       giftInDetalis.style.cursor = 'pointer'; 
      // ================== listener for detalis ==================== 
        giftInDetalis.addEventListener('click',()=>{
            alert(`DETALIS button click => ${giftInDetalis.id}`);

        })
        // =================== end of listener for detalis ====================
        document.getElementById(giftIn[0].id)?.insertAdjacentElement('beforeend', giftInDetalis);
        giftInDetalis.addEventListener('pointerover',() =>{
            giftInDetalis.style.color = 'red';
         });
         giftInDetalis.addEventListener('pointerout',() =>{
            giftInDetalis.style.color = colorName;//'#3dbe45';
         });
     }
    }
    
    export default fillGifts;

   let a = `  <div class="gift-container-in" id="gift-in-name"></div>
                                   <div class="gift-container-in" id="gift-in-img"></div>
                                   <div class="gift-container-in" id="gift-in-price"></div>
                                   <div class="gift-container-in" id="gift-in-description"></div>
                                   <div class="gift-container-in" id="but-gift-in-add"></div>
                                   <div class="gift-container-in" id="gift-in-detalis"></div>`;