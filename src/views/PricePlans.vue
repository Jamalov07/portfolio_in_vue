<template>
  <div
    class="mt-5 sm:mt-[70px] flex flex-col justify-between min-h-[793px] items-center"
  >
    <h1 class="h-10 w-[193px] text-[#2B2B2B] text-[32px] font-bold">
      Price Plans
    </h1>
    <p
      class="text-[15px] text-[#767676] font-normal sm:h-[68px] px-4 pb-5 sm:pb-0 md:px-16 xl:px-0 xl:w-[438px] text-center"
    >
      Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
      Velit officia consequat duis enim velit mollit. lorem ipsum
    </p>
    <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
      <PriceCard
        :bools="[1, 1, 0, 0, 0, 0, 0, 0]"
        title="Silver"
        :popular="false"
        price="0.00"
      />
      <PriceCard
        :bools="[1, 1, 0, 0, 0, 0, 0, 0]"
        title="Silver"
        :popular="false"
        price="0.00"
      />
      <PriceCard
        :bools="[1, 1, 1, 1, 0, 0, 0, 0]"
        title="GOld"
        :popular="true"
        price="50.00"
      />
      <PriceCard
        :bools="[1, 1, 1, 1, 1, 1, 1, 1]"
        title="Dimond"
        :popular="false"
        price="80.00"
      />
    </div>
  </div>
</template>
<script>
import PriceCard from "../components/PriceCard.vue";

export default {
  name: "PricePlans",
  components: { PriceCard },
};
</script>
<style></style>
