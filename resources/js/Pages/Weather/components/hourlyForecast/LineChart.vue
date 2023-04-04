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
      <h3 class="font-bold text-2xl text-center">{{ weatherForecast.weatherHourlyForecastInformation.datetime }}</h3>
      <p class="py-4">
        <div
          class="grid grid-rows-4 grid-flow-col place-items-center text-center px-4 text-lg"
        >
          <div class="font-light">
            <label>{{ weatherForecast.newWeatherCurrentForecast.resolvedAddress }}</label>
            <br />
            <label>{{ weatherForecast.newWeatherCurrentForecast.timezone }}</label>
          </div>

          <div>
            <div class="flex flex-auto items-center">
              <div class="w-16">
                <img
                  :src="`resources/VisualCrossing/PNG/2nd Set - Color/${weatherForecast.weatherHourlyForecastInformation.icon}.png`"
                />
              </div>
              <label class="font-medium text-7xl"
                >&nbsp;{{
                  weatherForecast.weatherHourlyForecastInformation.temp
                }}°C</label
              >
            </div>
          </div>

          <div>
            <label class="font-medium text-2xl"
              >&nbsp;{{
                weatherForecast.weatherHourlyForecastInformation.conditions
              }}</label
            >
            <br />
            <!-- <p class="text-sm">
              Updated as of:
              <label class="font-medium font"
                >&nbsp;{{
                  weatherForecast.newWeatherCurrentConditionForecast.datetime
                }}</label
              >
            </p> -->
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
            </div>

            <div class="flex pt-2 text-xs">
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
              <div class="divider divider-horizontal"></div>
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
            </div>

            <div class="flex pt-2 text-xs">
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
        height: "100%",
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
        pointImage[i].src = `resources/VisualCrossing/PNG/2nd Set - Color/${weatherForecast.newWeatherHourlyForecast[i].icon}.png`;

        hourlyDateTime.push(
          weatherForecast.newWeatherHourlyForecast[i].datetime.substring(0, 5)
        );
        hourlyTemp.push(weatherForecast.newWeatherHourlyForecast[i].temp);
      }

      return {
        labels: hourlyTemp,
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
            xAxisID: 'temperature'
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
          x:{
            ticks: {
              callback: function(value, index, ticks) {
                return value + ":00";
              }
            },
          },
          y: {
            display: false,
            
          },
          temperature: {
            position: 'top',
          }
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
