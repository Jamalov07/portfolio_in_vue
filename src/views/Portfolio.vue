<template>
  <div
    id="portfolio"
    class="mt-10 xl:mt-5 flex flex-col justify-between items-center gap-4"
  >
    <h1 class="text-center text-[32px] font-bold">Portfolio</h1>
    <p
      class="text-[15px] text-[#767676] font-normal text-center w-[90%] md:w-[50%]"
    >
      Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
      Velit officia consequat duis enim velit mollit. lorem ipsum
    </p>

    <div
      class="flex justify-center flex-wrap items-center gap-x-8 gap-y-2 text-[18px] font-medium"
      :class="[defineTheme().isLight ? 'text-[#2B2B2B]' : 'text-white']"
    >
      <router-link to="/portfolio/all" class="hover:text-sky-500">
        All Categories
      </router-link>
      <router-link to="/portfolio/backend" class="hover:text-sky-500">
        Backend
      </router-link>
      <router-link to="/portfolio/frontend" class="hover:text-sky-500">
        Frontend
      </router-link>
    </div>
    <div class="flex justify-around gap-y-2 flex-wrap min-h-screen">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import PortfolioCard from "../components/PortfolioCard.vue";
import themeStore from "../store/theme";
export default {
  name: "Portfolio",
  components: { PortfolioCard },
  methods: {
    changeActive2(str) {
      const active = window.document.querySelector(".active2");
      if (active) {
        active.classList.remove("active2");
      }
      const newActive = window.document.querySelector(str);
      if (newActive) {
        newActive.classList.add("active2");
      }
    },

    defineTheme() {
      const theme = themeStore();
      return theme;
    },
  },
};
</script>
<style scoped>
.router-link-active {
  color: #ffb400;
}
</style>
