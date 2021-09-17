import axiosClient from "./axiosClient";

const subCommentsApi = {
  getAll: (params) => {
    const url = `/sub_comments`;
    return axiosClient.get(url, { params });
  },
  postComment: (data) => {
    const url = `/sub_comments`;
    return axiosClient.post(url, data);
  },
};

export default subCommentsApi;
