/*  N. R Yamasinghe  IT18233704 version - 01 */
import http from "./httpService";
import { apiUrl } from "../config/config.json";

const apiEndpoint1 = apiUrl + "/tickets/getTickets";
const apiEndpoint2 = apiUrl + "/tickets/getTicket";
const apiEndpoint3 = apiUrl + "/tickets/userReply";
const apiEndpoint4 = apiUrl + "/tickets/submitTicket";
const apiEndpoint5 = apiUrl + "/tickets/closeTicket";

export function getTickets() {
  return http.get(apiEndpoint1);
}

export function viewInquiries(ticketid) {
  const id = { ticketId: ticketid };
  return http.post(apiEndpoint2, id);
}

export function replyTickets(msg, id) {
  const data = { reply: msg, ticketId: id };
  return http.put(apiEndpoint3, data);
}

export function submitTicket(title, ticketText) {
  return http.put(apiEndpoint4, { title, ticketText });
}

export function closeTicket(ticketId) {
  return http.post(apiEndpoint5, { ticketId });
}
