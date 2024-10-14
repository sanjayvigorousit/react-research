// adminSlice.js
import { createAsyncThunk } from '@reduxjs/toolkit';
import customSeriesService from "../services/customSeriesService";
import { toast } from 'react-toastify';

export const getAllCustomSeries = createAsyncThunk(
    "match/getAllCustomSeries",
    async (rejectWithValue) => {
        try {
            const response = await customSeriesService.getAllCustomSeries();
            return response;
        } catch (error) {
            toast.error(error.response.data.message);
            return rejectWithValue(error.response.data.message);
        }
    }
);
export const getSeriesList = createAsyncThunk(
    "match/getSeriesList",
    async (reqData, { rejectWithValue }) => {
        try {
            const response = await customSeriesService.getSeriesList(reqData);
            return response;
        } catch (error) {
            toast.error(error.response.data.message);
            return rejectWithValue(error.response.data.message);
        }
    }
);
export const getSeriesBySportId = createAsyncThunk(
    "match/getSeriesBySportId",
    async (reqData, { rejectWithValue }) => {
        try {
            const response = await customSeriesService.getSeriesBySportId(reqData);
            return response;
        } catch (error) {
            toast.error(error.response.data.message);
            return rejectWithValue(error.response.data.message);
        }
    }
);
export const getAllMatchBySeriesId = createAsyncThunk(
    "match/getAllMatchBySeriesId",
    async (seriesId, { rejectWithValue }) => {
        try {
            const response = await customSeriesService.getAllMatchBySeriesId(seriesId);
            return response;
        } catch (error) {
            toast.error(error.response.data.message);
            return rejectWithValue(error.response.data.message);
        }
    }
);
export const createCustomSeries = createAsyncThunk(
    "auth/updateCustomSeriesStatus",
    async ({ reqData, reqSeriesList }, { rejectWithValue }) => {
        try {
            const createResponse = await customSeriesService.createCustomSeries(reqData);

            if (createResponse) {
                const seriesListResponse = await customSeriesService.getSeriesList(reqSeriesList);
                return seriesListResponse;
            }
            toast.error("User update failed");
            return rejectWithValue("User update failed");
        } catch (error) {
            toast.error(error.response?.data?.message || 'An error occurred');
            return rejectWithValue(error.response?.data?.message || 'An error occurred');
        }
    }
);
export const updateCustomSeries = createAsyncThunk(
    "auth/updateCustomSeriesStatus",
    async ({ reqData, reqSeriesList }, { rejectWithValue }) => {
        try {
            const createResponse = await customSeriesService.updateCustomSeries(reqData);

            if (createResponse) {
                const seriesListResponse = await customSeriesService.getSeriesList(reqSeriesList);
                return seriesListResponse;
            }
            toast.error("User update failed");
            return rejectWithValue("User update failed");
        } catch (error) {
            toast.error(error.response?.data?.message || 'An error occurred');
            return rejectWithValue(error.response?.data?.message || 'An error occurred');
        }
    }
);
export const updateCustomSeriesStatus = createAsyncThunk(
    "auth/updateCustomSeriesStatus",
    async ({ userData, reqSeriesList }, { rejectWithValue }) => {
        try {
            const updateResponse = await customSeriesService.updateCustomSeriesStatus(userData);

            if (updateResponse) {
                const seriesListResponse = await customSeriesService.getSeriesList(reqSeriesList);
                return seriesListResponse;
            }
            toast.error("User update failed");
            return rejectWithValue("User update failed");
        } catch (error) {
            toast.error(error.response?.data?.message || 'An error occurred');
            return rejectWithValue(error.response?.data?.message || 'An error occurred');
        }
    }
);




