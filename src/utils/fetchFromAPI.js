// const http = require('https');
import axios from 'axios';
const BASE_URL = 'https://youtube-v31.p.rapidapi.com';//search*****
const options = { 
	// ebgdae
	params: {
	  maxResults: '50'
	},
	headers: {
	  'X-RapidAPI-Key': '89635439eemsh99c23ffe4454c6fp17458cjsnc73e4d849282',
	  'x-rapidapi-host': 'youtube-v31.p.rapidapi.com'
	}
  };
export const fetchFromAPI = async (url) => {
	const { data } = await axios.get(`${BASE_URL}/${url}`, options);
	return data;
}