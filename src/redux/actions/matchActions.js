// adminSlice.js
import { createAsyncThunk } from '@reduxjs/toolkit';
import matchService from "../services/matchService";
import { toast } from 'react-toastify';


export const fetchInplayMatchList = createAsyncThunk(
    "match/fetchInplayMatchList",
    async (rejectWithValue) => {
        try {
            const response = await matchService.fetchInplayMatchList();
            return response;
        } catch (error) {
            toast.error(error.response.data.message);
            return rejectWithValue(error.response.data.message);
        }
    }
);
export const fetchCompletedMatchList = createAsyncThunk(
    "match/fetchCompletedMatchList",
    async (reqData, { rejectWithValue }) => {
        try {
            const response = await matchService.fetchCompletedMatchList(reqData);
            return response;
        } catch (error) {
            toast.error(error.response.data.message);
            return rejectWithValue(error.response.data.message);
        }
    }
);
export const getFancyBetList = createAsyncThunk(
    "match/getFancyBetList",
    async (reqData, { rejectWithValue }) => {
        try {
            const response = await matchService.getFancyBetList(reqData);
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
            const response = await matchService.getOddsBetList(reqData);
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
            const response = await matchService.fetchBetList(reqData);
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
            const response = await matchService.getSessionPostion(reqData);
            return response;
        } catch (error) {
            toast.error(error.response.data.message);
            return rejectWithValue(error.response.data.message);
        }
    }
);




