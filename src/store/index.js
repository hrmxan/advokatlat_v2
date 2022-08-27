import Vue from "vue";
import Vuex from "vuex";

import contragents from "./contragents.module";
import news from "./news.module";

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
  },
});

export default store;
