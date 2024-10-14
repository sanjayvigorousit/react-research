// adminSlice.js
import { createAsyncThunk } from '@reduxjs/toolkit';
import customMatchService from "../services/customMatchService";
import { toast } from 'react-toastify';


export const getMatchList = createAsyncThunk(
    "match/getMatchList",
    async (reqData, { rejectWithValue }) => {
        try {
            const response = await customMatchService.getMatchList(reqData);
            return response;
        } catch (error) {
            toast.error(error.response.data.message);
            return rejectWithValue(error.response.data.message);
        }
    }
);

export const saveSportsByEventId = createAsyncThunk(
    "match/saveSportsByEventId",
    async (reqData, { rejectWithValue }) => {
        try {
            const response = await customMatchService.saveSportsByEventId(reqData);
            return response;
        } catch (error) {
            toast.error(error.response.data.message);
            return rejectWithValue(error.response.data.message);
        }
    }
);

export const createCustomMatch = createAsyncThunk(
    "auth/updateCustomMatchStatus",
    async ({ reqData, reqMatchList }, { rejectWithValue }) => {
        try {
            const createResponse = await customMatchService.updateCustomMatchStatus(reqData);

            if (createResponse) {
                const matchListResponse = await customMatchService.getMatchList(reqMatchList);
                return matchListResponse;
            }
            toast.error("User update failed");
            return rejectWithValue("User update failed");
        } catch (error) {
            toast.error(error.response?.data?.message || 'An error occurred');
            return rejectWithValue(error.response?.data?.message || 'An error occurred');
        }
    }
);

export const updateCustomMatchStatus = createAsyncThunk(
    "auth/updateCustomMatchStatus",
    async ({ userData, reqMatchList }, { rejectWithValue }) => {
        try {
            const updateResponse = await customMatchService.updateCustomMatchStatus(userData);

            if (updateResponse) {
                const matchListResponse = await customMatchService.getMatchList(reqMatchList);
                return matchListResponse;
            }
            toast.error("User update failed");
            return rejectWithValue("User update failed");
        } catch (error) {
            toast.error(error.response?.data?.message || 'An error occurred');
            return rejectWithValue(error.response?.data?.message || 'An error occurred');
        }
    }
);



