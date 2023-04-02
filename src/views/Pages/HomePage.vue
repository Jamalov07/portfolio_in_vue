<template>
  <Home />
  <Service />
  <Recommendations class="mx-auto" />
  <Brands />
</template>
<script>
import Home from "../Home.vue";
import Service from "../Service.vue";
import Recommendations from "../Recommendations.vue";
import Brands from "../Brands.vue";
export default {
  name: "HomePage",
  components: {
    Home,
    Service,
    Recommendations,
    Brands,
  },
};
</script>
<style></style>
