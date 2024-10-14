
import { axiosFormInstance, axiosInstance } from "./serverApi";

const matchService = {

    fetchInplayMatchList: async () => {
        const response = await axiosInstance.post("sports/matchList");
        return response.data;
    },
    fetchCompletedMatchList: async (reqData) => {
        const response = await axiosInstance.post("decision/completeSportList", reqData);
        return response.data;
    },
    getFancyBetList: async (reqData) => {
        const response = await axiosInstance.post("sports/betsList", reqData);
        return response.data;
    },
    getOddsBetList: async (reqData) => {
        const response = await axiosInstance.post("sports/betsList", reqData);
        return response.data;
    },
    fetchBetList: async (reqData) => {
        const response = await axiosInstance.post("sports/betsList", reqData);
        return response.data;
    },
    getSessionPostion: async (reqData) => {
        const response = await axiosInstance.post("sports/getSessionPositionBySelectionId", reqData);
        return response.data;
    },
};

export default matchService;

