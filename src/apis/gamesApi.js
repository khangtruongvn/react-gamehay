import axiosClient from "./axiosClient";

const gamesApi = {
  getAll: (params) => {
    const url = "/games";
    return axiosClient.get(url, {params});
  },
  getDetails: (id) => {
    const url = `/games/${id}`;
    return axiosClient.get(url);
  },
};
export default gamesApi;
