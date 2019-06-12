import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import Default from "./layouts/Default.vue";
import NoSidebar from "./layouts/NoSidebarLayout.vue";
import Login from "./layouts/LoginLayout.vue";
var VueCookie = require('vue-cookie');

Vue.use(VueCookie)
Vue.component("default-layout", Default);
Vue.component("no-sidebar-layout", NoSidebar);
Vue.component("login-layout", Login);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
