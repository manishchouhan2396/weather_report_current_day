
//https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}

function weather() {
    let city = document.querySelector("#city").value;

    const url =
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=4bba5a9331f12c466b4435394af05d91`;

    fetch(url)
        .then(function (res) {
            return res.json();
        }).then(function (res) {
            append(res);
            console.log(res);


        }).catch(function (err) {
            console.log(err);
        })

}


function getweather1(lat, lon) {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=4bba5a9331f12c466b4435394af05d91`;

    fetch(url)
        .then(function (res) {
            return res.json();
        })
        .then(function (res) {
            append(res);
            console.log(res);
        })
        .catch(function (err) {
            console.log(err);
        });
}

function append(data) {
    let container = document.querySelector("#container");
    let map = document.querySelector("#gmap_canvas");
    container.innerHTML = null;

    let city = document.createElement("p");
    city.innerText = `City : ${data.name}`;

    let min = document.createElement("p");
    min.innerText = `Min Temp : ${Math.floor(data.main.temp_min - 273.15)}°C`;

    let max = document.createElement("p");
    max.innerText = `Max Temp : ${Math.floor(data.main.temp_max - 273.15)}°C`;

    let current = document.createElement("p");
    current.innerText = `Current Temp: ${Math.floor(data.main.temp - 273.15)}°C`;

    let humidity = document.createElement("p");
    humidity.innerText = `Humility :${data.main.humidity}`;

    container.append(city, min, max, current, humidity);

    map.src =
        `https://maps.google.com/maps?q=${data.name}&t=&z=13&ie=UTF8&iwloc=&output=embed`;

}


function getweather() {

    navigator.geolocation.getCurrentPosition(success);
    function success(position) {
        var crd = position.coords;

        console.log('Your current position is:');
        console.log(`Latitude : ${crd.latitude}`);
        console.log(`Longitude: ${crd.longitude}`);
        console.log(`More or less ${crd.accuracy} meters.`);
        getweather1(crd.latitude, crd.longitude)
    }

}




