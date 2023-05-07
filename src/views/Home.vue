<template>
  <div
    id="home"
    class="mt-12 xl:mt-0 w-full h-[600px] p-5 flex justify-center items-center gap-5 relative"
    :class="[defineTheme().isLight ? 'bg-white' : 'bg-[#242526]']"
  >
    <HomeCircle class="left-5 top-5 rounded-full border-[#FFB400]" />
    <HomeCircle class="bottom-5 right-5 rounded-full border-[#FFB400]" />
    <HomeCircle class="left-5 bottom-5 rounded-full border-[#05FF00]" />
    <HomeCircle class="right-5 top-5 rounded-full border-[#05FF00]" />
    <HomeCircle class="left-[50%] bottom-10 rounded-full border-[#05FF00]" />
    <HomeCircle class="left-20 top-20 border-[#0047FF]" />
    <HomeCircle class="left-[30%] top-[50%] border-[#0047FF]" />
    <div class="h-full flex flex-col justify-center items-start gap-5 p-[4%]">
      <div
        class="text-[120%] md:text-[180%] font-bold"
        :class="[defineTheme().isLight ? 'text-[#2B2B2B]' : 'text-white']"
      >
        <h1>I’m No'monjon Jamalov</h1>
        <span class="text-[#FFB400]">Full Stack ( Node.js + Vue.js )</span>
        <h1>Developer</h1>
      </div>
      <p class="text-[#767676] text-[70%]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, volutpat
        feugiat placerat lobortis. Natoque rutrum semper sed suspendisse nunc
        lectus.
      </p>
      <div
        class="w-[120px] px-[2%] py-[0.8%] hover:bg-sky-500 hover:text-yellow-50 flex justify-center items-center gap-[6%] bg-[#FFB400] text-[75%] text-[#2B2B2B]"
      >
        <h1>HIRE ME</h1>
        <i class="bx bx-right-arrow-alt"></i>
      </div>
    </div>
    <div class="h-full pr-[4%] hidden md:block">
      <img src="https://picsum.photos/600/600" alt="img" class="h-full" />
    </div>
  </div>
</template>
<script>
import themeStore from "../store/theme";
import HomeCircle from "../components/HomeCircle.vue";
export default {
  name: "Home",
  components: {
    HomeCircle,
  },
  methods: {
    defineTheme() {
      const theme = themeStore();
      return theme;
    },
  },
};

</script>
<style scoped></style>
