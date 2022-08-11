import axios from "axios";
// import store from "../store/index";
// import bus from "../main";


let messageShow = true;

const ApiService = {
  init(baseURL) {
    axios.defaults.baseURL = baseURL;
  },
  removeHeader() {
    axios.defaults.headers.common = {};
  },
  get(resource, showMes = true) {
    messageShow = showMes;
    return axios.get(resource);
  },
  post(resource, data, showMes = true) {
    messageShow = showMes;
    return axios.post(resource, data);
  },

  mount401Interceptor() {
    axios.interceptors.response.use(
      (response) => {
        console.log("INTERSEPTOR ICHIDA RES", response);
        return response;
      },
      async (error) => {
        console.log("INTERSEPTOR ICHIDA ERROR", error.response.status);
        this.i++;
        if (this.i == 1 && messageShow) {
          console.log("INTERSEPTOR ICHIDA ERROR", error.response.status);
        }
        this.i = 0;
        throw error;
      },
    );
  },

  unmount401Interceptor() {
    // Eject the interceptor
    axios.interceptors.response.eject(this._40i1nterceptor);
  },
}


export default ApiService;