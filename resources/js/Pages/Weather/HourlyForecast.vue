<template>
  <label class="text-3xl">Hourly</label>
  <div class="flex w-full p-2 p-4 bg-base-200 overflow-x-auto">
    <div
      class="px-2 text-sm"
      v-for="(
        hourlyForecast, hourlyForecastId
      ) in weatherDateTime.newHourlyForecast"
      :key="hourlyForecastId"
    >
      <div class="items-center text-center">
        <label class="font-medium">{{
          hourlyForecast.datetime.substring(0, 5)
        }}</label>
        <div class="avatar">
          <div class="w-8 rounded">
            <img
              :src="
                'https://raw.githubusercontent.com/visualcrossing/WeatherIcons/main/PNG/1st%20Set%20-%20Color/' +
                hourlyForecast.icon +
                '.png'
              "
            />
          </div>
        </div>
        <label class="font-medium">{{ hourlyForecast.temp }}°C</label>
      </div>
      <div class="divider divider-horizontal"></div>
    </div>
  </div>
</template>

<script>
import { visualCrossingApi } from "../../Shared/visualCrossingApi";
import { weatherDateTime } from "../../Shared/weatherDateTime";

export default {
  data() {
    return {
      weatherDateTime,
    };
  },
  mounted() {
    visualCrossingApi().then((response) => {
      this.weatherDateTime.newHourlyForecast = response.data.days[0].hours;
    });
  },
};
</script>
