import axios from "axios";
import logger from "./logService";
import { toast } from "react-toastify";

axios.defaults.headers.common["Content-Type"] = "application/json";

//Fixing Bi Directional Dependancies
export function setJwt(jwt) {
  axios.defaults.headers.common["Authorization"] = "Bearer " + jwt;
}

axios.interceptors.response.use(null, error => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;

  if (!expectedError) {
    logger.log(error);
    toast.error("An unexpected error occurrred.");
  }

  return Promise.reject(error);
});

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
  patch: axios.patch,
  setJwt
};

// axios({
//   url: "http://slexpress.tk:3000/sites/getCategories",
//   method: "get",
//   headers: {
//     "Content-Type": "application/json",
//     Authorization:
//       "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI1ZTFiMzc0ZTAxZmE1NTc4MDgwMjdhOTIiLCJ0eXBlIjoiY3VzdG9tZXIiLCJpYXQiOjE1NzkzMTk5MTgsImV4cCI6MTU3OTMyMzUxOH0.9quwn_VY58crhd3kHOS6Wox6uIeB3kH0j_5FXELbkjg"
//   }
// })
//   .then(response => console.log(response))
//   .catch(error => {
//     console.log(error);
//   });

// axios({
//   url: "http://slexpress.tk:3000/user/getUser",
//   method: "get",
//   headers: {
//     "Content-Type": "application/json",
//     Authorization:
//       "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI1ZTFiMzc0ZTAxZmE1NTc4MDgwMjdhOTIiLCJ0eXBlIjoiY3VzdG9tZXIiLCJpYXQiOjE1NzkzMTk5MTgsImV4cCI6MTU3OTMyMzUxOH0.9quwn_VY58crhd3kHOS6Wox6uIeB3kH0j_5FXELbkjg"
//   }
// })
//   .then(response => console.log(response))
//   .catch(error => {
//     console.log(error);
//   });
