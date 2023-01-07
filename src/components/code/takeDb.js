

const requestURL = 'https://github.com/scerbina2016/online-store/blob/develop/src/components/db/giftsEn.json';
let request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function() {
    let gifts = request.response;
    //populateHeader(superHeroes);
    //showHeroes(superHeroes);
  }

  /*fetch('https://github.com/scerbina2016/online-store/blob/develop/src/components/db/giftsEn.json')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  });*/


  //console.log(gifts);
  let response =  fetch('https://github.com/scerbina2016/online-store/blob/develop/src/components/db/giftsEn.json');

/*if (response.ok) { // если HTTP-статус в диапазоне 200-299
  // получаем тело ответа (см. про этот метод ниже)
  let json = response.json();
} else {
  alert("Ошибка HTTP: " + response.status);
}*/
fetch('https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits')
  .then(response => response.json())
  .then(commits => alert(commits[0].author.login));