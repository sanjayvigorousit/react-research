// adminSlice.js
import { createAsyncThunk } from '@reduxjs/toolkit';
import sportService from "../services/sportService";
import { toast } from 'react-toastify';

export const getSeriesList = createAsyncThunk(
    "sport/getSeriesList",
    async (reqData, { rejectWithValue }) => {
        try {
            const response = await sportService.getSeriesList(reqData);
            return response;
        } catch (error) {
            toast.error(error.response.data.message);
            return rejectWithValue(error.response.data.message);
        }
    }
);
export const getMatchList = createAsyncThunk(
    "sport/getMatchList",
    async (reqData, { rejectWithValue }) => {
        try {
            const response = await sportService.getMatchList(reqData);
            return response;
        } catch (error) {
            toast.error(error.response.data.message);
            return rejectWithValue(error.response.data.message);
        }
    }
);
export const matchListByDatabase = createAsyncThunk(
    "sport/matchListByDatabase",
    async (reqData, { rejectWithValue }) => {
        try {
            const response = await sportService.matchListByDatabase(reqData);
            return response;
        } catch (error) {
            toast.error(error.response.data.message);
            return rejectWithValue(error.response.data.message);
        }
    }
);
export const matchDetails = createAsyncThunk(
    "sport/matchDetails",
    async (reqData, { rejectWithValue }) => {
        try {
            const response = await sportService.matchDetails(reqData);
            return response;
        } catch (error) {
            toast.error(error.response.data.message);
            return rejectWithValue(error.response.data.message);
        }
    }
);
export const updateMatch = createAsyncThunk(
    "sport/updateMatch",
    async (reqData, { rejectWithValue }) => {
        try {
            const response = await sportService.updateMatch(reqData);
            toast.success(response.message);
            return response;
        } catch (error) {
            toast.error(error.response.data.message);
            return rejectWithValue(error.response.data.message);
        }
    }
);

export const uploadFile = createAsyncThunk(
    'file/upload',
    async (formData, { rejectWithValue }) => {
        try {
            const response = await sportService.uploadFile(formData);
            toast.success(response.message);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);




