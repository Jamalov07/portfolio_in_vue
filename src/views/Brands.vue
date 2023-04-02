<template>
  <div
    class="pt-5 sm:pt-[70px] grid grid-cols-4 text-[200%] md:text-[400%] text-[#767676]"
  >
    <div class="flex justify-center items-center">
      <i
        class="bx bxl-stack-overflow"
        :class="[
          defineTheme().isLight ? 'hover:text-black' : 'hover:text-white',
        ]"
      ></i>
    </div>
    <div class="flex justify-center items-center">
      <i
        class="bx bxl-aws"
        :class="[
          defineTheme().isLight ? 'hover:text-black' : 'hover:text-white',
        ]"
      ></i>
    </div>
    <div class="flex justify-center items-center">
      <i
        class="bx bxl-spotify"
        :class="[
          defineTheme().isLight ? 'hover:text-black' : 'hover:text-white',
        ]"
      ></i>
    </div>
    <div class="flex justify-center items-center">
      <i
        class="bx bxl-jquery"
        :class="[
          defineTheme().isLight ? 'hover:text-black' : 'hover:text-white',
        ]"
      ></i>
    </div>
  </div>
</template>
<script>
import themeStore from "../store/theme";
export default {
  name: "Brands",
  methods: {
    defineTheme() {
      const theme = themeStore();
      return theme;
    },
  },
};
</script>
<style></style>
