<template>
  <div class="container mx-auto bg-base-800 shadow-lg p-4">
    <div class="p-4">
      <label for="search">Search</label>
      <input
        id="search"
        type="text"
        v-model="address"
        @keydown.enter="searchAddress"
        class="ml-2 px-2 py-1 text-sm rounded border"
      />
    </div>

    <table class="w-full">
      <tr class="bg-gray-900 text-white">
        <th class="px-2 text-left">Id</th>
        <th class="px-2 text-left">Address</th>
        <th class="px-2 text-left">Latitude</th>
        <th class="px-2 text-left">Longitude</th>
      </tr>

      <tr
        v-for="(location, locationId) in locations.data"
        :key="locationId"
        :class="{ 'bg-gray-300': locationId % 2 === 0 }"
      >
        <td class="px-2 text-left">{{ location.id }}</td>
        <td class="px-2 text-left">{{ location.address }}</td>
        <td class="px-2 text-left">{{ location.latitude }}</td>
        <td class="px-2 text-left">{{ location.longitude }}</td>
      </tr>
    </table>

    <div class="p-5 flex justify-end">
      <inertia-link class="px-2" :href="locations.prev_page_url"
        >Previous</inertia-link
      >
      <inertia-link class="px-2" :href="locations.next_page_url"
        >Next</inertia-link
      >
    </div>
  </div>
</template>

<script>
import Nav from "../../Shared/Nav.vue";

export default {
  layout: Nav,
  props: {
    locations: Object,
  },
  data() {
    return {
      address: "",
    };
  },
  methods: {
    searchAddress() {
      this.$inertia.get(
        this.route("locations.index", { address: this.address })
      );
    },
  },
};
</script>
