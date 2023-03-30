import { defineStore } from "pinia";
import { ref } from "vue";

const themeStore = defineStore("theme", () => {
  let value = window.localStorage.getItem("theme");
  if (!value) {
    window.localStorage.setItem("theme", true);
    value = window.localStorage.getItem("theme");
  }
  const isLight = ref(value);
  return { isLight };
});

export default themeStore;
