<template>
  <div class="container mx-auto bg-base-800">
    Hello {{ name }}
    <ul>
      <li v-for="techstack in techstacks" v-text="techstack"></li>
    </ul>
  </div>
</template>

<script>
import Nav from "../Shared/Nav.vue";
export default {
  props: {
    name: String,
    techstacks: Array,
  },
  layout: Nav,
};
</script>
