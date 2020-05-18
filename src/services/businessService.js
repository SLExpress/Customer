/*  N. R Yamasinghe  IT18233704 version - 01 */
import http from "./httpService";
import { apiUrl } from "../config/config.json";

const apiEndpoint1 = apiUrl + "/user/getQuestions";
const apiEndpoint2 = apiUrl + "/user/submitBusinessModel";
const apiEndpoint3 = apiUrl + "/user/submitQuestion";

export function getBusinessQuestions() {
  return http.get(apiEndpoint1);
}

export function submitBusinessModel(questions) {
  return http.put(apiEndpoint2, { questions });
}

export function submitQuestion(title, total, answers) {
  return http.put(apiEndpoint3, {
    title,
    total,
    answers,
  });
}
