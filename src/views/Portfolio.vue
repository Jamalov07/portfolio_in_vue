<template>
  <div
    id="portfolio"
    class="mt-5 sm:mt-[70px] flex flex-col justify-between min-h-[1265px] items-center mb-0"
  >
    <h1 class="h-10 mx-auto text-[#2B2B2B] text-[32px] font-bold">Portfolio</h1>
    <p
      class="text-[15px] text-[#767676] font-normal pb-5 sm:pb-0 px-3 sm:px-0 sm:h-[68px] md:px-16 xl:px-0 xl:w-[438px] text-center"
    >
      Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
      Velit officia consequat duis enim velit mollit. lorem ipsum
    </p>

    <div
      class="grid grid-cols-2 gap-3 sm:grid-cols-3 md:flex md:justify-between md:w-full md:px-10 xl:flex xl:justify-between xl:w-[602px] mb-4 xl:mb-0 xl:h-[22px] text-[#2B2B2B] text-[18px] font-medium"
    >
      <h1
        class="active2 hover:text-sky-500 allcat"
        @click="changeActive2('.allcat')"
      >
        All Categories
      </h1>
      <h1 class="hover:text-sky-500 design" @click="changeActive2('.design')">
        UI Design
      </h1>
      <h1
        class="hover:text-sky-500 templates"
        @click="changeActive2('.templates')"
      >
        Web Templates
      </h1>
      <h1 class="hover:text-sky-500 logo" @click="changeActive2('.logo')">
        Logo
      </h1>
      <h1 class="hover:text-sky-500 brand" @click="changeActive2('.brand')">
        Branding
      </h1>
    </div>
    <div
      class="min-h-[950px] xl:w-full grid md:grid-cols-2 xl:grid-cols-4 gap-8"
    >
      <PortfolioCard />
      <PortfolioCard />
      <PortfolioCard />
      <PortfolioCard />
      <PortfolioCard />
      <PortfolioCard />
      <PortfolioCard />
      <PortfolioCard />
      <PortfolioCard />
      <PortfolioCard />
      <PortfolioCard />
      <PortfolioCard />
    </div>
  </div>
</template>
<script>
import PortfolioCard from "../components/PortfolioCard.vue";

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
  },
};
</script>
<style scoped>
.active2 {
  color: #ffb400 !important;
}
</style>
