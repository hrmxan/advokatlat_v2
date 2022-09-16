import ApiService from "./api.service";
export default {
  loginRequestToOneId(code, state) {
    return ApiService.get(
      `https://api.e-advokat.uz/api/redirectUri?code=${code}&state=${state}`
    );
  },
};
