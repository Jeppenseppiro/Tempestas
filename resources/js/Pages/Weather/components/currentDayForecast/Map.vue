<template>
  <l-map ref="map" :zoom="zoom" :bounds="bounds" :center="markers[0][0]">
    <l-control-layers :position="'topright'" />

    <l-tile-layer
      v-for="tileProvider in tileProviders"
      :key="tileProvider.name"
      :name="tileProvider.name"
      :visible="tileProvider.visible"
      :url="tileProvider.url"
      :attribution="tileProvider.attribution"
      layer-type="base"
    />

    <l-control-scale />

    <l-marker :lat-lng="markers[0][0]">
      <LTooltip
        :options="{
          interactive: true,
        }"
      >
        <div>
          Location:
          <b>{{ weatherForecast.newWeatherCurrentForecast.resolvedAddress }}</b
          ><br />
          Coordinates:
          <b
            >{{ weatherForecast.newWeatherCurrentForecast.latitude }},
            {{ weatherForecast.newWeatherCurrentForecast.longitude }}</b
          >
        </div>
      </LTooltip>
    </l-marker>

    <l-circle-marker
      v-for="(station, stationId) in markers[1]"
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
  LControlZoom,
  LControlAttribution,
  LControlScale,
  LControlLayers,
} from "@vue-leaflet/vue-leaflet";
import { latLngBounds, latLng, Draggable } from "leaflet";
import { weatherForecast } from "../../../../Shared/weatherForecast";

const tileProviders = [
  {
    name: "OpenStreetMap",
    visible: true,
    attribution:
      '&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',
    url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
  },
  {
    name: "OpenTopoMap",
    visible: false,
    url: "https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png",
    attribution:
      'Map data: &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)',
  },
  {
    name: "Carto",
    visible: false,
    url: "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png",
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
  },
];

export default {
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LCircleMarker,
    LTooltip,
    LFeatureGroup,
    LControlZoom,
    LControlAttribution,
    LControlScale,
    LControlLayers,
  },
  data() {
    return {
      weatherForecast,
      zoom: 13,
      tileProviders: tileProviders,
      bounds: [],
    };
  },
  computed: {
    markers() {
      let locations = [];
      let stations = [];
      let stationCoordinates = [];

      if (Object.keys(weatherForecast.newWeatherCurrentForecast).length <= 0) {
        locations.push([0, 0]);
      } else {
        locations.push([
          weatherForecast.newWeatherCurrentForecast.latitude,
          weatherForecast.newWeatherCurrentForecast.longitude,
        ]);
      }

      for (let station in weatherForecast.newWeatherCurrentForecast.stations) {
        stations.push(
          weatherForecast.newWeatherCurrentForecast.stations[station]
        );
        stationCoordinates.push([
          weatherForecast.newWeatherCurrentForecast.stations[station].latitude,
          weatherForecast.newWeatherCurrentForecast.stations[station].longitude,
        ]);
      }

      const bounds = latLngBounds(locations, stationCoordinates);
      this.bounds = bounds;

      let markers = [locations, stations, stationCoordinates];
      return markers;
    },
  },
};
</script>
