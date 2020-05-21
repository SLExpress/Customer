/*  N. R Yamasinghe  IT18233704 version - 01 */
import http from "./httpService";
import { apiUrl } from "../config/config.json";

const apiEndpoint1 = apiUrl + "/user/getQuestions";
const apiEndpoint2 = apiUrl + "/user/submitForBusinessModel";
const apiEndpoint3 = apiUrl + "/user/submitQuestion";

// get all the business model questions
export function getBusinessQuestions() {
  return http.get(apiEndpoint1);
}

// submit answers for the questions
export function submitBusinessModel(questions) {
  return http.put(apiEndpoint2, questions);
}

// suggest new questions and answers
export function submitQuestion(title, total, answers) {
  return http.put(apiEndpoint3, {
    title,
    total,
    answers,
  });
}
