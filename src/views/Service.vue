<template>
  <div
  id="service"
    class="mt-4 sm:mt-[70px] flex flex-col justify-between min-h-[723px] items-center"
  >
    <h1 class="h-10 w-[193px] text-[#2B2B2B] text-[32px] font-bold">
      My Services
    </h1>
    <p
      class="text-[15px] text-[#767676] font-normal sm:h-[68px] mb-5 px-4 xl:mb-0 md:px-16 xl:px-0 xl:w-[438px] text-center"
    >
      Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
      Velit officia consequat duis enim velit mollit. lorem ipsum
    </p>
    <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
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
export default {
  name: "Service",
  components: { ServiceCard },
};
</script>
<style></style>
