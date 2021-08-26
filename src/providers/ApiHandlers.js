const axios = require('axios');

const api = axios.create({
	baseURL:
		'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@itspaulolimahimself',
});

export async function getArticles() {
	return api
		.get('', {})
		.then((res) => res.data)
		.catch((err) => err.response);
}
