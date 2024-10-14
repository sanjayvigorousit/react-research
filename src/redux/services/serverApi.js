// api/serverApi.js
import axios from "axios";
import { API_URL } from "../../utils/config";

// Function to retrieve the token dynamically
const getToken = () => localStorage.getItem("token");

// Base configuration for axios instance
const createAxiosInstance = (contentType = "application/json") => {
    return axios.create({
        baseURL: API_URL,
        headers: {
            Authorization: getToken() ? `Bearer ${getToken()}` : "",
            'Content-Type': contentType,
        },
    });
};

// Create axios instances for normal and multipart form-data requests
const axiosInstance = createAxiosInstance(); // For JSON requests
const axiosFormInstance = createAxiosInstance('multipart/form-data'); // For file uploads

export { axiosInstance, axiosFormInstance };
