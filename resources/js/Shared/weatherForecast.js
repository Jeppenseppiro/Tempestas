import { reactive } from "vue";
import { visualCrossingApi } from "./visualCrossingApi";

const weatherForecast = reactive({
  newWeatherCurrentForecast: {},
  newWeatherCurrentConditionForecast: {},
  newWeatherDailyForecast: [],
  newWeatherHourlyForecast: [],

  weatherHourlyForecastInformation: {},
  errorWeatherForecast: {},

  updateWeatherForecast(location, datetime) {
    visualCrossingApi(location, datetime)
      .then((response) => {
        this.newWeatherCurrentForecast = response.data;
        this.newWeatherCurrentConditionForecast =
          response.data.currentConditions;

        this.newWeatherDailyForecast = [];
        this.newWeatherHourlyForecast = [];
        for (let i = 0; i < response.data.days.length; i++) {
          this.newWeatherDailyForecast.push(response.data.days[i]);
        }
      })
      .catch((error) => {
        this.errorWeatherForecast = error.response;
      });
  },

  updateWeatherHourlyForecast(weatherDaysId) {
    this.newWeatherHourlyForecast = [];
    for (let weatherHourlyForecast in this.newWeatherDailyForecast[
      weatherDaysId
    ].hours) {
      this.newWeatherHourlyForecast.push(
        this.newWeatherDailyForecast[weatherDaysId].hours[weatherHourlyForecast]
      );
    }
  },

  getWeatherHourlyForecastInformation(hourlyForecastId) {
    this.weatherHourlyForecastInformation =
      this.newWeatherHourlyForecast[hourlyForecastId];
  },
});

export { weatherForecast };
