/*  N. R Yamasinghe  IT18233704 version - 01 */
import http from "./httpService";
import { apiUrl } from "../config/config.json";

const apiEndpoint1 = apiUrl + "/tickets/getTickets";
const apiEndpoint2 = apiUrl + "/tickets/getTicket";
const apiEndpoint3 = apiUrl + "/tickets/userReply";
const apiEndpoint4 = apiUrl + "/tickets/submitTicket";
const apiEndpoint5 = apiUrl + "/tickets/closeTicket";

// get all the tickets
export function getTickets() {
  return http.get(apiEndpoint1);
}

// view inquries of a particular ticket
export function viewInquiries(ticketid) {
  const id = { ticketId: ticketid };
  return http.post(apiEndpoint2, id);
}

// reply to particular ticket
export function replyTickets(msg, id) {
  const data = { reply: msg, ticketId: id };
  return http.put(apiEndpoint3, data);
}

// open a new ticket
export function submitTicket(title, ticketText) {
  return http.put(apiEndpoint4, { title, ticketText });
}

// close a ticket
export function closeTicket(ticketId) {
  return http.post(apiEndpoint5, { ticketId });
}
