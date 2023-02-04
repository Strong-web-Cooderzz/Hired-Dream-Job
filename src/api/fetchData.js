import axios from "axios";

export default axios.create({
	baseURL: 'https://hired-dream-job-server.vercel.app'
	// baseURL: 'http://localhost:5000'
})
