
import { axiosFormInstance, axiosInstance } from "./serverApi";

const customMatchService = {
    createCustomMatch: async (reqData) => {
        const response = await axiosInstance.post("centerPanel/createCustomMatch", reqData);
        return response.data;
    },
    updateCustomMatchStatus: async (reqData) => {
        const response = await axiosInstance.post("centerPanel/updateCustomMatchStatus", reqData);
        return response.data;
    },
    getMatchList: async (reqData) => {
        const response = await axiosInstance.post("centerPanel/getSportsMatchList", reqData);
        return response.data;
    },
    saveSportsByEventId: async (reqData) => {
        const response = await axiosInstance.post("centerPanel/saveSportsByEventId", reqData);
        return response.data;
    },
};

export default customMatchService;

