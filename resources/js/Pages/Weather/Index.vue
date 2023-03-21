<template>
  <!-- <Nav> -->
  <!-- <div class="container mx-auto bg-base-800"> -->
  <div v-if="weatherAPIStatus != 429" class="grid grid-cols-12 gap-4">
    <div class="col-span-12">
      <CurrentDayForecast />
    </div>
    <div class="col-span-12 px-6 pt-2 pb-6">
      <DaysForecast />
    </div>
    <div class="col-span-12 px-6">
      <HourlyForecast />
    </div>
  </div>

  <div v-else class="text-center items-center">
    {{ weatherAPIData }}<br />
    Please visit
    <a href="https://www.visualcrossing.com/weather-api" class="text-blue-700"
      >Visual Crossing</a
    >
    to create new / replace exisiting API keys
  </div>

  <!-- Search Location Modal -->
  <input type="checkbox" id="search-modal" class="modal-toggle" />
  <div class="modal">
    <div class="modal-box w-11/12 max-w-5xl">
      <h3 class="font-bold text-lg">Search Location</h3>
      <p class="py-4">
        <input
          type="text"
          placeholder="Type here"
          class="input input-bordered input-info w-full max-w"
          v-model="searchLocations"
        />
      </p>
      <label v-if="weatherForecast.errorWeatherForecast.status == 400">{{
        weatherForecast.errorWeatherForecast.data
      }}</label>

      <div class="modal-action">
        <label
          class="btn btn-success"
          @click="
            weatherForecast.updateWeatherForecast(
              searchLocations,
              defaultDateTime
            )
          "
          >Search</label
        >
        <label for="search-modal" class="btn btn-info">Close</label>
      </div>
    </div>
  </div>
  <!-- </div> -->
  <!-- </Nav> -->
</template>

<script>
import Nav from "../../Shared/Nav.vue";
import { weatherForecast } from "../../Shared/weatherForecast";
import CurrentDayForecast from "./CurrentDayForecast.vue";
import DaysForecast from "./DaysForecast.vue";
import HourlyForecast from "./HourlyForecast.vue";

export default {
  layout: Nav,
  data() {
    return {
      weatherAPIStatus: null,
      weatherAPIData: null,
      weatherForecast,
      searchLocations: "",
      defaultDateTime: "",
    };
  },
  components: {
    Nav,
    CurrentDayForecast,
    DaysForecast,
    HourlyForecast,
  },
};
</script>
