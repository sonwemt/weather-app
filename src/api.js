export default class WeatherController {
  #response;

  #weatherData;

  async getInfo(city) {
    try {
      this.#response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=250dd0aa27d8ec7aa198905d9f457575`);
      this.#weatherData = await this.#response.json();
      console.log(this.#weatherData);
    } catch (error) {
      console.log(error);
      return error;
    }
    return this.#weatherData;
  }
}
