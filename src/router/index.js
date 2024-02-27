import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "@/views/About.vue";
import Create from "@/views/Create.vue";
import Games from "@/views/Games.vue";

import { auth } from "@/firebase/config.js";

const authControl = (to, from, next) => {
  let user = auth.currentUser;

  if (!user) {
    next({ name: "Home" });
  } else {
    next();
  }
};

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/about",
      name: "About",
      component: About,
    },
    {
      path: "/create",
      name: "Create",
      component: Create,
      beforeEnter: authControl,
    },
    {
      path: "/games",
      name: "Games",
      component: Games,
      beforeEnter: authControl,
    },
  ],
});

export default router;
