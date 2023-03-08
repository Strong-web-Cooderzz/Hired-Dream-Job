import axios from "axios";

export default axios.create({
	// baseURL: 'https://hired-dream-job-server.vercel.app'
	// baseURL: "http://localhost:5000",
	baseURL: "https://hdj-server.vercel.app"
	// baseURL: "https://hdj-server.onrender.com",
	// baseURL: 'https://hired-dream-job-server-sparmankhan.vercel.app'
});
