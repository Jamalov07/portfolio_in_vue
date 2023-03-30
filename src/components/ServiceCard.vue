<template>
  <div class="relative duration-300 mx-auto px-4 lg:mx-0 xl:px-0">
    <div
      class="relative z-20 hover:opacity-0 w-[250px] sm:w-[350px] lg:w-auto py-6 xl:w-[100%] h-[255px] flex flex-col gap-4 items-center"
      :class="[defineTheme().isLight ? 'bg-white' : 'bg-sky-800']"
    >
      <div>
        <slot></slot>
      </div>
      <h1 class="text-[18px] text-[#2B2B2B] font-medium">{{ title }}</h1>
      <h1 class="text-[15px] text-[#767676] font-normal">{{ subTitle }}</h1>
    </div>
    <div
      class="absolute top-0 z-10 w-[250px] sm:w-[350px] lg:w-auto xl:w-[100%] h-[255px] flex flex-col justify-center gap-4 lg:gap-2 xl:gap-4 items-center px-6 lg:px-3 xl:px-6 text-center py-3"
      :class="[defineTheme().isLight ? 'bg-white' : 'bg-sky-800']"
    >
      <h1
        class="text-[18px] font-medium"
        :class="[defineTheme().isLight ? 'text-[#2B2B2B]' : 'text-white']"
      >
        Advertising
      </h1>
      <h1
        class="text-[15px] font-normal"
        :class="[defineTheme().isLight ? 'text-[#767676]' : 'text-green-300']"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla
        diam in ac dictum a urna viverra morbi.
      </h1>
      <div
        class="h-5 w-22 flex justify-between items-center text-[12px] font-bold"
        :class="[defineTheme().isLight ? 'text-[#FFB400]' : 'text-yellow-200']"

      >
        <h1 class="uppercase">Contact me</h1>
        <i class="bx bx-chevron-right"></i>
      </div>
    </div>
  </div>
</template>
<script>
import themeStore from "../store/theme";
export default {
  name: "ServiceCard",
  props: {
    title: String,
    subTitle: String,
    end: Boolean,
  },
  methods: {
    defineTheme() {
      const theme = themeStore();
      return theme;
    },
  },
};
</script>
<style></style>
