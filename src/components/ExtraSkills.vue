<template>
  <div class="flex justify-between">
    <div class="relative w-[15px] h-[15px]">
      <div
        class="absolute w-[10px] h-[10px] border border-[#FFB400] top-0 left-0"
      ></div>
      <div
        class="absolute w-[10px] h-[10px] border border-[#FFB400] bottom-0 right-0"
      ></div>
    </div>
    <h1 class="text-[15px] font-normal">
      {{ extra }}
    </h1>
  </div>
</template>
<script>
export default {
  name: "ExtraSkills",
  props: {
    extra: String,
  },
};
</script>
<style></style>
