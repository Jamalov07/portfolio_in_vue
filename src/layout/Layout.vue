<template>
  <div class="mx-auto bg-[#F0F0F6]">
    <div class="flex justify-between">
      <Profile
        class="profile absolute lg:block z-20 md:sticky"
        :class="[isProfileOpen ? 'block' : 'hidden']"
      />
      <i
        v-if="isProfileOpen"
        @click="profile"
        class="bx bx-x absolute lg:hidden text-4xl text-white z-20 p-2 bg-green-500 left-[242px] rounded-md"
      ></i>
      <i
        v-if="!isProfileOpen"
        class="bx bx-info-circle lg:hidden absolute text-4xl text-white z-20 p-2 bg-green-500 rounded-md"
        @click="profile"
      ></i>
      <main class="w-[1440px] h-auto">
        <Home />
        <Service />
        <PricePlans />
        <Recommendations />
        <Education />
        <Work />
        <Portfolio />
        <Blog />
        <Contact />
        <Map />
        <Brands />
        <Footer />
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
import Education from "../views/Education.vue";
import Work from "../views/Work.vue";
import Portfolio from "../views/Portfolio.vue";
import Blog from "../views/Blog.vue";
import Contact from "../views/Contact.vue";
import Map from "../views/Map.vue";
import Brands from "../views/Brands.vue";
import Footer from "../components/Footer/Footer.vue";
export default {
  name: "Layout",
  data() {
    return {
      isProfileOpen: false,
      isMenuOpen: false,
    };
  },
  methods: {
    profile() {
      this.isProfileOpen = !this.isProfileOpen;
    },
  },
  mounted() {},
  components: {
    Profile,
    Sidebar,
    Home,
    Service,
    PricePlans,
    Recommendations,
    Education,
    Work,
    Portfolio,
    Blog,
    Contact,
    Map,
    Brands,
    Footer,
  },
};
</script>
<style scoed>
@media screen and (min-width: 480px) {
  .profile {
    display: block !important;
  }
}
</style>
