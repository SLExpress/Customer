import http from "./httpService";
import { apiUrl } from "../config/config.json";

const apiEndpoint = apiUrl + "/payment/preparePayment";
const apiEndpoint2 = apiUrl + "/payment/getPaymentStatus";
const apiEndpoint3 = apiUrl + "/user/getPurchaseHistory";

export function getPayment(orderId) {
  return http.post(apiEndpoint, { orderId });
}

export function getPaymentStatus(orderId) {
  return http.post(apiEndpoint2, { orderId });
}

export function getPurchaseHistory() {
  return http.get(apiEndpoint3);
}
