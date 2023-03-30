<template>
  <div
    class="mt-5 sm:mt-[70px] flex flex-col justify-between min-h-[955px] items-center mb-0"
  >
    <h1 class="h-10 mx-auto text-[#2B2B2B] text-[32px] font-bold">
      Work History
    </h1>
    <p
      class="text-[15px] text-[#767676] font-normal px-3 sm:px-0 pb-4 sm:pb-0 sm:h-[68px] md:px-16 xl:px-0 xl:w-[438px] text-center mb-5 xl:mb-0"
    >
      Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
      Velit officia consequat duis enim velit mollit. lorem ipsum
    </p>
    <div class="min-h-[792px] w-full p-7 flex flex-col bg-white">
      <EducationCard
        title="Anonymous company"
        position="Internship"
        date="Jan 2022 - Dec 2023"
        subtitle="Node js backend developer"
      >
        <img
          src="https://picsum.photos/600/600"
          alt=""
          class="w-[420px] h-full md:h-[300px] xl:h-full md:w-full xl:w-[420px]"
        />
      </EducationCard>
      <hr class="my-3" />
      <EducationCard
        title="Anonymous company"
        position="Junior"
        date="Jan 2022 - Jan 2023"
        subtitle="Frontend Developer"
      >
        <img
          src="https://picsum.photos/600/600"
          alt=""
          class="w-[420px] h-full md:h-[300px] xl:h-full md:w-full lg:w-[420px] xl:w-[420px]"
        />
      </EducationCard>
      <hr class="my-3" />
      <EducationCard
        title="Anonymous company"
        position="Junior"
        date="Jan 2023 - Dec 2023"
        subtitle="Junior Backend Developer"
      >
        <img
          src="https://picsum.photos/600/600"
          alt=""
          class="w-[420px] h-full md:h-[300px] xl:h-full md:w-full xl:w-[420px]"
        />
      </EducationCard>
    </div>
  </div>
</template>
<script>
import EducationCard from "../components/EducationCard.vue";
export default {
  name: "Work",
  components: {
    EducationCard,
  },
};
</script>
<style></style>
