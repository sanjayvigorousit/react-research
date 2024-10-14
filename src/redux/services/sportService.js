
import { axiosFormInstance, axiosInstance } from "./serverApi";

const sportService = {

    getSeriesList: async (reqData) => {
        const response = await axiosInstance.post("centerPanel/getSeriesList", reqData);
        return response.data;
    },
    getMatchList: async (reqData) => {
        const response = await axiosInstance.post("centerPanel/getSportsMatchList", reqData);
        return response.data;
    },
    matchListByDatabase: async (reqData) => {
        // const response = await axiosInstance.post("centerPanel/matchListByDatabase", reqData);
        const response = await fetch("/matchListResponse.json");
        return response;
    },
    matchDetails: async (reqData) => {
        const response = await axiosInstance.post("centerPanel/matchListByDatabase", reqData);
        return response.data;
    },
    updateMatch: async (reqData) => {
        const response = await axiosInstance.post("centerPanel/updateSportByEventId", reqData);
        return response.data;
    },
    uploadFile: async (formData) => {
        const response = await axiosFormInstance.post("centerPanel/website/fileUpload", formData);
        // const response = await axiosFormInstance.post("website/fileUpload", formData);
        return response.data;
    }
};

export default sportService;

