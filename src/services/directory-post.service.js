import ApiService from "./api.service";
const main = "https://api.e-advokat.uz/api/v.1/directory-post";

export default {
  getList() {
    return ApiService.get(`${main}/list`);
  },
  getById(id) {
    return ApiService.get(`${main}/get-by-id/${id}`);
  },
  create(data) {
    return ApiService.post(`${main}/create`, data);
  },
  update(data) {
    return ApiService.post(`${main}/update`, data);
  },
  delete(id) {
    return ApiService.delete(`${main}/delete/${id}`);
  },
};
