<template>
  <div
    class="w-[250px] sm:w-[350px] h-[255px] flex flex-col gap-4 items-center bg-white"
    :class="[end ? 'px-6 text-center py-3' : 'py-6',]"
  >
    <div>
      <slot></slot>
    </div>
    <h1 class="text-[18px] text-[#2B2B2B] font-medium">{{ title }}</h1>
    <h1 class="text-[15px] text-[#767676] font-normal">{{ subTitle }}</h1>
    <div
      v-if="end"
      class="h-5 w-22 flex justify-between items-center text-[12px] text-[#FFB400] font-bold"
    >
      <h1 class="uppercase">Order now</h1>
      <i class="bx bx-chevron-right"></i>
    </div>
  </div>
</template>
<script>
export default {
  name: "ServiceCard",
  props: {
    title: String,
    subTitle: String,
    end: Boolean,
  },
};
</script>
<style></style>
