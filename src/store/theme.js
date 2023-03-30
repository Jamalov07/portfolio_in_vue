import { defineStore } from "pinia";

const themeStore = defineStore("theme", {
  state: () => {
    return { isLight:false };
  },
});

export default themeStore;
