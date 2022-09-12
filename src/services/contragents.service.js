import ApiService from "./api.service";
// const main = "lawyer";
// https://api-lawyer.adliya.uz/api/v.1/contragent/count-info?regionId=54

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
  countInfo() {
    return ApiService.post(`contragent/count-info`);
  },
  regions() {
    return ApiService.post(`directoryRegion/list`);
  },
};
