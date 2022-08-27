import contragents from "@/services/contragents.service";

const state = {
  list: [],
  contList: {
    list: [],
  },
  page: 0,
  search: "",
  contId: "",
  isLoading: false,
};

const getters = {};

const mutations = {
  setList(state, list) {
    state.list = list;
  },
  setSearch(state, search) {
    state.search = search;
  },
  setConstId(state, contId) {
    state.contId = contId;
  },
  setPage(state, page) {
    state.page = page;
  },
  setContList(state, contList) {
    state.contList = contList;
  },
  setLoading(state, isLoading) {
    state.isLoading = isLoading;
  },
};

const actions = {
  async getListLawyers({ commit }, data) {
    commit("setLoading", true);
    let res;
    try {
      res = await contragents.getListLawyers(data);
      commit("setList", res.data);
    } finally {
      commit("setLoading", false);
    }
  },
  async getContragents({ commit }, data) {
    commit("setLoading", true);
    let res;
    try {
      res = await contragents.getListContragents(data);
      commit("setContList", res.data);
    } finally {
      commit("setLoading", false);
    }
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
  namespaced: true,
};