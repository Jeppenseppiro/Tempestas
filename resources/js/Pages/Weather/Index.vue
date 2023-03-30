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
        <label
          for="search-modal"
          class="btn btn-info btn-sm float-right ml-2 mb-2 px-4 font-bold text-xl hover:btn-warning"
          >X</label
        >

        <div class="form-control w-full">
          <div class="input-group">
            <input
              type="text"
              placeholder="Search location"
              class="input input-bordered w-full"
              v-model="searchLocations"
              @keyup.enter="
                weatherForecast.updateWeatherForecast(
                  searchLocations,
                  weatherDateTime
                )
              "
            />
            <button
              class="btn btn-square hover:btn-success"
              for="search-modal"
              @click="
                weatherForecast.updateWeatherForecast(
                  searchLocations,
                  weatherDateTime
                )
              "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
          <label class="label">
            <span
              class="label-text text-red-600"
              v-if="weatherForecast.errorWeatherForecast.status == 400"
              >{{ weatherForecast.errorWeatherForecast.data }}</span
            >
            <span class="label-text-alt"> </span>
          </label>
        </div>
        <div class="text-center items-center">
          <input
            type="date"
            class="btn lg:btn-md btn-xs glassbtn btn-outline btn-success"
            v-model="datepickerFrom"
            :max="datepickerTo"
          />
          <label class="text-2xl">&nbsp;-&nbsp;</label>
          <input
            type="date"
            class="btn lg:btn-md btn-xs glassbtn btn-outline btn-success"
            v-model="datepickerTo"
            :min="datepickerFrom"
          />
        </div>
        <!-- <div class="modal-action">
          <label for="search-modal" class="btn btn-info">Close</label>
        </div> -->
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
