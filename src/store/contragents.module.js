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
  countInfo: "",
  regionId: "",
  regions: [],
};

const getters = {};

const mutations = {
  setList(state, list) {
    state.list = list;
  },
  setRegId(state, id) {
    state.regionId = id;
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
  setCountInfo(state, countInfo) {
    state.countInfo = countInfo;
  },
  regions(state, regions) {
    state.regions = regions[0]?.children;
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
  async getRegions({ commit }, data) {
    commit("setLoading", true);
    let res;
    try {
      res = await contragents.regions(data);
      commit("regions", res.data);
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
  async countInfo({ commit }) {
    commit("setLoading", true);
    let res;
    try {
      res = await contragents.countInfo();
      commit("setCountInfo", res.data);
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
