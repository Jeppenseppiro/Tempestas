<template>
  <!-- <Nav> -->
  <div class="container mx-auto bg-base-800">
    <div v-if="weatherAPIStatus != 429">
      <div
        class="flex h-screen"
        v-if="
          !Object.keys(weatherForecast.newWeatherCurrentForecast).length > 0
        "
      >
        <div class="m-auto">
          <label
            class="btn font-bold text-xl"
            for="search-modal"
            v-if="$page.component == 'Weather/Index'"
            >Search Location</label
          >
        </div>
      </div>

      <div class="grid grid-cols-12 gap-4">
        <div class="col-span-12">
          <CurrentDayForecast />
        </div>
        <div class="col-span-12 px-6">
          <DaysForecast />
        </div>
        <div class="col-span-12 px-6">
          <HourlyForecast />
        </div>
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
        <div class="flex items-center border-b border-teal-500 py-2">
          <input
            class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="text"
            placeholder="Type location here"
            v-model="searchLocations"
          />
        </div>
        <div class="text-center items-center mt-6">
          <input
            type="date"
            class="btn lg:btn-md btn-xs glassbtn btn-outline btn-info"
            v-model="datepickerFrom"
            :max="datepickerTo"
          />
          <label class="text-2xl">&nbsp;-&nbsp;</label>
          <input
            type="date"
            class="btn lg:btn-md btn-xs glassbtn btn-outline btn-info"
            v-model="datepickerTo"
            :min="datepickerFrom"
          />
        </div>

        <label v-if="weatherForecast.errorWeatherForecast.status == 400">{{
          weatherForecast.errorWeatherForecast.data
        }}</label>

        <div class="modal-action">
          <label
            class="btn btn-success"
            for="search-modal"
            @click="
              weatherForecast.updateWeatherForecast(
                searchLocations,
                weatherDateTime
              )
            "
            >Search</label
          >
          <label for="search-modal" class="btn btn-info">Close</label>
        </div>
      </div>
    </div>
  </div>
  <!-- </Nav> -->
</template>

<script>
import Nav from "../../Shared/Nav.vue";
import { weatherForecast } from "../../Shared/weatherForecast";
import CurrentDayForecast from "./components/CurrentDayForecast.vue";
import DaysForecast from "./components/DaysForecast.vue";
import HourlyForecast from "./components/HourlyForecast.vue";

export default {
  layout: Nav,
  props: {},
  components: {
    Nav,
    CurrentDayForecast,
    DaysForecast,
    HourlyForecast,
  },
  data() {
    return {
      weatherAPIStatus: null,
      weatherAPIData: null,
      weatherForecast,
      searchLocations: "",
      datepickerFrom: "",
      datepickerTo: "",
    };
  },
  computed: {
    weatherDateTime() {
      let weatherDateTime;
      if (this.datepickerFrom != "" && this.datepickerTo != "") {
        weatherDateTime = `${this.datepickerFrom}/${this.datepickerTo}`;
      } else if (this.datepickerFrom != "" && this.datepickerTo == "") {
        weatherDateTime = `${this.datepickerFrom}`;
      } else if (this.datepickerFrom == "" && this.datepickerTo != "") {
        weatherDateTime = `${this.datepickerTo}`;
      } else {
        weatherDateTime = "";
      }
      return weatherDateTime;
    },
  },
};
</script>
