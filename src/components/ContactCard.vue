<template>
  <div class="w-full h-[210px] bg-white p-4 flex flex-col gap-6 text-[#767676]">
    <div class="w-full flex justify-center items-center">
      <i :class="`bx ${icon} text-[30px]`"></i>
    </div>
    <div class="flex flex-col gap-2">
      <div class="flex justify-between items-center">
        <h1 class="text-[18px] font-medium">{{ Object.keys(values)[0] }}:</h1>
        <h1>{{ Object.values(values)[0] }}</h1>
      </div>
      <div class="flex justify-between items-center">
        <h1>{{ Object.keys(values)[1] }}:</h1>
        <h1>{{ Object.values(values)[1] }}</h1>
      </div>
      <div class="flex justify-between items-center">
        <h1>{{ Object.keys(values)[2] }}:</h1>
        <h1>{{ Object.values(values)[2] }}</h1>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ContactCard",
  props: {
    values: Object,
    icon: String,
  },
};
</script>
<style></style>
