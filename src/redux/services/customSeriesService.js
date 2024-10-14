
import { axiosFormInstance, axiosInstance } from "./serverApi";

const customSeriesService = {

    getAllCustomSeries: async () => {
        const response = await axiosInstance.post("centerPanel/getAllCustomSeries");
        return response.data;
    },
    createCustomSeries: async (reqData) => {
        const response = await axiosInstance.post("centerPanel/createCustomSeries", reqData);
        return response.data;
    },
    updateCustomSeries: async (reqData) => {
        const response = await axiosInstance.post("centerPanel/updateCustomSeries", reqData);
        return response.data;
    },
    updateCustomSeriesStatus: async (reqData) => {
        const response = await axiosInstance.post("centerPanel/updateCustomSeriesStatus", reqData);
        return response.data;
    },
    fetchCompletedMatchList: async (reqData) => {
        const response = await axiosInstance.post("decision/completeSportList", reqData);
        return response.data;
    },
    getSeriesBySportId: async (reqData) => {
        const response = await axiosInstance.post("centerPanel/getSeriesBySportId", reqData);
        return response.data;
    },
    getAllMatchBySeriesId: async (seriesId) => {
        const response = await axiosInstance.get(`centerPanel/getAllMatch?series_id=${seriesId}`);
        return response.data;
    },
    getSeriesList: async (reqData) => {
        const response = await axiosInstance.post("centerPanel/getSeriesList", reqData);
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
    getCustomMatch: async (data) => {
        const response = await axiosInstance.post(`public/getMatchesBySportId?sportId=${data}`);
        return response.data;
    },
};

export default customSeriesService;

