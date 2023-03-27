<template>
  <Line
    id="my-chart-id"
    :data="chartData"
    :options="chartOptions"
    :style="chartStyle"
  />

  <!-- Hourly Modal Details -->
  <div class="modal" id="hourlyDetail">
    <div class="modal-box">
      <h3 class="font-bold text-2xl">{{ weatherForecast.weatherHourlyForecastInformation.datetime }}</h3>
      <p class="py-4">
        <div
          class="grid grid-rows-4 grid-flow-col place-items-center text-center px-4"
        >
          <div class="font-light">
            <label>{{ weatherForecast.newWeatherCurrentForecast.resolvedAddress }}</label>
            <br />
            <label>{{ weatherForecast.newWeatherCurrentForecast.timezone }}</label>
          </div>

          <div>
            <div class="flex flex-auto items-center">
              <div class="w-16 rounded">
                <img
                  :src="
                    `resources/VisualCrossing/PNG/1st Set - Color/${weatherForecast.weatherHourlyForecastInformation.icon}.png`
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
import { weatherForecast } from "../../../../Shared/weatherForecast";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Line } from "vue-chartjs";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

export default {
  name: "App",
  components: { Line },
  data() {
    return {
      weatherForecast,
    };
  },
  computed: {
    chartStyle() {
      return {
        height: "20%",
        width: "100%",
        position: "relative",
      };
    },
    chartData() {
      var pointImage = [];
      let hourlyDateTime = [];
      let hourlyTemp = [];
      for (
        let i = 0;
        i < weatherForecast.newWeatherHourlyForecast.length;
        i++
      ) {
        // weatherForecast.newWeatherHourlyForecast[i].icon
        pointImage[i] = new Image(45, 45);
        pointImage[i].src = `resources/VisualCrossing/PNG/1st Set - Color/${weatherForecast.newWeatherHourlyForecast[i].icon}.png`;

        hourlyDateTime.push(
          weatherForecast.newWeatherHourlyForecast[i].datetime.substring(0, 5)
        );
        hourlyTemp.push(weatherForecast.newWeatherHourlyForecast[i].temp);
      }

      return {
        labels: hourlyDateTime,
        datasets: [
          {
            label: "Temperature",

            // backgroundColor: "gold",
            // backgroundColor: (context) => {
            //   const chart = context.chart;
            //   const {ctx, chartArea, scales} = chart;
            //   if(!chartArea){
            //     return null
            //   }
            //   return getGradient(ctx, chartArea, scales)

            //   function getGradient(ctx, chartArea, scales){
            //     const gradientBg = ctx.createLinearGradient(0, chartArea.top, 0, chartArea.bottom);
                
            //     gradientBg.addColorStop(0, "red");
            //     gradientBg.addColorStop(0.25, "orange");
            //     gradientBg.addColorStop(0.5, "yellow");
            //     gradientBg.addColorStop(0.75, "green");
            //     gradientBg.addColorStop(1, "blue");
            //     return gradientBg;
            //   }
            // },
            fill: true,
            borderColor: "orange",
            backgroundColor: "rgba(255, 153, 0, 0.3)",

            tension: 0.4,
            pointRadius: 20,
            pointHoverRadius: 20,
            pointStyle: pointImage,
            data: hourlyTemp,
          },
        ],
      };
    },
    chartOptions() {
      return {
        responsive: false,
        plugins: {
          legend: {
            display: false,
          },
        },
        scales: {
          y: {
            display: true,
          },
        },
        onClick: function (evt, array) {
          if (array.length != 0) {
            document.location.href = "#hourlyDetail";
            weatherForecast.getWeatherHourlyForecastInformation(array[0].index);
          }
        },
      };
    },
  },
};
</script>
