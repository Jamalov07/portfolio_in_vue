<template>
  <div class="max-w-[1440px] mx-auto bg-[#F0F0F6]">
    <div class="flex justify-between">
      <Profile />
      <main class="w-[970px]">
        <Home />
        <Service />
        <PricePlans />
        <Recommendations />
      </main>
      <Sidebar />
    </div>
  </div>
</template>
<script>
import Profile from "../components/Profile.vue";
import Sidebar from "../components/Sidebar.vue";
import Home from "../views/Home.vue";
import Service from "../views/Service.vue";
import PricePlans from "../views/PricePlans.vue";
import Recommendations from "../views/Recommendations.vue";
export default {
  name: "Layout",
  data() {
    return {};
  },
  methods: {},
  mounted() {},
  components: { Profile, Sidebar, Home, Service, PricePlans, Recommendations },
};
</script>
<style></style>
