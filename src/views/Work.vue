<template>
  <div class="pt-5 flex flex-col justify-between items-center gap-4">
    <h1 class="text-center text-[32px] font-bold">Work History</h1>
    <p
      class="text-[15px] text-[#767676] font-normal text-center w-[90%] md:w-[50%]"
    >
      Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
      Velit officia consequat duis enim velit mollit. lorem ipsum
    </p>
    <div
      class="w-full p-7 flex flex-col"
      :class="[defineTheme().isLight ? 'bg-white' : 'bg-[#242526]']"
    >
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
          class="w-[420px] h-full md:h-[300px] xl:h-full md:w-full xl:w-[420px]"
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
import themeStore from "../store/theme";
import EducationCard from "../components/EducationCard.vue";
export default {
  name: "Work",
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
