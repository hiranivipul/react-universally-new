import axios from "axios";

const token = "token";
export default axios.create({
  baseURL: `http://180.211.104.102/photo-postcard/api/`,
  headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },

  transformRequest: [function(data, headers) {
    console.log("transformRequest");
    return data;
  }],

  transformResponse: [function(data) {
    return JSON.parse(data);
  }]
});
