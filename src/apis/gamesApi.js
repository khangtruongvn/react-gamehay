import axiosClient from "./axiosClient";

const gamesApi = {
  getAll: (params) => {
    const url = "/games";
    return axiosClient.get(url, { params });
  },
  getDetails: (id) => {
    const url = `/games/${id}`;
    return axiosClient.get(url);
  },
  postGame: (data) => {
    const url = "/games";
    return axiosClient.post(url, data);
  },
  editGame: (id, data) => {
    const url = `/games/${id}`;
    return axiosClient.patch(url, data);
  },
  removeGame: (id) => {
    const url = `/games/${id}`;
    return axiosClient.delete(url);
  },
};
export default gamesApi;
