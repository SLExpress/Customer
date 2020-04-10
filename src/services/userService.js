/*  N. R Yamasinghe  IT18233704 version - 01 */
import http from "./httpService";
import { apiUrl } from "../config/config.json";

const apiEndpoint1 = apiUrl + "/user/getUser";
const apiEndpoint2 = apiUrl + "/user/deleteUser";
const apiEndpoint3 = apiUrl + "/user/updateUser";
const apiEndpoint4 = apiUrl + "/user/updatePassword";

export function deleteCustomer() {
  return http.delete(apiEndpoint2);
}

export function getCustomer() {
  return http.get(apiEndpoint1);
}

export function updateCustomer(
  id,
  firstname,
  lastname,
  username,
  email,
  phone
) {
  return http.patch(apiEndpoint3, {
    id,
    firstname,
    lastname,
    username,
    email,
    phone,
  });
}

export function updatePassword(password) {
  return http.patch(apiEndpoint4, {
    password,
  });
}
