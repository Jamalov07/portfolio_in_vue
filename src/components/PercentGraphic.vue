<template>
  <div>
    <div
      class="flex justify-between items-center text-[#767676] text-[15px] font-normal"
    >
      <h1>{{ title }}</h1>
      <h1>{{ percent }}</h1>
    </div>
    <div
      class="h-[4px] w-full rounded-full border border-[#FFB400] p-[2px] flex justify-start items-center"
    >
      <div
        class="h-[2px] rounded-full bg-[#FFB400]"
        :class="`w-[${inPercent}]`"
      ></div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Language",
  props: {
    title: String,
    inPercent: String,
  },
  data() {
    return {
      percent: this.inPercent,
    };
  },
};
</script>
<style></style>
