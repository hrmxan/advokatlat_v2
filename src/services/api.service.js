// import Vue from "vue";
// import toast from "vue-toastification";
import axios from "axios";
// import store from "../store/index";
// import bus from "../main";

// Vue.use(toast, {
//   transition: "Vue-Toastification__bounce",
//   maxToasts: 30,
//   newestOnTop: true,
// });

let messageShow = true;

// let options = {
//   position: "top-right",
//   timeout: 5000,
//   closeOnClick: true,
//   pauseOnFocusLoss: true,
//   pauseOnHover: true,
//   draggable: true,
//   draggablePercent: 0.6,
//   showCloseButtonOnHover: false,
//   hideProgressBar: false,
//   closeButton: "button",
//   icon: true,
//   rtl: false,
// };

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
        // console.log(toast.success("salom", options));

        return response;
      },
      async (error) => {
        if (messageShow) {
          throw error;
        }
        throw error;
      }
    );
  },

  unmount401Interceptor() {
    // Eject the interceptor
    axios.interceptors.response.eject(this._40i1nterceptor);
  },
};

export default ApiService;
