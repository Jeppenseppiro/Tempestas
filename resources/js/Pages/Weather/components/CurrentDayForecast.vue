<template>
  <div
    class="grid lg:grid-cols-2 gap-4"
    v-if="Object.keys(weatherForecast.newWeatherCurrentForecast).length > 0"
  >
    <div class="">
      <div
        class="grid grid-rows-4 grid-flow-col place-items-center text-center px-4 text-lg"
      >
        <div class="font-light">
          <label>{{
            weatherForecast.newWeatherCurrentForecast.resolvedAddress
          }}</label>
          <br />
          <label>{{
            weatherForecast.newWeatherCurrentForecast.timezone
          }}</label>
        </div>

        <div>
          <div class="flex flex-auto items-center">
            <div class="w-16">
              <img
                :src="`resources/VisualCrossing/PNG/2nd Set - Color/${weatherForecast.newWeatherCurrentConditionForecast.icon}.png`"
              />
            </div>
            <label class="font-medium text-7xl"
              >&nbsp;{{
                weatherForecast.newWeatherCurrentConditionForecast.temp
              }}°C</label
            >
          </div>
        </div>

        <div>
          <label class="font-medium text-2xl"
            >&nbsp;{{
              weatherForecast.newWeatherCurrentConditionForecast.conditions
            }}</label
          >
          <br />
          <p class="text-sm">
            Updated as of:
            <label class="font-medium font"
              >&nbsp;{{
                weatherForecast.newWeatherCurrentConditionForecast.datetime
              }}</label
            >
          </p>
        </div>

        <div>
          <div class="flex text-xs">
            <div
              class="grid px-4 flex-grow card bg-base-300 place-items-center"
            >
              <p class="font-light">
                Feels Like:
                <label class="font-medium"
                  >{{
                    weatherForecast.newWeatherCurrentConditionForecast
                      .feelslike
                  }}°</label
                >
              </p>
            </div>
            <div class="divider divider-horizontal"></div>
            <div
              class="grid px-4 flex-grow card bg-base-300 place-items-center"
            >
              <p class="font-light">
                Wind:
                <label class="font-medium"
                  >{{
                    weatherForecast.newWeatherCurrentConditionForecast.windspeed
                  }}
                  mph</label
                >
              </p>
            </div>
            <div class="divider divider-horizontal"></div>
            <div
              class="grid px-4 flex-grow card bg-base-300 place-items-center"
            >
              <p class="font-light">
                Visibility:
                <label class="font-medium"
                  >{{
                    weatherForecast.newWeatherCurrentConditionForecast
                      .visibility
                  }}
                  mi</label
                >
              </p>
            </div>
          </div>

          <div class="flex pt-2 text-xs">
            <div
              class="grid px-4 flex-grow card bg-base-300 place-items-center"
            >
              <p class="font-light">
                UV Index:
                <label class="font-medium">{{
                  weatherForecast.newWeatherCurrentConditionForecast.uvindex
                }}</label>
              </p>
            </div>
            <div class="divider divider-horizontal"></div>
            <div
              class="grid px-4 flex-grow card bg-base-300 place-items-center"
            >
              <p class="font-light">
                Humidity:
                <label class="font-medium"
                  >{{
                    weatherForecast.newWeatherCurrentConditionForecast.humidity
                  }}%</label
                >
              </p>
            </div>
            <div class="divider divider-horizontal"></div>
            <div
              class="grid px-4 flex-grow card bg-base-300 place-items-center"
            >
              <p class="font-light">
                Dew Point:
                <label class="font-medium"
                  >{{
                    weatherForecast.newWeatherCurrentConditionForecast.dew
                  }}°</label
                >
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="sm:h-80 lg:mx-0 mx-4 h-64 z-0 border-double border-4 border-sky-300"
    >
      <Map />
    </div>
  </div>
</template>

<script>
import { weatherForecast } from "../../../Shared/weatherForecast";
import Map from "../components/currentDayForecast/Map.vue";

export default {
  data() {
    return {
      weatherForecast,
    };
  },
  components: {
    Map,
  },
};
</script>
