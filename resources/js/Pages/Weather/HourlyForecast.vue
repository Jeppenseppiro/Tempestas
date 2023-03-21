<template>
  <div v-if="weatherForecast.newWeatherHourlyForecast.length > 0">
    <label class="text-3xl mb-2">Hourly</label>
    <div class="flex w-full mt-2 p-4 bg-base-200 overflow-x-auto">
      <a
        class="px-2 text-sm hover:bg-sky-400"
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
          <label class="font-medium">{{ hourlyForecast.temp.toFixed(1) }}°C</label>
        </div>
        <div class="divider divider-horizontal"></div>
      </a>
    </div>
  </div>

  <!-- Hourly Modal Details -->
  <div class="modal" id="weatherForecastHourly-modal">
    <div class="modal-box">
      <h3 class="font-bold text-2xl">{{ weatherForecast.weatherHourlyForecastInformation.datetime }}</h3>
      <p class="py-4">
        <div
          class="grid grid-rows-4 grid-flow-col place-items-center text-center px-4"
        >
          <div class="font-light">
            <label>{{ weatherForecast.newWeatherCurrentForecast.address }}</label>
            <br />
            <label>{{ weatherForecast.newWeatherCurrentForecast.timezone }}</label>
          </div>

          <div>
            <div class="flex flex-auto items-center">
              <div class="w-16 rounded">
                <img
                  :src="
                    'https://raw.githubusercontent.com/visualcrossing/WeatherIcons/main/PNG/1st%20Set%20-%20Color/' +
                    weatherForecast.weatherHourlyForecastInformation.icon +
                    '.png'
                  "
                />
              </div>
              <label class="font-medium text-6xl"
                >&nbsp;{{
                  weatherForecast.weatherHourlyForecastInformation.temp
                }}°C</label
              >
            </div>
          </div>

          <div>
            <label class="font-medium text-xl"
              >&nbsp;{{
                weatherForecast.weatherHourlyForecastInformation.conditions
              }}</label
            >
          </div>

          <div>
            <div class="flex text-base">
              <div class="grid px-4 flex-grow card bg-base-300 place-items-center">
                <p class="font-light">
                  Feels Like:
                  <label class="font-medium"
                    >{{
                      weatherForecast.weatherHourlyForecastInformation.feelslike
                    }}°</label
                  >
                </p>
              </div>
              <div class="divider divider-horizontal"></div>
              <div class="grid px-4 flex-grow card bg-base-300 place-items-center">
                <p class="font-light">
                  Wind:
                  <label class="font-medium"
                    >{{
                      weatherForecast.weatherHourlyForecastInformation.windspeed
                    }}
                    mph</label
                  >
                </p>
              </div>
            </div>

            <div class="flex text-base mt-3">
              <div class="grid px-4 flex-grow card bg-base-300 place-items-center">
                <p class="font-light">
                  Visibility:
                  <label class="font-medium"
                    >{{
                      weatherForecast.weatherHourlyForecastInformation.visibility
                    }}mi</label
                  >
                </p>
              </div>
              <div class="divider divider-horizontal"></div>
              <div class="grid px-4 flex-grow card bg-base-300 place-items-center">
                <p class="font-light">
                  UV Index:
                  <label class="font-medium"
                    >{{
                      weatherForecast.weatherHourlyForecastInformation.uvindex
                    }}</label
                  >
                </p>
              </div>
            </div>

            <div class="flex text-base mt-3">
              <div class="grid px-4 flex-grow card bg-base-300 place-items-center">
                <p class="font-light">
                  Humidity:
                  <label class="font-medium"
                    >{{
                      weatherForecast.weatherHourlyForecastInformation.humidity
                    }}%</label
                  >
                </p>
              </div>
              <div class="divider divider-horizontal"></div>
              <div class="grid px-4 flex-grow card bg-base-300 place-items-center">
                <p class="font-light">
                  Dew Point:
                  <label class="font-medium"
                    >{{
                      weatherForecast.weatherHourlyForecastInformation.dew
                    }}°</label
                  >
                </p>
              </div>
            </div>
          </div>
        </div>
      </p>
      <div class="modal-action">
        <a href="#" class="btn btn-info w-full">Close</a>
      </div>
    </div>
  </div>
</template>

<script>
import { weatherForecast } from "../../Shared/weatherForecast";

export default {
  data() {
    return {
      weatherForecast,
      hourClickedId: "",
    };
  },
  methods: {
    hourClicked(hourlyForecastId){
      this.hourClickedId = hourlyForecastId
    }
  }
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
