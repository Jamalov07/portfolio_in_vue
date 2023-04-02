<template>
  <div class="relative">
    <div
      class="relative z-20 hover:opacity-0 h-[270px] flex flex-col gap-[5%] justify-center items-center"
      :class="[defineTheme().isLight ? 'bg-white' : 'bg-[#242526]']"
    >
      <div>
        <slot></slot>
      </div>
      <h1 class="text-[18px] font-medium">{{ title }}</h1>
      <h1 class="text-[15px] text-[#767676] font-normal">{{ subTitle }}</h1>
    </div>
    <div
      class="absolute top-0 z-10 h-[270px] flex flex-col gap-[5%] justify-center items-center"
      :class="[defineTheme().isLight ? 'bg-white' : 'bg-[#242526]']"
    >
      <h1
        class="text-[18px] font-medium"
        :class="[defineTheme().isLight ? 'text-[#2B2B2B]' : 'text-white']"
      >
        Advertising
      </h1>
      <h1
        class="text-[15px] font-normal w-[86%] text-center"
        :class="[defineTheme().isLight ? 'text-[#767676]' : 'text-green-300']"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla
        diam in ac dictum a urna viverra morbi.
      </h1>
      <div
        class="flex justify-between items-center text-[12px] font-bold"
        :class="[defineTheme().isLight ? 'text-[#FFB400]' : 'text-yellow-400']"
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
