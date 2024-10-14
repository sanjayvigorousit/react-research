// adminSlice.js
import { createAsyncThunk } from '@reduxjs/toolkit';
import sportsService from "../services/sportsService";
import { toast } from 'react-toastify';


export const fetchInplayMatchList = createAsyncThunk(
    "match/fetchInplayMatchList",
    async (rejectWithValue) => {
        try {
            const response = await sportsService.fetchInplayMatchList();
            return response;
        } catch (error) {
            toast.error(error.response.data.message);
            return rejectWithValue(error.response.data.message);
        }
    }
);
export const getAllSeries = createAsyncThunk(
    "match/getAllSeries",
    async (reqData, { rejectWithValue }) => {
        try {
            const response = await sportsService.getAllSeries(reqData);
            return response;
        } catch (error) {
            toast.error(error.response.data.message);
            return rejectWithValue(error.response.data.message);
        }
    }
);
export const getAllMarket = createAsyncThunk(
    "match/getAllMarket",
    async (reqData, { rejectWithValue }) => {
        try {
            const response = await sportsService.getAllMarket(reqData);
            return response;
        } catch (error) {
            toast.error(error.response.data.message);
            return rejectWithValue(error.response.data.message);
        }
    }
);
export const getAllMatch = createAsyncThunk(
    "match/getAllMatch",
    async (reqData, { rejectWithValue }) => {
        try {
            const response = await sportsService.getAllMatch(reqData);
            return response;
        } catch (error) {
            toast.error(error.response.data.message);
            return rejectWithValue(error.response.data.message);
        }
    }
);
export const getAllFancy = createAsyncThunk(
    "match/getAllFancy",
    async (reqData, { rejectWithValue }) => {
        try {
            const response = await sportsService.getAllFancy(reqData);
            return response;
        } catch (error) {
            toast.error(error.response.data.message);
            return rejectWithValue(error.response.data.message);
        }
    }
);

export const updateSeries = createAsyncThunk(
    "auth/updateSeries",
    async (reqData, { rejectWithValue }) => {
        try {
            const updateResponse = await sportsService.updateSeries(reqData);

            if (updateResponse) {
                const seriesListResponse = await sportsService.getAllSeries(reqData.sportId);
                return seriesListResponse;
            }
            toast.error("Series update failed");
            return rejectWithValue("Series update failed");
        } catch (error) {
            toast.error(error.response?.data?.message || 'An error occurred');
            return rejectWithValue(error.response?.data?.message || 'An error occurred');
        }
    }
);

export const getFancyBetList = createAsyncThunk(
    "match/getFancyBetList",
    async (reqData, { rejectWithValue }) => {
        try {
            const response = await sportsService.getFancyBetList(reqData);
            return response;
        } catch (error) {
            toast.error(error.response.data.message);
            return rejectWithValue(error.response.data.message);
        }
    }
);
export const getOddsBetList = createAsyncThunk(
    "match/getOddsBetList",
    async (reqData, { rejectWithValue }) => {
        try {
            const response = await sportsService.getOddsBetList(reqData);
            return response;
        } catch (error) {
            toast.error(error.response.data.message);
            return rejectWithValue(error.response.data.message);
        }
    }
);
export const fetchBetList = createAsyncThunk(
    "match/fetchBetList",
    async (reqData, { rejectWithValue }) => {
        try {
            const response = await sportsService.fetchBetList(reqData);
            return response;
        } catch (error) {
            toast.error(error.response.data.message);
            return rejectWithValue(error.response.data.message);
        }
    }
);
export const getSessionPostion = createAsyncThunk(
    "match/getSessionPostion",
    async (reqData, { rejectWithValue }) => {
        try {
            const response = await sportsService.getSessionPostion(reqData);
            return response;
        } catch (error) {
            toast.error(error.response.data.message);
            return rejectWithValue(error.response.data.message);
        }
    }
);




