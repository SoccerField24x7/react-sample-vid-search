import axios from 'axios';

const KEY = 'AIzaSyDONyAyuz4_QNafou2z1f5lu7BBUlh_HDk';

export default axios.create({
	baseURL: 'https://www.googleapis.com/youtube/v3',
	params: {
		part: 'snippet',
		maxResults: 5,
		key: KEY
	}
});