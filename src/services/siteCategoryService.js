/*  N. R Yamasinghe  IT18233704 version - 01 */
import http from "./httpService";
import { apiUrl } from "../config/config.json";

const apiEndpoint1 = apiUrl + "/sites/getCategories";
const apiEndpoint2 = apiUrl + "/sites/getScripts";
const apiEndpoint3 = apiUrl + "/user/getCartItems";
const apiEndpoint4 = apiUrl + "/sites/createWebsite";
const apiEndpoint5 = apiUrl + "/sites/deleteWebsite";
const apiEndpoint7 = apiUrl + "/sites/addCustomDomain";
const apiEndpoint8 = apiUrl + "/sites/updateCustomDomain";
const apiEndpoint9 = apiUrl + "/sites/deleteCustomDomain";
const apiEndpoint6 = apiUrl + "/user/getUserWebsites";

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

export function getDomainList() {
  return http.get(apiEndpoint6);
}

export function addCustomDomain(websiteId, customDomain) {
  return http.post(apiEndpoint7, { websiteId, customDomain });
}

export function updateCustomDomain(customDomain, websiteId) {
  return http.patch(apiEndpoint8, { customDomain, websiteId });
}

export function deleteCustomDomain(data) {
  return http.delete(apiEndpoint9, { data });
}
