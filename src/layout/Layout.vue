<template>
  <div
    class="mx-auto"
    :class="[defineTheme().isLight ? 'bg-[#F0F0F6]' : 'bg-[#18191A]']"
  >
    <div class="flex justify-between max-w-[1980px] mx-auto">
      <div
        class="xl:hidden flex justify-between w-[100%] px-2 py-1 absolute top-0 z-20 text-3xl"
        :class="[
          defineTheme().isLight
            ? 'text-[#2B2B2B] bg-white'
            : 'text-white bg-[#242526]',
        ]"
      >
        <i class="bx bx-menu" @click="profile"></i>
        <i
          v-if="!isMenuOpen"
          class="bx bx-dots-vertical-rounded"
          @click="menu"
        ></i>
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
      <main
        class="w-[100%] xl:w-[71%] 2xl:w-[75%] max-w-[1440px] p-[0.7%]"
        :class="[defineTheme().isLight ? 'text-[#2B2B2B]' : 'text-white']"
      >
        <router-view> </router-view>
        <!-- <Education /> -->
        <!-- <Work /> -->

        <Footer
          :class="[
            defineTheme().isLight
              ? 'bg-white text-[#2B2B2B]'
              : 'bg-[#242526] text-white',
          ]"
        />
      </main>
      <Sidebar
        class="xl:block absolute sm:fixed md:fixed xl:sticky right-0 top-0 z-50"
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
import swiper from "../views/swiper.vue";
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
    swiper,
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
