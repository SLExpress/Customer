import http from "./httpService";
import { apiUrl } from "../config/config.json";

const apiEndpoint1 = apiUrl + "/tickets/getTickets";
const apiEndpoint2 = apiUrl + "/tickets/getTicket";
const apiEndpoint3 = apiUrl + "/tickets/userReply";
const apiEndpoint4 = apiUrl + "/tickets/submitTicket";

export function getTickets() {
  return http.get(apiEndpoint1);
}

export function viewInquiries(ticketid) {
  const id = { ticketId: ticketid };
  return http.post(apiEndpoint2, id);
}

export function replyTickets(r) {
  console.log("ticketid", r.message, r._id);
  const data = {
    reply: r.message,
    ticketId: r._id,
  };
  return http.put(apiEndpoint3, data);
}

export function submitTicket(title, ticketText) {
  return http.put(apiEndpoint4, { title, ticketText });
}
