<template>
  <label class="text-3xl">Daily</label>
  <div class="grid lg:grid-cols-10 grid-cols-1 pt-2 gap-4 overflow-x-auto">
    <div
      class="px-6 pt-6 bg-base-200"
      v-for="(weatherDays, weatherDaysId) in weatherDaysForecast.slice(0, 10)"
      :key="weatherDaysId"
      @click="weatherDateTime.updateHourlyForecast(weatherDays.datetime)"
      as="button"
    >
      <div class="grid grid-rows-4 grid-flow-col">
        <div class="font-light">
          {{ weatherDayofWeek(weatherDays.datetime) }}
          {{ weatherDays.datetime.substring(8) }}
        </div>
        <div class="w-12 -mt-3 my-2 -ml-1 rounded">
          <img
            :src="
              'https://raw.githubusercontent.com/visualcrossing/WeatherIcons/main/PNG/1st%20Set%20-%20Color/' +
              weatherDays.icon +
              '.png'
            "
          />
        </div>
        <div class="text-3xl">{{ weatherDays.temp.toFixed(1) }}°</div>
        <div class="text-xs">
          {{ weatherDays.conditions }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { visualCrossingApi } from "../../Shared/visualCrossingApi";
import { weatherDateTime } from "../../Shared/weatherDateTime";

export default {
  data() {
    return {
      weatherDaysForecast: [],
      weatherDateTime,
      day: null,
    };
  },
  mounted() {
    visualCrossingApi().then((response) => {
      this.weatherDaysForecast = response.data.days;
    });
  },
  methods: {
    weatherDayofWeek(weatherDateTime) {
      const daysWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
      const weatherDay = new Date(weatherDateTime);
      let day = weatherDay.getDay();
      return daysWeek[day];
    },
  },
};
</script>
