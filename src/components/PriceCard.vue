<template>
  <div
    class="w-[310px] h-[609px] p-6 pt-[50px] flex flex-col justify-between items-center text-[#2B2B2B] bg-white relative"
  >
    <div
      v-if="popular"
      class="absolute top-0 w-full bg-[#FFB400] text-center text-[#2B2B2B] text-[15px] font-normal"
    >
      Most Popular
    </div>
    <h1 class="text-[24px] font-semibold">{{ title }}</h1>
    <h1 class="text-[32px] font-bold">
      ${{ price }} <span class="text-[15px] font-normal">/Hour</span>
    </h1>
    <p class="text-[#767676] text-[15px] font-normal">
      For most businesses that want to optimize web queries
    </p>
    <div class="flex flex-col w-full gap-3 text-[15px] font-normal">
      <div class="flex gap-3">
        <img v-if="bools[0] == 1" src="../assets/icons/Check.svg" alt="img" />
        <img v-if="bools[0] == 0" src="../assets/icons/Close.svg" alt="img" />
        <h1>UI Design</h1>
      </div>
      <div class="flex gap-3">
        <img v-if="bools[1] == 1" src="../assets/icons/Check.svg" alt="img" />
        <img v-if="bools[1] == 0" src="../assets/icons/Close.svg" alt="img" />
        <h1>Web Development</h1>
      </div>
      <div class="flex gap-3">
        <img v-if="bools[2] == 1" src="../assets/icons/Check.svg" alt="img" />
        <img v-if="bools[2] == 0" src="../assets/icons/Close.svg" alt="img" />
        <h1>Logo Design</h1>
      </div>
      <div class="flex gap-3">
        <img v-if="bools[3] == 1" src="../assets/icons/Check.svg" alt="img" />
        <img v-if="bools[3] == 0" src="../assets/icons/Close.svg" alt="img" />
        <h1>Seo Optimization</h1>
      </div>
      <div class="flex gap-3">
        <img v-if="bools[4] == 1" src="../assets/icons/Check.svg" alt="img" />
        <img v-if="bools[4] == 0" src="../assets/icons/Close.svg" alt="img" />
        <h1>WordPress Integration</h1>
      </div>
      <div class="flex gap-3">
        <img v-if="bools[5] == 1" src="../assets/icons/Check.svg" alt="img" />
        <img v-if="bools[5] == 0" src="../assets/icons/Close.svg" alt="img" />
        <h1>5 Websites</h1>
      </div>
      <div class="flex gap-3">
        <img v-if="bools[6] == 1" src="../assets/icons/Check.svg" alt="img" />
        <img v-if="bools[6] == 0" src="../assets/icons/Close.svg" alt="img" />
        <h1>Unlimited User</h1>
      </div>
      <div class="flex gap-3">
        <img v-if="bools[7] == 1" src="../assets/icons/Check.svg" alt="img" />
        <img v-if="bools[7] == 0" src="../assets/icons/Close.svg" alt="img" />
        <h1>20 GB Bandwith</h1>
      </div>
    </div>
    <div
      class="w-[169px] h-[38px] rounded-[30px] shadow uppercase flex justify-center items-center text-[17px] font-bold"
    >
      Order Now
    </div>
  </div>
</template>
<script>
export default {
  name: "PriceCard",
  props: {
    bools: Array,
    title: String,
    price: String,
    popular: Boolean,
  },
};
</script>
<style></style>
