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

// get all the categories
export function getCategories() {
  return http.get(apiEndpoint1);
}

// get all the templates
export function getSites() {
  return http.get(apiEndpoint2);
}

// get sites created by a single user
export function getSitesByUser() {
  return http.get(apiEndpoint3);
}

// create website
export function createWebsite(subdomain, script) {
  return http.put(apiEndpoint4, { subdomain, script });
}

// delete created website
export function deleteWebsite(data) {
  return http.delete(apiEndpoint5, { data });
}

// get all the domain information
export function getDomainList() {
  return http.get(apiEndpoint6);
}

// add custom domain
export function addCustomDomain(websiteId, customDomain) {
  return http.post(apiEndpoint7, { websiteId, customDomain });
}

// update custom domain
export function updateCustomDomain(customDomain, websiteId) {
  return http.patch(apiEndpoint8, { customDomain, websiteId });
}

// delete custom domain
export function deleteCustomDomain(data) {
  return http.delete(apiEndpoint9, { data });
}
