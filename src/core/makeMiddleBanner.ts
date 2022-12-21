function makeMiddleBanner (className:string,id:string,text:string,
                           colorName:string,fontSize: string,width:string,height:string):void{
    const banner = document.createElement('section');
    const bodyInner = document.getElementsByTagName('header');
    banner.className = className;
    banner.id = id;
    banner.innerHTML =text;
    banner.style.textAlign = 'center';
    banner.style.verticalAlign = 'middle';
    banner.style.width = width;
    banner.style.height = height;
    banner.style.color = colorName;
    banner.style.backgroundColor = '#caeecd'
    banner.style.fontSize = fontSize;
    banner.style.borderColor = colorName;
    banner.style.borderStyle = 'solid';
    banner.style.borderWidth = '0.5vh';
    banner.style.marginTop = '0.5vh';
    banner.style.paddingTop = '1vh'; // TODO make to center
    document.getElementById(bodyInner[0].id)?.insertAdjacentElement('afterend', banner);
    //const bannerId = document.getElementById(id);
    //console.log('elem id ==>>' + bannerId?.id);
    //document.body.insertAdjacentElement('beforeend', banner);



}
export default makeMiddleBanner;