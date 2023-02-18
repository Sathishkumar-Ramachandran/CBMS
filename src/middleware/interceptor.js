import axios from "axios";
import {LocalStorageService} from "./LocalStorageService";

export const DoubleEngine = axios.create({
  baseURL: "http://localhost:3001/",
});

export const setAxiosDefauls = () => {
    DoubleEngine.interceptors.request.use(onRequestFulfilled, onRequestRejected);

    DoubleEngine.interceptors.response.use(onResponseFulfilled, onResponseRejected);
};

export const resetSession = () => {
  localStorage.remove("auth-token");
};

const onRequestFulfilled = (config) => {
  const localStorageService = LocalStorageService.getService();
  const token = localStorageService.getAccessToken("auth-token");
  if (token) {
    config.headers = {
      Authorization: "Bearer " + token,
      "Access-Control-Allow-Origin": "*",
    };
  } else {
    config.headers = {};
  }
  return Promise.resolve(config);
};

const onRequestRejected = (error) => {
  return Promise.reject(error);
};

const onResponseFulfilled = (config) => {
  return Promise.resolve(config);
};

const onResponseRejected = (error) => {
  return Promise.reject(error);
};
