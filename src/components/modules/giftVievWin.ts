function giftVievWin (title:string,pic0:string, pic1:string, pic2:string, pic3:string, picMain:string,
                      price:number, description:string, discountPercentage:number, brand:string):string {

return `  <div class="gift-container-in" id="gift-in-name">${title}</div>
<div class="gift-cont-img" id="gift-in-img0" style="background-image: url(${pic0})"></div>
<div class="gift-cont-img" id="gift-in-img1" style="background-image: url(${pic1})"></div>                
<div class="gift-cont-img" id="gift-in-img2" style="background-image: url(${pic2})"></div>                
<div class="gift-cont-img" id="gift-in-img3" style="background-image: url(${pic3})"></div>                
<div class="gift-cont-img-main" id="gift-in-img-main" style="background-image: url(${picMain})"></div>

                <div class="gift-container-in" id="gift-in-price">${String.fromCharCode(8364)} ${price}</div>
                <div class="gift-container-in" id="gift-in-description">${description}</div>
                <div class="gift-container-in" id="gift-in-discount">Discount:-${discountPercentage}%</div>
                <div class="gift-container-in" id="gift-in-brand">${brand}</div>



               
                <div class="gift-container-in" id="but-gift-in-add"></div>
                <div class="gift-container-in" id="gift-in-detalis"></div>
                <div class="gift-container-close" id="gift-close"><p>&#9587</p></div>`




}
export default giftVievWin;