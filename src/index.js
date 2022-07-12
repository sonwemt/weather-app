import './style.css';
import WeatherController from './api';

const desiredCity = document.getElementById('cityInput');
const submitButton = document.getElementById('submitCity');

const nameDiv = document.getElementById('cityName');
const WeatherDiv = document.getElementById('cityWeather');
const WeatherDescDiv = document.getElementById('weatherDescription');
const temperatureDiv = document.getElementById('temperature');
const windspeedDiv = document.getElementById('windspeed');
const windDirectionDiv = document.getElementById('windDirection');
const loadingDiv = document.getElementById('loading');

const weatherController = new WeatherController();

async function getWeatherDataObject(city) {
  const result = await weatherController.getInfo(city);
  return {
    name: result.name,
    weather: result.weather[0].main,
    weatherDescription: result.weather[0].description,
    temperature: result.main.temp,
    windSpeed: result.wind.speed,
    windDirection: result.wind.deg,
  };
}

function fillInfo(city) {
  loadingDiv.textContent = 'Loading data';
  getWeatherDataObject(city).then((result) => {
    nameDiv.textContent = `City: ${result.name}`;
    WeatherDiv.textContent = `Weather: ${result.weather}`;
    WeatherDescDiv.textContent = `Description: ${result.weatherDescription}`;
    temperatureDiv.textContent = `Temperature: ${result.temperature}C`;
    windspeedDiv.textContent = `Wind Speed: ${result.windSpeed}`;
    windDirectionDiv.textContent = `Wind direction: ${result.windDirection}`;
    loadingDiv.textContent = '';
  });
}

fillInfo('oslo');

submitButton.addEventListener('click', () => {
  fillInfo(desiredCity.value.toLowerCase());
});
