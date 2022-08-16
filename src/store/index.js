import Vue from "vue";
import Vuex from "vuex";

import contragents from "../services/contragents.service";
import news from "./news.module";

Vue.use(Vuex);

// contragent/list?search=&typeId=&isArchive=false&regionId=

const store = new Vuex.Store({
  state: {
    contragents: {},
  },
  getters: {},
  mutations: {
    setContragents(state, contragents) {
      state.contragents = contragents;
    },
  },
  actions: {
    async getContragentslist(
      { commit },
      search,
      typeId,
      isArchive,
      regionId,
      limit = 20
    ) {
      let res;
      let data = {
        page: 0,
        limit: limit,
      };
      try {
        res = await contragents.contragents(
          search,
          typeId,
          isArchive,
          regionId,
          data
        );
        commit("setContragents", res.data);
      } catch (e) {
        console.log(e);
      }
    },
  },
  modules: {
    news,
  },
});

export default store;
