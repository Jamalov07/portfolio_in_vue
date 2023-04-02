<template>
  <div
    class="w-full h-[210px] p-4 flex flex-col gap-6 text-[#767676]"
    :class="[defineTheme().isLight ? 'bg-white' : 'bg-[#242526]']"
  >
    <div
      class="mx-[30%] w-[40%] flex justify-center items-center px-2 py-1 rounded-full bg-[#FFB400]"
    >
      <i
        :class="`bx ${icon} text-[30px] text-white p-1 rounded-full bg-lime-600`"
      ></i>
    </div>
    <div class="flex flex-col gap-2">
      <div class="flex justify-between items-center">
        <h1 class="text-[18px] font-medium">{{ Object.keys(values)[0] }}:</h1>
        <h1 class="text-[14px] sm:text-[16px] font-medium">
          {{ Object.values(values)[0] }}
        </h1>
      </div>
      <div class="flex justify-between items-center">
        <h1 class="text-[18px] font-medium">{{ Object.keys(values)[1] }}:</h1>
        <h1 class="text-[14px] sm:text-[16px] font-medium">
          {{ Object.values(values)[1] }}
        </h1>
      </div>
      <div class="flex justify-between items-center">
        <h1 class="text-[18px] font-medium">{{ Object.keys(values)[2] }}:</h1>
        <h1 class="text-[14px] sm:text-[16px] font-medium">
          {{ Object.values(values)[2] }}
        </h1>
      </div>
    </div>
  </div>
</template>
<script>
import themeStore from "../store/theme";
export default {
  name: "ContactCard",
  props: {
    values: Object,
    icon: String,
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
