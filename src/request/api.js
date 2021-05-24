import { request } from "./request";

export const API = {
  getStudentsInfo() {
    return request({
      method: "get",
      url: "/studentsInfo",
    });
  },
  getStudentDetail(id) {
    return request({
      method: "get",
      url: `/studentsInfo/${id}`,
    });
  },
};
