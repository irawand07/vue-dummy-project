import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: "/",
      name: "login",
      meta: { layout: "login" },
      component: require("@/views/Login.vue").default // load sync home
    },
    {
      path: "/login",
      name: "login",
      meta: { layout: "login" },
      component: require("@/views/Login.vue").default // load sync home
    },
    {
      path: "/home",
      name: "home",
      component: () => import("@/views/Home.vue")
    },
    {
      path: "/about",
      name: "about",
      component: () => import("@/views/About.vue")
    }
  ]
});
