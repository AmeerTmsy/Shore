import axios from "axios";

// 🔹 Create Axios Instance
const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
});

// 🔹 Request Interceptor (Attach Token)
API.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => Promise.reject(error)
);

// 🔹 Response Interceptor (Global Error Handling)
API.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      switch (error.response.status) {
        case 401:
          console.log("Unauthorized - maybe redirect to login");
          break;
        case 500:
          console.log("Server error");
          break;
        default:
          console.log("Something went wrong");
      }
    }
    return Promise.reject(error);
  }
);

// 🔹 Common API Handler
const apiHandler = async ({ method = "get", url, data = null, params = {}, headers = {}}) => {
  console.log(data)
  try {
    const response = await API({ method, url, data, params, headers });
    return {
      success: true,
      data: response.data,
    };
  } catch (error) {
    return {
      success: false,
      message: error.response?.data?.message || "Something went wrong",
      status: error.response?.status,
    };
  }
};

// 🔹 Optional: Service Layer (Example)
// export const jobAPI = {
//   getAll: () => apiHandler({ method: "get", url: "/jobs" }),
//   getById: (id) => apiHandler({ method: "get", url: `/jobs/${id}` }),
//   create: (data) => apiHandler({ method: "post", url: "/jobs", data }),
//   update: (id, data) => apiHandler({ method: "put", url: `/jobs/${id}`, data }),
//   delete: (id) => apiHandler({ method: "delete", url: `/jobs/${id}` }),
// };

// 🔹 Export handler if needed directly
export default apiHandler;