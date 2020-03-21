import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import { store } from "@/store";

import Home from "../views/Home.vue";
import Hero from "../views/Hero.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/hero/:hero",
    name: "Hero",
    component: Hero,
    props: true
  },
  {
    path: "/",
    name: "Home",
    component: Home
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

router.beforeEach(route => {
  if (route.name !== "Home" && !store.state.player) {
    return {
      name: "Home"
    };
  }
});

export default router;
