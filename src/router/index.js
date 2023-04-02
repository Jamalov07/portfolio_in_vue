import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Pages/HomePage.vue";
import Blog from "../views/Pages/BlogPage.vue";
import Contact from "../views/Pages/ContactPage.vue";
import CV from "../views/CV.vue";
import Portfolio from "../views/Pages/PortfolioPage.vue";
import Service from "../views/Service.vue";
import AllCategories from "../views/Categories/AllCategories.vue";
import Backend from "../views/Categories/Backend.vue";
import Frontend from "../views/Categories/Frontend.vue";
import HistoryPage from "../views/Pages/HistoryPage.vue";
import NotFound from "../views/Pages/NotFound.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/history",
      name: "history",
      component: HistoryPage,
    },
    {
      path: "/blog",
      name: "blog",
      component: Blog,
    },
    {
      path: "/contact",
      name: "contact",
      component: Contact,
    },
    {
      path: "/portfolio",
      name: "portfolio",
      component: Portfolio,
      redirect: "/portfolio/all",
      children: [
        {
          path: "/portfolio/all",
          name: "all",
          component: AllCategories,
        },
        {
          path: "/portfolio/backend",
          name: "backend",
          component: Backend,
        },
        {
          path: "/portfolio/frontend",
          name: "frontend",
          component: Frontend,
        },
      ],
    },
    {
      path: "/:pathMatch(.*)*",
      component: NotFound,
    },
  ],
});

export default router;
