import axiosClient from "./axiosClient";
const usersApi = {
  getAll: () => {
    const url = "/users";
    return axiosClient.get(url);
  },
  getDetails: (id) => {
    const url = `/users/${id}`;
    return axiosClient.get(url);
  },
  registerUser: (data) => {
    const url = "/users";
    return axiosClient.post(url, data);
  },
};

export default usersApi;
