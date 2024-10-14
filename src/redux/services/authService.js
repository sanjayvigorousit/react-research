
import axios from "axios";
import { API_URL } from "../../utils/config";
import { axiosFormInstance, axiosInstance } from "./serverApi";

const authService = {
    // login: async (loginDetails) => {
    //     const response = await axiosInstance.post("centerPanel/userLogin", { ...loginDetails });
    //     // const response = await axiosInstance.post("user/login", { ...loginDetails });
    //     return response.data;
    // },
    login: async (loginDetails) => {
        const response = await fetch("/loginResponse.json");
        const data = await response.json();
        return data;
    },
    logout: async () => {
        const response = await axiosInstance.post("/logout");
        return response.data;
    },
    editUser: async (userData) => {
        const response = await axiosInstance.post("user/userupdate", userData);
        return response.data;
    },
    fetchUserList: async (userData) => {
        const response = await axiosInstance.post("user/userList", userData);
        return response.data;
    },
    deleteUser: async (userId) => {
        const response = await axiosInstance.delete(`/api/users/${userId}`);
        return response.data;
    },
};

export default authService;

