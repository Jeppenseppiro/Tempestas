<template>
  <div class="h-full z-10">
    <l-map ref="map" v-model:zoom="zoom" :center="coordinates">
      <l-tile-layer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        layer-type="base"
        name="OpenStreetMap"
      ></l-tile-layer>

      <l-marker :lat-lng="coordinates"></l-marker>
    </l-map>
  </div>
</template>

<script>
import "leaflet/dist/leaflet.css";
import { LMap, LTileLayer, LMarker } from "@vue-leaflet/vue-leaflet";
import { weatherForecast } from "../../../../Shared/weatherForecast";

export default {
  components: {
    LMap,
    LTileLayer,
    LMarker,
  },
  data() {
    return {
      weatherForecast,
      zoom: 14,
    };
  },
  computed: {
    coordinates() {
      let latitude;
      let longitude;

      if (Object.keys(weatherForecast.newWeatherCurrentForecast).length <= 0) {
        latitude = 0;
        longitude = 0;
      } else {
        latitude = weatherForecast.newWeatherCurrentForecast.latitude;
        longitude = weatherForecast.newWeatherCurrentForecast.longitude;
      }

      return [latitude, longitude];
    },
  },
};
</script>

<style></style>
