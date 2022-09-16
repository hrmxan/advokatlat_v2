import Vue from "vue";
import Vuex from "vuex";

import contragents from "./contragents.module";
import news from "./news.module";
import user from "./user.module";

// import { TokenService } from "@/services/store.service";

import ApiService from "@/services/api.service";
ApiService.setHeader();

Vue.use(Vuex);

// contragent/list?search=&typeId=&isArchive=false&regionId=

const store = new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    news,
    contragents,
    user,
  },
});

export default store;
