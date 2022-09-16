import directoryPost from "@/services/directory-post.service";

const state = {
  list: [],
  isLoading: false,
};

const getters = {};

const mutations = {
  setList(state, list) {
    state.list = list;
  },
  setLoading(state, isLoading) {
    state.isLoading = isLoading;
  },
};

const actions = {
  async getList({ commit }) {
    commit("setLoading", true);
    let res;
    try {
      res = await directoryPost.getList();
      commit("setList", res.data);
    } catch (e) {
      console.log("user module", e);
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
