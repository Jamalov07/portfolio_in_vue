<template>
  <div class="relative">
    <a
      href="https://github.com/Jamalov07"
      class="absolute opacity-0 hover:opacity-100 z-30 w-full h-full text-white bg-[#f8f6f6c2] flex justify-center items-center"
    >
      <div class="text-sky-700 text-[28px] font-semibold">My Project</div>
      <div
        class="absolute z-30 bottom-0 w-full h-[16%] bg-[#FFB400] flex justify-center items-center"
        :class="[defineTheme().isLight ? 'text-[#2B2B2B]' : 'text-white']"
      >
        <h1>View more</h1>
        <i class="bx bx-chevron-right"></i>
      </div>
    </a>
    <img
      src="https://picsum.photos/600/600"
      alt="img"
      class="w-[250px] sm:w-full h-[250px] sm:h-[310px]"
    />
  </div>
</template>
<script>
import themeStore from "../store/theme";
export default {
  name: "PortfolioCard",
  methods: {
    defineTheme() {
      const theme = themeStore();
      return theme;
    },
  },
};
</script>
<style></style>
