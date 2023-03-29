<template>
  <div
    class="h-auto xl:h-[220px] flex justify-between flex-col xl:flex-row gap-2 xl:gap-0"
    :class="false ? 'flex-row-reverse' : ''"
  >
    <div>
      <slot></slot>
    </div>
    <div class="h-full flex flex-col gap-5">
      <div
        class="flex justify-between sm:gap-3 font-medium text-[#2B2B2B] text-[18px]"
      >
        <h1 class="text-[20px] font-bold">{{ title }}</h1>
        <div class="flex items-center gap-1 sm:gap-4">
          <h1 class="text-[15px] font-normal">{{ position }}</h1>
          <p class="px-2 py-1 text-white bg-[#FFB400] text-[10px]">
            {{ date }}
          </p>
        </div>
      </div>
      <div class="flex flex-col h-full gap-3 xl:w-[836px]">
        <h1>{{ subtitle }}</h1>
        <p class="text-[15px] text-[#767676] font-normal">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus
          nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar quisque sed
          amet, nulla nunc. Eleifend sodales posuere fusce tempus etiam et
          pellentesque. Molestie risus enim neque eget dui. Lorem ipsum dolor
          sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus
          nunc, egestas id amet porttitor. Pulvinar quisque sed amet, nulla
          nunc. Eleifend sodales posuere fusce tempus etiam et pellentesque.
          Molestie risus enim neque eget dui.
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "EducationCard",
  props: {
    title: String,
    position: String,
    date: String,
    subtitle: String,
    reverse: Boolean,
  },
};
</script>
<style></style>
