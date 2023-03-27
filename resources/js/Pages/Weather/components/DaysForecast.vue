<template>
  <section v-if="weatherForecast.newWeatherDailyForecast.length > 0">
    <div class="flex justify-between items-center">
      <label class="text-3xl pb-2">Daily</label>
      <!-- Daily Date Filter (array filter from API response) -->
      <!-- <div class="btn-group">
        <input
          class="btn btn-sm btn-info"
          type="date"
          id="birthday"
          name="birthday"
        />
        <input
          class="btn btn-sm btn-info"
          type="date"
          id="birthday"
          name="birthday"
        />
        <button class="btn btn-sm btn-success">Filter</button>
      </div> -->
    </div>

    <div
      class="grid xl:grid-cols-10 xl:h-64 grid-cols-5 gap-2 overflow-y-auto h-60"
    >
      <a
        href="#"
        class="px-6 pt-6 hover:bg-orange-100 border"
        v-for="(
          weatherDays, weatherDaysId
        ) in weatherForecast.newWeatherDailyForecast"
        :class="{
          'bg-sky-400': weatherDaysId === dayClickedId,
        }"
        :key="weatherDaysId"
        @click="
          // weatherForecast.updateWeatherHourlyForecast(
          //   weatherForecast.newWeatherCurrentForecast.address,
          //   weatherDays.datetime
          // );
          weatherForecast.updateWeatherHourlyForecast(weatherDaysId);
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
              :src="`resources/VisualCrossing/PNG/1st Set - Color/${weatherDays.icon}.png`"
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
