<template>
  Hello {{ name }}!
</template>

<script>
  export default {
    props: {
      name: String
    },
    data() {
      return {};
    },
  };
</script>