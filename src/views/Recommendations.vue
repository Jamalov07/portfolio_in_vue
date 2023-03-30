<template>
  <div
    class="mt-5 sm:mt-[70px] flex flex-col justify-between min-h-[566px] items-center"
  >
    <h1 class="h-10 px-2 sm:px-0 sm:w-[294px] text-[#2B2B2B] text-[30px] sm:text-[32px] font-bold">
      Recommendations
    </h1>
    <p
      class="text-[15px] text-[#767676] px-3 sm:px-0 pb-4 sm:pb-0 font-normal sm:h-[68px] md:px-16 xl:px-0 xl:w-[438px] text-center"
    >
      Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
      Velit officia consequat duis enim velit mollit. lorem ipsum
    </p>
    <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
      <RecommendationCard
        title="Great Quality!"
        full_name="James Gouse"
        position="Graphic Designer"
      >
        <img
          src="https://picsum.photos/600/600"
          alt="img"
          class="rounded-full w-[70px]"
        />
      </RecommendationCard>
      <RecommendationCard
        title="Great Quality!"
        full_name="James Gouse"
        position="Graphic Designer"
      >
        <img
          src="https://picsum.photos/600/600"
          alt="img"
          class="rounded-full w-[70px]"
        />
      </RecommendationCard>

      <RecommendationCard
        title="Amazing Work!"
        full_name="Tiana Philips"
        position="Photographer"
      >
        <img
          src="https://picsum.photos/600/600"
          alt="img"
          class="rounded-full w-[70px]"
        />
      </RecommendationCard>
      <RecommendationCard
        title="Great Quality!"
        full_name="Talan Westervelt"
        position="Business Man"
      >
        <img
          src="https://picsum.photos/600/600"
          alt="img"
          class="rounded-full w-[70px]"
        />
      </RecommendationCard>
    </div>
    <div class="h-3 w-[60px] mx-auto justify-between hidden xl:flex">
      <div class="w-[10px] h-[10px] rounded-full bg-[#FFB400]"></div>
      <div class="w-[10px] h-[10px] rounded-full bg-[#FFB400]"></div>
      <div class="w-[10px] h-[10px] rounded-full bg-[#FFB400]"></div>
      <div class="w-[10px] h-[10px] rounded-full bg-[#FFB400]"></div>
    </div>
  </div>
</template>
<script>
import RecommendationCard from "../components/RecommendationCard.vue";
export default {
  name: "Recommendations",
  components: {
    RecommendationCard,
  },
};
</script>
<style></style>
