<template>
  <section v-if="weatherForecast.newWeatherDailyForecast.length > 0">
    <div class="flex justify-between">
      <label class="text-3xl">Daily</label>
      <!-- <label class="text-3xl">Daily</label> -->
    </div>

    <div class="grid lg:grid-cols-10 grid-cols-1 pt-2 gap-2 overflow-y-auto">
      <a
        href="#"
        class="px-6 pt-6 hover:bg-sky-400 border"
        v-for="(
          weatherDays, weatherDaysId
        ) in weatherForecast.newWeatherDailyForecast.slice(0, 10)"
        :class="{
          'bg-sky-400': weatherDaysId === dayClickedId,
        }"
        :key="weatherDaysId"
        @click="
          weatherForecast.updateWeatherHourlyForecast(
            weatherForecast.newWeatherCurrentForecast.address,
            weatherDays.datetime
          );
          dayClicked(weatherDaysId);
        "
      >
        <div class="grid grid-rows-4 grid-flow-col">
          <div class="font-light text-lg">
            {{ weatherDayofWeek(weatherDays.datetime) }}
            <label class="font-semibold">{{
              weatherDays.datetime.substring(8)
            }}</label>
          </div>
          <div class="w-14 -mt-3 my-2 -ml-1 rounded">
            <img
              :src="`https://raw.githubusercontent.com/visualcrossing/WeatherIcons/main/PNG/1st%20Set%20-%20Color/${weatherDays.icon}.png`"
            />
          </div>
          <div class="text-3xl">{{ weatherDays.temp.toFixed(1) }}°C</div>
          <div class="text-xs">
            {{ weatherDays.conditions }}
          </div>
        </div>
      </a>
    </div>
  </section>
  <section></section>
</template>

<script>
import { weatherForecast } from "../../../Shared/weatherForecast";

export default {
  data() {
    return {
      weatherForecast,
      location: "",
      dayClickedId: "",
    };
  },
  methods: {
    dayClicked(daysId) {
      this.dayClickedId = daysId;
    },
    weatherDayofWeek(weatherDateTime) {
      const daysWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
      const weatherDay = new Date(weatherDateTime);
      let day = weatherDay.getDay();
      return daysWeek[day];
    },
  },
};
</script>

<style scoped></style>
