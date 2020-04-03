import http from "./httpService";
import { apiUrl } from "../config/config.json";

const apiEndpoint1 = apiUrl + "/sites/getCategories";
const apiEndpoint2 = apiUrl + "/sites/getScripts";
const apiEndpoint3 = apiUrl + "/user/getCartItems";
const apiEndpoint4 = apiUrl + "/sites/createWebsite";
const apiEndpoint5 = apiUrl + "/sites/deleteWebsite";

export function getCategories() {
  return http.get(apiEndpoint1);
}

export function getSites() {
  return http.get(apiEndpoint2);
}

export function getSitesByUser() {
  return http.get(apiEndpoint3);
}

export function createWebsite(subdomain, script) {
  return http.put(apiEndpoint4, { subdomain, script });
}

export function deleteWebsite(data) {
  return http.delete(apiEndpoint5, { data });
}
