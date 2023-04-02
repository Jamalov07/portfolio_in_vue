<template>
  <div
    id="service"
    class="pt-4 sm:pt-12 h-auto flex flex-col gap-4 items-center"
    :class="[defineTheme().isLight ? 'text-[#2B2B2B]' : 'text-white']"
  >
    <h1 class="text-center text-[32px] font-bold">My Services</h1>
    <p
      class="text-[15px] text-[#767676] font-normal w-[90%] md:w-[50%] text-center"
    >
      Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
      Velit officia consequat duis enim velit mollit. lorem ipsum
    </p>
    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 w-full sm:h-[1160px] h-[2340px] md:h-[560px] md:min-h-auto gap-y-[1%] gap-x-[1%] sm:gap-y-[2%]"
    >
      <ServiceCard title="Web Development" subTitle="Blog, E-Commerce">
        <img src="../assets/icons/coding.svg" alt="" class="pb-2" />
      </ServiceCard>
      <ServiceCard title="Typescript" subTitle="Clean and organized code">
        <i class="bx bxl-typescript text-6xl text-[#FFB400]"></i>
      </ServiceCard>
      <ServiceCard title="Docker with PM2" subTitle="To deploy to the server">
        <i class="bx bxl-docker text-6xl text-[#FFB400]"></i>
      </ServiceCard>
      <ServiceCard title="Vue js" subTitle="To work with the frontend">
        <i class="bx bxl-vuejs text-6xl text-[#FFB400]"></i>
      </ServiceCard>
      <ServiceCard title="Node js" subTitle="To work with the backend">
        <i class="bx bxl-nodejs text-6xl text-[#FFB400]"></i>
      </ServiceCard>
      <ServiceCard title="PosgreSQL" subTitle="To work with databases">
        <i class="bx bxl-postgresql text-6xl text-[#FFB400]"></i>
      </ServiceCard>
      <ServiceCard title="Github" subTitle="To track the work done">
        <i class="bx bxl-github text-6xl text-[#FFB400]"></i>
      </ServiceCard>
      <ServiceCard title="Github" subTitle="To track the work done">
        <i class="bx bxl-github text-6xl text-[#FFB400]"></i>
      </ServiceCard>
    </div>
  </div>
</template>
<script>
import ServiceCard from "../components/ServiceCard.vue";
import themeStore from "../store/theme";
export default {
  name: "Service",
  components: { ServiceCard },
  methods: {
    defineTheme() {
      const theme = themeStore();
      return theme;
    },
  },
};
</script>
<style></style>
