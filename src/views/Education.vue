<template>
  <div
    class="mt-[70px] flex flex-col justify-between min-h-[955px] items-center"
  >
    <h1 class="h-10 mx-auto text-[#2B2B2B] text-[32px] font-bold">Education</h1>
    <p
      class="text-[15px] text-[#767676] font-normal h-[68px] w-[438px] text-center"
    >
      Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
      Velit officia consequat duis enim velit mollit. lorem ipsum
    </p>
    <div class="min-h-[792px] w-full p-7 flex flex-col bg-white">
      <EducationCard
        title="University Of Toronto"
        position="Student"
        date="Jan 1016 - Dec 2021"
        subtitle="Certificate Of Web Training"
      >
        <img
          src="https://picsum.photos/id/147/600/600"
          alt=""
          class="w-[420px] h-full"
        />
      </EducationCard>
      <hr class="m-3" />
      <EducationCard
        :reverse="true"
        title="Programming Course"
        position="Student"
        date="Jan 1016 - Dec 2021"
        subtitle="Certificate Of Web Training"
      >
        <img
          src="https://picsum.photos/id/186/600/600"
          alt=""
          class="w-[420px] h-full"
        />
      </EducationCard>
      <hr class="m-3" />
      <EducationCard
        title="Web Developer Courses"
        position="Student"
        date="Jan 1016 - Dec 2021"
        subtitle="Certificate Of Web Training"
      >
        <img
          src="https://picsum.photos/id/347/600/600"
          alt=""
          class="w-[420px] h-full"
        />
      </EducationCard>
    </div>
  </div>
</template>
<script>
import EducationCard from "../components/EducationCard.vue";
export default {
  name: "Education",
  components: {
    EducationCard,
  },
};
</script>
<style></style>
