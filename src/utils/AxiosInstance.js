import axios from 'axios'

const axiosInstance = axios.create({
    // baseURL: "https://backend-mern-pi.vercel.app/",
    baseURL: "http://localhost:8000",
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer YOUR_TOKEN_HERE'
    }
})

export default axiosInstance