import userService from "@/services/user.service";
// import TokenService from "@/services/store.service.js";
import ApiService from "@/services/api.service";
import login from "@/services/login.service";
import router from "@/router";

const state = {
  userData: {},
  isLoading: false,
  directoryList: [],
  candidate: {},
  regions: [],
  licence: [],
};

const getters = {};

const mutations = {
  setUserData(state, userData) {
    state.userData = userData;
  },
  setDirects(state, directoryList) {
    state.directoryList = directoryList;
  },
  candidate(state, candidate) {
    state.candidate = candidate;
  },
  setRegions(state, regions) {
    state.regions = regions;
  },
  setLicences(state, licence) {
    state.licence = licence;
  },
  setLoading(state, isLoading) {
    state.isLoading = isLoading;
  },
};

const actions = {
  async getDataUser({ commit }) {
    let res;
    commit("setLoading", true);
    try {
      res = await userService.getDataUser();
      commit("setUserData", res.data);
    } finally {
      commit("setLoading", false);
    }
  },
  async getRegions({ commit }) {
    let res;
    commit("setLoading", true);
    try {
      res = await userService.regions();
      commit("setRegions", res.data);
    } finally {
      commit("setLoading", false);
    }
  },
  async licenseTypes({ commit }) {
    let res;
    commit("setLoading", true);
    try {
      res = await userService.licenseTypes();
      commit("setLicences", res.data?.list);
    } finally {
      commit("setLoading", false);
    }
  },
  async getByCandidateId({ commit }, id) {
    let res;
    try {
      res = await userService.getByCandidateId(id);
      console.log(res);
      commit("candidate", res.data);
    } catch (e) {
      console.log(e);
    }
  },
  async directoryList({ commit }, data) {
    let res;
    commit("setLoading", true);
    try {
      res = await userService.directoryList(data);
      commit("setDirects", res.data.list);
    } finally {
      commit("setLoading", false);
    }
  },
  async tokenOneId({ commit }, data) {
    commit("setLoading", true);
    try {
      await login.loginRequestToOneId(data.code, data.state).then((res) => {
        if (res.data.token) {
          localStorage.setItem("token", res.data.token);
          ApiService.setHeader();
          router.push({ name: "Profile" });
        } else {
          router.push({ name: "Home" });
        }
      });
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
