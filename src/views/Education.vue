<template>
  <div
    class="pt-10 xl:pt-5 flex flex-col justify-between items-center gap-4"
  >
    <h1 class="h-10 mx-auto text-[32px] font-bold">Education</h1>
    <p
      class="text-[15px] text-[#767676] font-normal px-4 sm:px-0 pb-4 sm:pb-0 sm:h-[68px] md:px-16 xl:px-0 xl:w-[438px] text-center"
    >
      Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
      Velit officia consequat duis enim velit mollit. lorem ipsum
    </p>
    <div
      class="w-full p-7 flex flex-col"
      :class="[defineTheme().isLight ? 'bg-white' : 'bg-[#242526]']"
    >
      <EducationCard
        title="Tashkent State University of Economics"
        position="Student"
        date="Sep 2020 - Aug 2025"
        subtitle="Bachelor degree"
      >
        <img
          src="https://picsum.photos/600/600"
          alt=""
          class="w-[420px] h-full md:h-[300px] xl:h-full md:w-full xl:w-[420px]"
        />
      </EducationCard>
      <hr class="my-3" />
      <EducationCard
        :reverse="true"
        title="Najot ta'lim programming training center"
        position="Student"
        date="Jun 2022 - Mar 2023"
        subtitle="Course completion certificate"
      >
        <img
          src="https://picsum.photos/600/600"
          alt=""
          class="w-[420px] h-full md:h-[300px] xl:h-full md:w-full xl:w-[420px]"
        />
      </EducationCard>
      <hr class="my-3" />
      <EducationCard
        title="Web Developer Courses"
        position="Student"
        date="Jan 1016 - Dec 2021"
        subtitle="Certificate Of Web Training"
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
import themeStore from "../store/theme";
import EducationCard from "../components/EducationCard.vue";
export default {
  name: "Education",
  components: {
    EducationCard,
  },
  methods: {
    defineTheme() {
      const theme = themeStore();
      return theme;
    },
  },
};
</script>
<style></style>
