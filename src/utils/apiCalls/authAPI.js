import apiHandler from "../api";

export const authAPI = {
  signin: (data) => apiHandler({ method: "post", url: "/auth/signin", data }),
  login: (data) => apiHandler({ method: "post", url: "/auth/login", data}),
  logout: () => apiHandler({ method: "post", url: "/auth/logout" }),
};