<template>
  <div
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
        <img src="../assets/icons/coding.svg" alt="" />
      </ServiceCard>
      <ServiceCard title="UI/UX Design" subTitle="Mobile app, website design">
        <img src="../assets/icons/Group.svg" alt="" />
      </ServiceCard>
      <ServiceCard title="Sound Design" subTitle="Voice Over, Beat Making">
        <img src="../assets/icons/Microphone.svg" alt="" />
      </ServiceCard>
      <ServiceCard
        title="Game Design"
        subTitle="Character Design, Props & Objects"
      >
        <img src="../assets/icons/game-development.svg" alt="" />
      </ServiceCard>
      <ServiceCard title="Photography" subTitle="portrait, product photography">
        <img src="../assets/icons/Photographer.svg" alt="" />
      </ServiceCard>
      <ServiceCard title="Photography" subTitle="portrait, product photography">
        <img src="../assets/icons/Photographer.svg" alt="" />
      </ServiceCard>
      <ServiceCard title="Photography" subTitle="portrait, product photography">
        <img src="../assets/icons/Photographer.svg" alt="" />
      </ServiceCard>
      <ServiceCard
        title="Advertising"
        subTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi."
        end="true"
      >
        <!-- <img src="../assets/icons/game-development.svg" alt="" /> -->
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
