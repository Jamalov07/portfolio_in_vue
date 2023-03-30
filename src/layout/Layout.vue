<template>
  <div class="mx-auto" :class="[defineTheme().isLight ? 'bg-[#F0F0F6]' : 'bg-[#090938]']">
    <div class="flex sm:justify-between 2xl:justify-center 2xl:gap-4">
      <div
        class="xl:hidden flex justify-between w-[100%] px-2 py-1 absolute top-0 z-20 text-3xl"
        :class="[defineTheme().isLight ? 'text-white bg-[#9e8888ad]' : 'text-white bg-[#1f1e46]']"
      >
        <i class="bx bxs-user-detail" @click="profile"></i>
        <i v-if="!isMenuOpen" class="bx bx-menu" @click="menu"></i>
      </div>
      <Profile
        class="xl:flex absolute z-20 left-0 top-0 xl:static"
        :class="[isProfileOpen ? 'block' : 'hidden']"
      >
        <i
          class="bx bx-x text-3xl p-[1px] bg-lime-500 rounded-md"
          @click="profile"
        ></i>
      </Profile>
      <main class="w-full md:w-[1440px] h-auto">
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
      <Sidebar
        class="xl:block absolute sm:fixed md:fixed xl:sticky right-0 top-0 z-20"
        :class="[isMenuOpen ? 'block' : 'hidden']"
      >
        <i
          class="bx bx-chevron-right text-2xl p-[1px] xl:bg-white rounded-md text-white"
          @click="menu"
        ></i>
      </Sidebar>
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
import themeStore from "../store/theme";
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
      this.isMenuOpen = false;
    },
    menu() {
      this.isMenuOpen = !this.isMenuOpen;
      this.isProfileOpen = false;
    },
    defineTheme() {
      const theme = themeStore();
      return theme;
    },
  },
  mounted() {
    this.defineTheme();
  },
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
<style scoped>
@media screen and (min-width: 480px) {
  .profile {
    display: block !important;
  }
}
</style>
