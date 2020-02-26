const axios = require("axios");

const api = axios.create({
  baseURL: process.env.NODE_ENV === "development" ? "http://localhost:5000/api/v1/articles" : ""
});

export async function getArticles() {
  return api
  .get("", { })
  .then(res => res.data)
  .catch(err => err.response);
}