import ApiService from "./api.service";
// const main = "lawyer";

export default {
  getListLawyers(data) {
    return ApiService.post(
      `lawyer/list?search=${data.querys.search}&status=${data.querys.status}&contragentId=${data.querys.contragentId}&regionId=${data.querys.regionId}`,
      data.data
    );
  },
  getListContragents(data) {
    return ApiService.post(
      `contragent/list?search=${data.search}&typeId=&isArchive=false&regionId=`,
      {
        page: data.page,
        limit: data.limit,
      }
    );
  },
};
