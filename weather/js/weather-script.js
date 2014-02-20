$.getJSON('./weather.php', function(data){

//set weather id & icon
var id = data.weather[0].id;
var icon = data.weather[0].icon;

$('#weather-id').text(id);
$('#weather-icon').text(icon);

//change top image

var sky_img = "url(./img/sky-img/" + icon + ".jpg)";
$('.bg').css('background-image', sky_img);

console.log(icon);

//get weather description
var tempCelcius = data.main.temp - 273.15;
var tempFahrenheit = tempCelcius * 9 / 5 + 32;
var description = data.weather[0].description;

$('#weather-desc').text(description);
$('#location').text(data.name);

$('#degreesCelsius .number').text(Math.round(tempCelcius));
$('#degreesCelsius .cel').text("°C ");
$('#degreesFahrenheit').text(Math.round(tempFahrenheit) + "°F");

});