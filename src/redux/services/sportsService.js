
import { axiosFormInstance, axiosInstance } from "./serverApi";

const sportsService = {

    getAllSeries: async (data) => {
        const response = await axiosInstance.get(`panel/getAllSeries?sportId=${data}`);
        return response.data;
    },
    getAllMatch: async (data) => {
        const response = await axiosInstance.get(`panel/getAllMatch?series_id=${data.seriesId}&game_id=${data.sportId}`);
        return response.data;
    },
    getAllMarket: async (data) => {
        const response = await axiosInstance.get(`panel/getAllMarket?matchId=${data}`);
        return response.data;
    },
    getAllFancy: async (data) => {
        const response = await axiosInstance.post(`panel/getAllFancy?matchId=${data}`);
        return response.data;
    },
    updateSeries: async (reqData) => {
        const response = await axiosInstance.post("panel/createSeries", reqData);
        return response.data;
    },
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

export default sportsService;

