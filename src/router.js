import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      meta: { layout: "no-sidebar" },
      component: require("@/views/Home.vue").default // load sync home
    },
    {
      path: "/about",
      name: "about",
      component: () => import("@/views/About.vue")
    }
  ]
});
