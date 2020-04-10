/*  N. R Yamasinghe  IT18233704 version - 01 */
import http from "./httpService";
import { apiUrl } from "../config/config.json";

const apiEndpoint = apiUrl + "/user/sign-up";
const apiEndpoint2 = apiUrl + "/account/resendConfirmationEmail";

// Registering new user
export function register(user) {
  return http.put(apiEndpoint, {
    firstname: user.firstname,
    lastname: user.lastname,
    username: user.username,
    email: user.email1,
    password: user.password1,
    phone: user.contactNo,
    type: user.userType,
  });
}

// Resend Confirmation Email
export function resendConfirmationEmail(email, userType) {
  return http.post(apiEndpoint2, { email, userType });
}
