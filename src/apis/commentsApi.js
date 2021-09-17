import axiosClient from "./axiosClient";

const commentsApi = {
  getComments: (params) => {
    const url = `/comments`;
    return axiosClient.get(url, { params });
  },
  postComment: (data) => {
    const url = `/comments`;
    console.log(data);
    return axiosClient.post(url, data);
  },
};

export default commentsApi;
