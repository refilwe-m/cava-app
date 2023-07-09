import axios from "axios";
export const baseURL = "https://gnvynmgmkswaourfeaxn.supabase.co";

export const openAPI = axios.create({
  baseURL: baseURL,
});

/* export const closedAPI = axios.create({
  baseURL: baseURL,
  headers: {
    Authorization: "Bearer " + TokenActions.get(),
  },
}); */
