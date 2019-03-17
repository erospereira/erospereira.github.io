
let weatherRequest = new XMLHttpRequest();


weatherRequest.open("GET","http://api.openweathermap.org/data/2.5/forecast?id=5604473&APPID=588f3b31c6fe7beb50679f8681db46fc", true);
weatherRequest.send();

weatherRequest.onload =  function () {
    let weatherData = JSON.parse(weatherRequest.responseText);
    console.log(weatherData);
    document.getElementById('currently').innerHTML = weatherData.cnt;
    document.getElementById('high').innerHTML = weatherData.list;
}
