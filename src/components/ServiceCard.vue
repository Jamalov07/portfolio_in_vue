<template>
  <div class="relative duration-300">
    <div
      class="relative z-20 hover:opacity-0 w-[250px] sm:w-[350px] xl:w-auto h-[255px] flex flex-col gap-4 items-center bg-white"
      :class="[end ? 'px-6 text-center py-3' : 'py-6']"
    >
      <div>
        <slot></slot>
      </div>
      <h1 class="text-[18px] text-[#2B2B2B] font-medium">{{ title }}</h1>
      <h1 class="text-[15px] text-[#767676] font-normal">{{ subTitle }}</h1>
    </div>
    <div
      class="absolute top-0 z-10 w-[250px] sm:w-[350px] xl:w-auto h-[255px] flex flex-col justify-center gap-4 items-center bg-white px-6 text-center py-3"
    >
      <h1 class="text-[18px] text-[#2B2B2B] font-medium">Advertising</h1>
      <h1 class="text-[15px] text-[#767676] font-normal">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla
        diam in ac dictum a urna viverra morbi.
      </h1>
      <div
        class="h-5 w-22 flex justify-between items-center text-[12px] text-[#FFB400] font-bold"
      >
        <h1 class="uppercase">Contact me</h1>
        <i class="bx bx-chevron-right"></i>
      </div>
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
