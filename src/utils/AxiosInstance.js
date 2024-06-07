import axios from 'axios'

const baseUrl = axios.create({
    baseUrl: "https://backend-mern-pi.vercel.app/",
    API_VERSION: "api/",
})

export default baseUrl