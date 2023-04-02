<template>
  <div
    class="h-full xl:w-auto flex flex-col justify-betwee"
    :class="[defineTheme().isLight ? 'bg-white' : 'bg-[#242526]']"
  >
    <img
      src="https://picsum.photos/id/191/600/600"
      alt="img"
      class="h-[300px] w-full"
    />
    <div class="p-4 flex flex-col h-full justify-between text-[18px]">
      <h1 class="font-medium">How To Make Web Templates</h1>
      <p class="text-[#767676] text-[15px] font-normal">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla
        diam in ac dictum a urna
      </p>
      <div
        class="hover:text-sky-500 border-b border-transparent hover:border-sky-500 h-5 w-22 flex gap-4 items-center text-[18px] text-[#FFB400] font-medium"
      >
        <h1 class="uppercase">Learn More</h1>
        <i class="bx bx-chevron-right"></i>
      </div>
    </div>
  </div>
</template>
<script>
import themeStore from "../store/theme";
export default {
  name: "BlogCard",
  methods: {
    defineTheme() {
      const theme = themeStore();
      return theme;
    },
  },
};
</script>
<style></style>
