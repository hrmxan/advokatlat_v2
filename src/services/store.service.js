const USER_TOKEN = "token";
const PATH = "path";
const FULLNAME = "fullname";

const TokenService = {
  setUploadPath(path) {
    localStorage.setItem(PATH, path);
  },
  removeUploadPath() {
    localStorage.removeItem(PATH);
  },
  getUploadPath() {
    return localStorage.getItem(PATH);
  },
  setUserName(userName) {
    localStorage.setItem(FULLNAME, userName);
  },
  getUserName() {
    return localStorage.getItem(FULLNAME);
  },
  removeUserName() {
    localStorage.removeItem(FULLNAME);
  },
  setToken(token) {
    console.log("tokenni joylashga so'rov");
    localStorage.setItem(USER_TOKEN, token);
  },
  getToken() {
    return localStorage.getItem(USER_TOKEN);
  },
  removeToken() {
    localStorage.removeItem(USER_TOKEN);
  },
};

export { TokenService };
