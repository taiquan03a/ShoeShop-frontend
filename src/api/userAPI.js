import axiosClient from "./axiosClient";

const UserAPI = {
  SignUsername: (username) => {
    const url = "user";
    return axiosClient.post(url, {
      username : `${username}`,
    });
  },
  checkToken: (token) => {
    const url = "user/verify";
    return axiosClient.get(url, {
      headers: {
        tbtoken: token,
      },
    });
  },
};