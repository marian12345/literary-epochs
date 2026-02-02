import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import EpochView from "../views/EpochView.vue";
import Impressum from "../views/Impressum.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/epoch/:epochname",
      name: "epoch",
      component: EpochView,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/impressum",
      name: "impressum",
      component: Impressum,
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

export default router;
