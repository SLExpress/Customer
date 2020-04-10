/*  N. R Yamasinghe  IT18233704 version - 01 */
import http from "./httpService";
import { apiUrl } from "../config/config.json";

const apiEndpoint = apiUrl + "/payment/preparePayment";
const apiEndpoint2 = apiUrl + "/payment/getPaymentStatus";
const apiEndpoint3 = apiUrl + "/user/getPurchaseHistory";
const apiEndpoint4 = apiUrl + "/payment/addPayment";
const apiEndpoint5 = apiUrl + "/payment/getPayment";
const apiEndpoint6 = apiUrl + "/payment/deletePayment";
const apiEndpoint7 = apiUrl + "/payment/updatePayment";

export function getPayment(orderId) {
  return http.post(apiEndpoint, { orderId });
}

export function getPaymentStatus(orderId) {
  return http.post(apiEndpoint2, { orderId });
}

export function getPurchaseHistory() {
  return http.get(apiEndpoint3);
}

export function addPaymentDetails(cardNumber, cardName, cvv, expiry) {
  return http.put(apiEndpoint4, { cardNumber, cardName, cvv, expiry });
}

export function getPaymentDetails() {
  return http.get(apiEndpoint5);
}

export function deletePaymentDetails() {
  return http.delete(apiEndpoint6);
}

export function updatePaymentDetails(cardNumber, cardName, cvv, expiry) {
  return http.patch(apiEndpoint7, { cardNumber, cardName, cvv, expiry });
}
