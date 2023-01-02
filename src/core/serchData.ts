import Gifts from "../components/modules/interfaces";
function serchData (giftsData2:Gifts[],field:string):string[] {
    let brandList:string[] = [];
    let asd:string[] = [];
    let counter:number = 0;
    for (let i = 0; i < giftsData2.length; i ++ ){
         asd[i] = giftsData2[i].brand;
    }
    
    brandList[0] = asd[0];
    
    for(let i = 1; i < asd.length; i ++){
    
        if(giftsData2[i].brand !== giftsData2[i-1].brand){
            counter +=1; brandList[counter] = asd[i]; 
        }
    
    }
    
    for (let i = 1; i < brandList.length; i ++){
        if (brandList.indexOf(brandList[i]) !== brandList.lastIndexOf(brandList[i])) {
            brandList.splice(brandList.lastIndexOf(brandList[i]),1)
        };
    };
    
        
    return brandList;
    
    }
    
    
    export default serchData;