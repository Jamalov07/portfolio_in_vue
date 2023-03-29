<template>
  <div
    class="mt-[70px] flex flex-col justify-between min-h-[566px] items-center"
  >
    <h1 class="h-10 w-[294px] text-[#2B2B2B] text-[32px] font-bold">
      Recommendations
    </h1>
    <p
      class="text-[15px] text-[#767676] font-normal h-[68px] w-[438px] text-center"
    >
      Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
      Velit officia consequat duis enim velit mollit. lorem ipsum
    </p>
    <div class="grid grid-cols-4 gap-4">
      <RecommendationCard
        title="Great Quality!"
        full_name="James Gouse"
        position="Graphic Designer"
      >
        <img
          src="https://picsum.photos/id/167/200/200"
          alt="img"
          class="rounded-full"
        />
      </RecommendationCard>
      <RecommendationCard
      title="Great Quality!"
      full_name="James Gouse"
      position="Graphic Designer"
    >
      <img
        src="https://picsum.photos/id/167/200/200"
        alt="img"
        class="rounded-full"
      />
    </RecommendationCard>
    
      <RecommendationCard
        title="Amazing Work!"
        full_name="Tiana Philips"
        position="Photographer"
      >
        <img
          src="https://picsum.photos/id/197/200/200"
          alt="img"
          class="rounded-full"
        />
      </RecommendationCard>
      <RecommendationCard
        title="Great Quality!"
        full_name="Talan Westervelt"
        position="Business Man"
      >
        <img
          src="https://picsum.photos/id/227/200/200"
          alt="img"
          class="rounded-full"
        />
      </RecommendationCard>
    </div>
    <div class="h-3 w-[60px] mx-auto flex justify-between">
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
