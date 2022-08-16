import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import AOS from "aos";
import i18n from "@/core/i18n/i18n";
import axios from "axios";
import VueAxios from "vue-axios";
import toast from "vue-toastification";
import myToast from "./core/toas.options";

// css
import "@/assets/scss/index.scss";
import "aos/dist/aos.css";
import "vue-toastification/dist/index.css";
import "./assets/css/input.css";

Vue.config.productionTip = false;
Vue.use(
  AOS.init({
    once: true,
  })
);
Vue.use(VueAxios, axios);
Vue.use(toast, {
  transition: "Vue-Toastification__bounce",
  maxToasts: 30,
  newestOnTop: true,
});
Vue.use(myToast);

import ApiService from "./services/api.service";
ApiService.init(process.env.VUE_APP_ROOT_API);

export const bus = new Vue();

new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App),
}).$mount("#app");
