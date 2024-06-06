import axios from 'axios'

const baseUrl = axios.create({
    baseUrl: "https://impactmindz.in/client/artie/back_end/",
    API_VERSION: "api/",
})

export default baseUrl