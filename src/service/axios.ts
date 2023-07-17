import axios from "axios";

export const axiosCall = (baseURL: string) =>
  axios.create({
    baseURL: baseURL,
  });

/* export const closedAPI = axios.create({
  baseURL: baseURL,
  headers: {
    Authorization: "Bearer " + TokenActions.get(),
  },
}); */
