//import {getDbFromServer} from './components/modules/getDbFromServer.js';

/*const requestURL = 'https://github.com/scerbina2016/online-store/blob/develop/src/components/db/giftsEn.json';
let request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
let gifts
request.send();
request.onload = function() {
    gifts = request.response;
    //populateHeader(superHeroes);
    //showHeroes(superHeroes);
  }
  console.log(gifts);*/
//const giftsDb = getDbFromServer('https://scerbina2016.github.io/online-store/src/components/db/giftsEn.json');
  fetch('https://scerbina2016.github.io/online-store/src/components/db/giftsEn.json',
  {
    method: 'GET',
    mode: 'cors'
  })
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  });

  //console.log(giftsDb);