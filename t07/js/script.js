function getWeather( lat, lon, exclude ) {
    var key = "7b19e835e72860795348f57aab5980e8";
    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=${exclude}&appid=${key}`)
    .then(function(resp) { return resp.json() })
    .then(function(data) {
        console.log(data);
        drawWeather(data);
    })
  }

    //getWeather("33.441792", "-94.037689", "minutely"); // Chicago
    //getWeather("40.445", "-95.234978", "minutely" ); // London
    getWeather("50.0", "36.25", "minutely"); // Kharkiv

function drawWeather(d) {
	var celcius = Math.round(parseFloat(d.daily[0].temp.day)-273.15);
	
	document.getElementById('main').innerHTML += `<span class="get_main">${d.daily[0].weather[0].main}</span>`;
	document.getElementById('temp').innerHTML += `<span class="get_temp">${celcius}&deg;</span>`;
	document.getElementById('timezone').innerHTML += `<span class="get_location">${d.timezone}</span>`;
    document.getElementById('city').innerHTML += `Kharkiv`;
}