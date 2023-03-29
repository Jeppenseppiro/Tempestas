<template>
  <div v-if="weatherForecast.newWeatherHourlyForecast.length > 0">
    <div class="flex justify-between items-center">
      <label class="text-3xl">Hourly</label>
    </div>

    <!-- <div class="flex w-full -mx-1 mt-2 overflow-x-auto">
      <a
        class="mx-1 text-sm hover:bg-sky-400"
        href="#weatherForecastHourly-modal"
        v-for="(
          hourlyForecast, hourlyForecastId
        ) in weatherForecast.newWeatherHourlyForecast"
        :key="hourlyForecastId"
        :class="{
          'bg-sky-400': hourlyForecastId === hourClickedId,
        }"
        @click="
          weatherForecast.getWeatherHourlyForecastInformation(hourlyForecastId); hourClicked(hourlyForecastId);
        "
      >
        <div class="items-center text-center">
          <label class="text-xs font-medium">{{
            hourlyForecast.datetime.substring(0, 5)
          }}</label>
          <div class="avatar">
            <div class="w-10">
              <img
                :src="
                  'https://raw.githubusercontent.com/visualcrossing/WeatherIcons/main/PNG/1st%20Set%20-%20Color/' +
                  hourlyForecast.icon +
                  '.png'
                "
              />
            </div>
          </div>
          <label class="font-medium text-xs">{{ hourlyForecast.temp.toFixed(1) }}°C</label>
        </div>
        <div class="divider divider-horizontal"></div>
      </a>
    </div> -->

    <LineChart />
  </div>
</template>

<script>
import { weatherForecast } from "../../../Shared/weatherForecast";
import LineChart from "./hourlyForecast/LineChart.vue";

export default {
  components: {
    LineChart,
  },
  data() {
    return {
      weatherForecast,
      hourClickedId: "",
    };
  },
  methods: {
    hourClicked(hourlyForecastId) {
      this.hourClickedId = hourlyForecastId;
    },
  },
};
</script>

<style scoped>
.loader {
  /* Loader Div Class */
  top: 0px;
  right: 0px;
  width: 100%;
  height: 100%;
  background-color: #eceaea;
  background-image: url("../../../images/loader.gif");
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.4;
  filter: alpha(opacity=40);
}
</style>
