import { reactive } from "vue";
import { visualCrossingApi_DateTime } from "./visualCrossingApi";

const weatherDateTime = reactive({
  newCurrentForecast: [],
  newHourlyForecast: [],

  updateHourlyForecast(datetime) {
    visualCrossingApi_DateTime(datetime).then((response) => {
      this.newCurrentForecast = [];
      this.newHourlyForecast = [];

      for (let i = 0; i < response.data.days[0].hours.length; i++) {
        this.newHourlyForecast.push(response.data.days[0].hours[i]);
      }

      this.newCurrentForecast = response.data;
      console.log(response.data);
    });
  },
});

export { weatherDateTime };
