import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Blog from "../views/Blog.vue";
import Contact from "../views/Contact.vue";
import CV from "../views/CV.vue";
import Portfolio from "../views/Portfolio.vue";
import Service from "../views/Service.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
  ],
});

export default router;
