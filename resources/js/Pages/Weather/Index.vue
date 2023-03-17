<template>
  <!-- <Nav> -->
  <!-- <div class="container mx-auto bg-base-800"> -->
  <div class="grid grid-cols-12 gap-4">
    <div class="col-span-12">
      <CurrentDayForecast />
    </div>
    <div class="col-span-12 px-6 pt-2 pb-6">
      <DaysForecast />
    </div>
    <div class="col-span-12 px-6">
      <HourlyForecast />
    </div>
  </div>
  <!-- </div> -->
  <!-- </Nav> -->
</template>

<script>
import Nav from "../../Shared/Nav.vue";
import CurrentDayForecast from "./CurrentDayForecast.vue";
import DaysForecast from "./DaysForecast.vue";
import HourlyForecast from "./HourlyForecast.vue";

export default {
  layout: Nav,
  data() {
    return {
      hourlyweatherDateTime: "",
    };
  },
  components: {
    Nav,
    CurrentDayForecast,
    DaysForecast,
    HourlyForecast,
  },
};
</script>
