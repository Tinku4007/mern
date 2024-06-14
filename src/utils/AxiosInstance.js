import axios from 'axios';
import { getLocalStorage } from './LocalStorageUtills';

// Create an axios instance
const axiosInstance = axios.create({
    baseURL: "http://localhost:8000",
    headers: {
        'Content-Type': 'application/json'
    }
});

// Add a request interceptor to include the token in every request
axiosInstance.interceptors.request.use(
    config => {
        // Retrieve the user object from local storage
        const user = getLocalStorage('user');
        console.log('Retrieved user from localStorage:', user); // Debug: Print the user object

        // Check if the user object and token are valid
        if (user && user.token) {
            const token = user.token;
            console.log('Retrieved token:', token); // Debug: Print the token

            // Set the Authorization header
            config.headers['Authorization'] = `Bearer ${token}`;
            console.log('Authorization header set:', config.headers['Authorization']); // Debug: Print the header
        } else {
            console.warn('No valid token found in localStorage'); // Debug: Warn if no token found
        }
        return config;
    },
    error => {
        console.error('Error in request interceptor:', error); // Debug: Print any interceptor errors
        return Promise.reject(error);
    }
);

export default axiosInstance;
