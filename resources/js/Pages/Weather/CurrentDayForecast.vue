<template>
  <div
    class="grid grid-rows-4 grid-flow-col place-items-center text-center px-4"
  >
    <div class="font-light">
      <label>{{ weatherDateTime.newCurrentForecast.address }}</label>
      <br />
      <label>{{ weatherForecast.timezone }}</label>
    </div>

    <div>
      <div class="flex flex-auto items-center">
        <div class="w-16 rounded">
          <img
            :src="
              'https://raw.githubusercontent.com/visualcrossing/WeatherIcons/main/PNG/1st%20Set%20-%20Color/' +
              weatherCurrentForecast.icon +
              '.png'
            "
          />
        </div>
        <label class="font-medium text-6xl"
          >&nbsp;{{ weatherCurrentForecast.temp }}°</label
        >
      </div>
    </div>

    <div>
      <label class="font-medium text-xl"
        >&nbsp;{{ weatherCurrentForecast.conditions }}</label
      >
      <br />
      <p class="text-xs">
        Updated as of:
        <label class="font-medium font"
          >&nbsp;{{ weatherCurrentForecast.datetime }}</label
        >
      </p>
    </div>

    <div>
      <div class="flex text-xs">
        <div class="grid px-4 flex-grow card bg-base-300 place-items-center">
          <p class="font-light">
            Feels Like:
            <label class="font-medium"
              >{{ weatherCurrentForecast.feelslike }}°</label
            >
          </p>
        </div>
        <div class="divider divider-horizontal"></div>
        <div class="grid px-4 flex-grow card bg-base-300 place-items-center">
          <p class="font-light">
            Wind:
            <label class="font-medium"
              >{{ weatherCurrentForecast.windspeed }} mph</label
            >
          </p>
        </div>
        <div class="divider divider-horizontal"></div>
        <div class="grid px-4 flex-grow card bg-base-300 place-items-center">
          <p class="font-light">
            Visibility:
            <label class="font-medium"
              >{{ weatherCurrentForecast.visibility }} mi</label
            >
          </p>
        </div>
      </div>

      <div class="flex pt-2 text-xs">
        <div class="grid px-4 flex-grow card bg-base-300 place-items-center">
          <p class="font-light">
            UV Index:
            <label class="font-medium">{{
              weatherCurrentForecast.uvindex
            }}</label>
          </p>
        </div>
        <div class="divider divider-horizontal"></div>
        <div class="grid px-4 flex-grow card bg-base-300 place-items-center">
          <p class="font-light">
            Humidity:
            <label class="font-medium"
              >{{ weatherCurrentForecast.humidity }}%</label
            >
          </p>
        </div>
        <div class="divider divider-horizontal"></div>
        <div class="grid px-4 flex-grow card bg-base-300 place-items-center">
          <p class="font-light">
            Dew Point:
            <label class="font-medium">{{ weatherCurrentForecast.dew }}°</label>
          </p>
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
      weatherDateTime,
      weatherForecast: [],
      weatherCurrentForecast: [],
    };
  },
  // mounted() {
  //   visualCrossingApi().then((response) => {
  //     this.weatherDateTime.newCurrentForecast = response.data;
  //     // this.weatherForecast = response.data;
  //     // this.weatherCurrentForecast = response.data.currentConditions;
  //   });
  // },
};
</script>
