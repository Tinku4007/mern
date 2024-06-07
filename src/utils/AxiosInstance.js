import axios from 'axios'

const AxiosInstance = axios.create({
    // baseUrl: "https://backend-mern-pi.vercel.app/",
    baseUrl: "https://localhost:8000",
    // API_VERSION: "api/",
})

export default AxiosInstance