const axios = require("axios");

const api = axios.create({
  baseURL: "https://portfolio-backend.paulophlp.now.sh/api/v1/articles"
});

export async function getArticles() {
  return api
  .get("", { })
  .then(res => res.data)
  .catch(err => err.response);
}