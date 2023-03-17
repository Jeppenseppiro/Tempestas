import { reactive } from "vue";
import { visualCrossingApi_DateTime } from "./visualCrossingApi";

const weatherDateTime = reactive({
  newHourlyForecast: [],
  updateHourlyForecast(datetime) {
    visualCrossingApi_DateTime(datetime).then((response) => {
      this.newHourlyForecast = [];
      for (let i = 0; i < response.data.days[0].hours.length; i++) {
        this.newHourlyForecast.push(response.data.days[0].hours[i]);
      }
    });
  },
});

export { weatherDateTime };
