<template>
  <l-map ref="map" :zoom="zoom" :center="coordinates">
    <l-tile-layer
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      layer-type="base"
      name="OpenStreetMap"
    ></l-tile-layer>

    <l-marker :lat-lng="coordinates"></l-marker>

    <l-feature-group ref="featureGroup">
      <l-circle-marker
        v-for="(station, stationId) in stations"
        :lat-lng="[station.latitude, station.longitude]"
        :key="stationId"
        :options="{
          color: 'green',
          radius: 18,
          weight: 2,
          fillOpacity: 0.5,
        }"
      >
        <LTooltip
          :options="{
            // interactive: true,
            // permanent: true,
          }"
        >
          <div>
            Weather Station: <b>{{ station.name }}</b
            ><br />
            Coordinates: <b>{{ station.latitude }}, {{ station.longitude }}</b
            ><br />
            Distance: <b>{{ station.distance }} km</b>
          </div>
        </LTooltip>
      </l-circle-marker>
    </l-feature-group>
  </l-map>
</template>

<script>
import "leaflet/dist/leaflet.css";
import {
  LMap,
  LTileLayer,
  LMarker,
  LCircleMarker,
  LTooltip,
  LFeatureGroup,
} from "@vue-leaflet/vue-leaflet";
import { weatherForecast } from "../../../../Shared/weatherForecast";

export default {
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LCircleMarker,
    LTooltip,
    LFeatureGroup,
  },
  data() {
    return {
      weatherForecast,
      zoom: 13,
    };
  },
  mounted() {
    console.log(this.$refs);
  },
  methods: {
    fitBounds() {
      const bounds = this.$refs.featureGroup.layer.getBounds();
      this.$refs.map.layer.fitBounds(bounds);
    },
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
    stations() {
      let stations = [];
      for (let station in weatherForecast.newWeatherCurrentForecast.stations) {
        stations.push(
          weatherForecast.newWeatherCurrentForecast.stations[station]
        );
      }
      return stations;
    },
  },
};
</script>
