import http from "./httpService";
import { apiUrl } from "../config/config.json";
import jwtDecode from "jwt-decode";

const apiEndpoint = apiUrl + "/user/sign-in";

// User Login
export async function login(email, password, type) {
  const { data } = await http.post(apiEndpoint, {
    email,
    password,
    type
  });

  localStorage.setItem("token", data.token);
  localStorage.setItem("username", data.username);
  localStorage.setItem("firstname", data.firstName);
  localStorage.setItem("lastname", data.lastName);
  localStorage.setItem("userid", data.userId);
}

// To Get Jwt
export function getJwt() {
  return localStorage.getItem("token");
}

//Fixing Bi Directional Dependancies
http.setJwt(getJwt());

// Get Current User
export function getCurrentUser() {
  try {
    const CurrentUser = localStorage.getItem("username");
    return CurrentUser;
  } catch (ex) {
    return null;
  }
}

// Get Current UserId
export function getUserId() {
  try {
    const UserId = localStorage.getItem("userid");
    return UserId;
  } catch (ex) {
    return null;
  }
}

// Get Current User FirstName
export function getCurrentUserFirstName() {
  try {
    const FirstName = localStorage.getItem("firstname");
    return FirstName;
  } catch (ex) {
    return null;
  }
}

// Get Current User LastName
export function getCurrentUserLastName() {
  try {
    const LastName = localStorage.getItem("lastname");
    return LastName;
  } catch (ex) {
    return null;
  }
}

//Get Current  User ID
export function getCurrentUserID() {
  try {
    const userID = localStorage.getItem("token");
    return jwtDecode(userID);
  } catch (ex) {
    return null;
  }
}

export function checkTokenExpiration() {
  const token = localStorage.getItem("token");
  const expiry = jwtDecode(token).exp;
  console.log(expiry);
  const now = new Date();
  console.log(now.getTime());

  if (now.getTime() >= expiry * 1000) {
    return true;
  }
  return false;
}

// User Logout
export function logout() {
  localStorage.removeItem("token");
  localStorage.removeItem("username");
  localStorage.removeItem("firstname");
  localStorage.removeItem("lastname");
  localStorage.removeItem("userid");
  localStorage.removeItem("filteredSites");
  localStorage.removeItem("singleSite");
  localStorage.removeItem("singleMySiteSettingsScript");
  localStorage.removeItem("singleSiteDeveloper");
  localStorage.removeItem("singleMySiteSettings");
  localStorage.removeItem("orderId");
  localStorage.removeItem("developerId");
  localStorage.removeItem("cart");
  localStorage.removeItem("siteCreatedTime");
  localStorage.removeItem("serverTime");
  localStorage.removeItem("unique");
  localStorage.removeItem("singleMySiteSettingsCreate");
  localStorage.removeItem("payment");
  localStorage.removeItem("paymentWebsite");
  localStorage.removeItem("paymentWebsiteUrl");

  // localStorage.removeItem("cart");
}

export default {
  login,
  logout,
  getCurrentUser,
  getCurrentUserID,
  getCurrentUserFirstName,
  getCurrentUserLastName,
  getUserId,
  checkTokenExpiration
};
