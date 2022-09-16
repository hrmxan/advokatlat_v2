import ApiService from "./api.service";
const api2 = process.env.VUE_APP_ROOT_API2;

// http://localhost:8282/api/v.1/candidateDocument/get-by-candidateId/28
export default {
  getDataUser() {
    return ApiService.get(`${api2}/currentLawyerCandidate`);
  },
  getByCandidateId(id) {
    return ApiService.get(
      `${api2}/v.1/candidateDocument/get-by-candidateId/${id}`
    );
  },
  // /v.1/region/list-uzb-region
  regions() {
    return ApiService.get(`${api2}/v.1/region/list-uzb-region`);
  },
  directoryList(data) {
    return ApiService.post(`${api2}/v.1/directoryDocType/list`, data);
  },
  // /v.1/directoryLicenseType/list
  licenseTypes() {
    let data = {
      limit: 50,
      page: 0,
    };
    return ApiService.post(`${api2}/v.1/directoryLicenseType/list`, data);
  },
  // http://localhost:8282/api/v.1/candidateDocument/edit/98
  sendUpdate(lawyerId, data) {
    console.log(data);
    let formdata = new FormData();
    for (const id in data) {
      if (id == "licenceTypeId" || id == "regionId") {
        formdata.append(id, data[id]);
      } else {
        formdata.append(`multipartFile`, data[id]);
        formdata.append(`docTypeIds`, id);
      }
    }
    return ApiService.formData(
      `${api2}/v.1/candidateDocument/createCandidateDoc/${lawyerId}`,
      formdata
    );
  },
  sendDocs(lawyerId, data) {
    console.log(data);
    let formdata = new FormData();
    for (const id in data) {
      if (id == "licenceTypeId" || id == "regionId") {
        formdata.append(id, data[id]);
      } else {
        formdata.append(`multipartFile`, data[id]);
        formdata.append(`docTypeIds`, id);
      }
    }
    return ApiService.formData(
      `${api2}/v.1/candidateDocument/createCandidateDoc/${lawyerId}`,
      formdata
    );
  },
};
