import axios from "axios";

const userApi = axios.create({
  baseURL: "https://api.mapbox.com/directions/v5/mapbox/driving",
});
userApi.interceptors.request.use(async (config) => {
  return {
    ...config,
    headers: {
      ...config.headers,
      access_token:
        "pk.eyJ1IjoiOTk0NDc4MTAwMyIsImEiOiJja3hpZzdybDAxZDlsMnBucDdpMnI3ejQxIn0.6iDU2BmtR6YAvIjDUcBPaA",
    },
  };
});

export default userApi;
