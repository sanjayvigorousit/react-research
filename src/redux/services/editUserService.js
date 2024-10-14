import { axiosFormInstance, axiosInstance } from "./serverApi";

const editUserService = {

    // fetchUserLedger: async (reqData) => {
    //     const response = await axiosInstance.post("user/userLedger", reqData);
    //     return response.data;
    // },

    // fetchClientPlusMinus: async (reqData) => {
    //     const response = await axiosInstance.post("bluexchReports/clientPlusMinus", reqData);
    //     return response.data;
    // },

    getUserData: async (reqData) => {
        const response = await axiosInstance.post("user/userDetails", reqData);
        return response.data;
    },

    getParentData: async (reqData) => {
        const response = await axiosInstance.post("user/userDetails", reqData);
        return response.data;
    },
    createNewUser: async (reqData) => {
        const response = await axiosInstance.post("user/create1", reqData);
        return response.data;
    }
};

export default editUserService;

