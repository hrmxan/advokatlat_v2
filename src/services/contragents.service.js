import ApiService from "./api.service";


//contragent/list?search=&typeId=&isArchive=false&regionId=
export default {
  contragents(search = "", typeId = "", isArchive = false, regionId = "", data) {
    return ApiService.post(`contragent/list?search=${search}&typeId=${typeId}&isArchive=${isArchive}&regionId=${regionId}`, data);
  }
}

// https://api-lawyer.adliya.uz/api/v.1/contragent/list?search=&typeId=&isArchive=false&regionId=
// https://api-lawyer.adliya.uz/api/v.1/contragent/list?search=&typeId=&isArchive=false&regionId=