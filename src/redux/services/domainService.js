
import { axiosFormInstance, axiosInstance } from "./serverApi";

const domainService = {

    userCreate: async (reqData) => {
        const response = await axiosInstance.post("centerPanel/userCreate", reqData);
        return response.data;
    },
    createCustomer: async (reqData) => {
        const response = await axiosInstance.post("centerPanel/createCustomer", reqData);
        return response.data;
    },
    updateUser: async (reqData) => {
        const response = await axiosInstance.post("centerPanel/updateUser", reqData);
        return response.data;
    },
    updateUserStatus: async (reqData) => {
        const response = await axiosInstance.post("centerPanel/updateUserStatus", reqData);
        return response.data;
    },
    deleteDomain: async (reqData) => {
        const response = await axiosInstance.post("centerPanel/deleteDomainIp", reqData);
        return response.data;
    },
    getDomainList: async (reqData) => {
        const response = await axiosInstance.post("centerPanel/getDomainIpList", reqData);
        return response.data;
    }
};

export default domainService;

