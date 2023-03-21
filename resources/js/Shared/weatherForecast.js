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
        console.log(response.data);
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

  updateWeatherHourlyForecast(location, datetime) {
    visualCrossingApi(location, datetime)
      .then((response) => {
        this.newWeatherHourlyForecast = [];
        for (let i = 0; i < response.data.days[0].hours.length; i++) {
          this.newWeatherHourlyForecast.push(response.data.days[0].hours[i]);
        }
      })
      .catch((error) => {
        this.errorWeatherForecast = error.response;
      });
  },

  getWeatherHourlyForecastInformation(hourlyForecastId) {
    this.weatherHourlyForecastInformation =
      this.newWeatherHourlyForecast[hourlyForecastId];
    console.log(this.weatherHourlyForecastInformation);
  },
});

export { weatherForecast };
