<template>
  <Nav>
    <div class="container mx-auto bg-base-800">
      <div class="grid grid-cols-12 gap-4">
        <div class="col-span-9 bg-purple-200">1</div>
        <div class="col-span-3 p-2 bg-base-300 rounded-box">
          <div>
            <h2>7-Day Forecast</h2>
            <div class="flex flex-col w-full">
              <div
                class="grid card"
                v-for="weatherData in displayWeatherData.days"
              >
                <div class="flex items-center justify-between px-2">
                  <div>Today</div>
                  <div class="flex items-center">
                    <div class="avatar">
                      <div class="w-12 rounded">
                        <img
                          src="https://www.freeiconspng.com/thumbs/weather-icon-png/weather-icon-png-8.png"
                        />
                      </div>
                    </div>
                    <label>Sunny</label>
                  </div>
                  <div>39</div>
                </div>
              </div>
              <div class="divider"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Nav>
</template>

<script>
import { ref, onMounted } from "vue";
import Nav from "../Shared/Nav.vue";
export default {
  props: {
    name: String,
  },
  // layout: Nav, #Persistent Layout
  // components: { Nav },
};
</script>

<script setup>
const displayWeatherData = ref([]);

const getWeatherData = async () => {
  return fetch(
    "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Isabel%2C%20Leyte?unitGroup=metric&key=UBD2MGG36X9M4XB6F3CQ5TN2X&contentType=json"
  ).then((response) => response.json());
};

onMounted(() => {
  getWeatherData().then((data) => {
    displayWeatherData.value = data;
  });
});
</script>
