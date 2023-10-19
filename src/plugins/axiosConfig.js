import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://fcs-03-01-library-backend-sgvb3cnbwa-uc.a.run.app",
});

export default axiosInstance;
