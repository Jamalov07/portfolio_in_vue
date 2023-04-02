<template>
  <div
    class="min-h-[320px] flex flex-col justify-center gap-[6%] p-[6%]"
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
    <div class="flex gap-3 items-center">
      <div>
        <slot></slot>
      </div>
      <div class="h-full flex justify-center items-start flex-col">
        <h1 class="text-[80%] font-medium">{{ full_name }}</h1>
        <h1 class="text-[#767676] text-[60%] font-normal">{{ position }}</h1>
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
