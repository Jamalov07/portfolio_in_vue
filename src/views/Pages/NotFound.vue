<template>
  <section
    class="flex justify-center items-center"
    :class="[defineTheme().isLight ? 'bg-white' : 'bg-[#242526]']"
  >
    <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
      <div class="mx-auto max-w-screen-sm text-center">
        <h1
          class="mb-4 text-7xl tracking-tight text-[#FFB400] font-extrabold lg:text-9xl"
        >
          404
        </h1>
        <p
          class="mb-4 text-3xl tracking-tight font-bold md:text-4xl text-[#FFB400]"
        >
          Something's missing.
        </p>
        <p class="mb-4 text-lg font-light text-[#767676]">
          Sorry, we can't find that page. You'll find lots to explore on the
          home page.
        </p>
        <router-link
          to="/"
          class="inline-flex bg-[#FFB400] focus:ring-4 my-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          :class="[
            defineTheme().isLight
              ? 'text-[#2B2B2B] focus:ring-sky-300 hover:bg-yellow-300 hover:text-white'
              : ' text-white focus:ring-sky-900 hover:bg-sky-800 ',
          ]"
          >Back to Homepage</router-link
        >
      </div>
    </div>
  </section>
</template>
<script>
import themeStore from "../../store/theme";
export default {
  name: "NotFound",
  methods: {
    defineTheme() {
      const theme = themeStore();
      return theme;
    },
  },
};
</script>
<style scoped>
section {
  height: calc(100vh - 130px);
}
</style>
