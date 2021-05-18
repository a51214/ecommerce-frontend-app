import axios from "axios";
const axiosIns = axios.create({
  baseURL: "http://ecommerce-web-site-5.herokuapp.com/",
  responseType: "json",
  headers: { Accept: "application/json", "Content-Type": "application/json", "Access-Control-Allow-Origin": '*', "Access-Control-Allow-Credentials": true, 'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,OPTIONS' }
});
export default axiosIns;
