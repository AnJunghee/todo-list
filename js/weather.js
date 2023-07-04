const API_KEY = "f23c8f8c3eb9d8899de88b44ae2e1df2";

function onGeoOk(position){
    console.log(position);
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    console.log(lat);
    console.log(lon);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then(response => response.json())
    .then(data => {
        const weather = document.querySelector('#weather span:first-child');
        const city = document.querySelector('#weather span:last-child');
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}℃`;
    });
}
function onGeoError() {
    alert("날씨 권한을 허용해주세요.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);