<template>
  <div
    class="w-[250px] sm:w-[350px] xl:w-auto bg-white text-[#2B2B2B] h-[323px] p-[25px] flex flex-col justify-between"
  >
    <div class="flex gap-2 items-center text-[#FFB400]">
      <i class="bx bxs-star"></i>
      <i class="bx bxs-star"></i>
      <i class="bx bxs-star"></i>
      <i class="bx bxs-star"></i>
      <i class="bx bxs-star"></i>
    </div>
    <h1 class="text-[18px] font-medium">{{ title }}</h1>
    <p class="text-[#767676] text-[15px] font-normal">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam
      in ac dictum a urna viverra morbi. Morbi donec amet....
    </p>
    <div class="flex gap-3">
      <div class="w-10 h-10 sm:w-16 sm:h-16">
        <slot></slot>
      </div>
      <div class="h-full flex justify-center items-center flex-col">
        <h1 class="text-[18px] font-medium">{{ full_name }}</h1>
        <h1 class="text-[#767676] text-[15px] font-normal">{{ position }}</h1>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "RecommendationCard",
  props: {
    title: String,
    full_name: String,
    position: String,
  },
};
</script>
<style></style>
