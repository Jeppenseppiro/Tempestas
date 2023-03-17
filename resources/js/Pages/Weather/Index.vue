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
  <!-- </div> -->
  <!-- </Nav> -->
</template>

<script>
import Nav from "../../Shared/Nav.vue";
import { visualCrossingApi } from "../../Shared/visualCrossingApi";
import CurrentDayForecast from "./CurrentDayForecast.vue";
import DaysForecast from "./DaysForecast.vue";
import HourlyForecast from "./HourlyForecast.vue";

export default {
  layout: Nav,
  data() {
    return {
      hourlyweatherDateTime: "",
      weatherAPIStatus: null,
      weatherAPIData: null,
    };
  },
  mounted() {
    visualCrossingApi().catch((error) => {
      this.weatherAPIStatus = error.response.status;
      this.weatherAPIData = error.response.data;
    });
  },
  components: {
    Nav,
    CurrentDayForecast,
    DaysForecast,
    HourlyForecast,
  },
};
</script>
