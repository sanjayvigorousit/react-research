
import { createAsyncThunk } from '@reduxjs/toolkit';
import domainService from "../services/domainService";
import { toast } from 'react-toastify';

export const getDomainList = createAsyncThunk(
    "domain/getDomainList",
    async (reqData, { rejectWithValue }) => {
        try {
            const response = await domainService.getDomainList(reqData);
            return response;
        } catch (error) {
            toast.error(error.response.data.message);
            return rejectWithValue(error.response.data.message);
        }
    }
);
export const userCreate = createAsyncThunk(
    "domain/userCreate",
    async ({ reqData, reqUserList }, { rejectWithValue }) => {
        try {
            const createResponse = await domainService.userCreate(reqData);

            if (createResponse) {
                const userListResponse = await domainService.getDomainList(reqUserList);
                return userListResponse;
            }
            toast.error("User update failed");
            return rejectWithValue("User update failed");
        } catch (error) {
            toast.error(error.response?.data?.message || 'An error occurred');
            return rejectWithValue(error.response?.data?.message || 'An error occurred');
        }
    }
);
export const createCustomer = createAsyncThunk(
    "domain/createCustomer",
    async ({ reqData, reqUserList }, { rejectWithValue }) => {
        try {
            const createResponse = await domainService.createCustomer(reqData);

            if (createResponse) {
                const userListResponse = await domainService.getDomainList(reqUserList);
                return userListResponse;
            }
            toast.error("User update failed");
            return rejectWithValue("User update failed");
        } catch (error) {
            toast.error(error.response?.data?.message || 'An error occurred');
            return rejectWithValue(error.response?.data?.message || 'An error occurred');
        }
    }
);
export const updateUser = createAsyncThunk(
    "domain/updateUserStatus",
    async ({ reqData, reqUserList }, { rejectWithValue }) => {
        try {
            const createResponse = await domainService.updateUser(reqData);

            if (createResponse) {
                const userListResponse = await domainService.getDomainList(reqUserList);
                return userListResponse;
            }
            toast.error("User update failed");
            return rejectWithValue("User update failed");
        } catch (error) {
            toast.error(error.response?.data?.message || 'An error occurred');
            return rejectWithValue(error.response?.data?.message || 'An error occurred');
        }
    }
);
export const updateUserStatus = createAsyncThunk(
    "domain/updateUserStatus",
    async ({ userData, reqUserList }, { rejectWithValue }) => {
        try {
            const updateResponse = await domainService.updateUserStatus(userData);

            if (updateResponse) {
                const userListResponse = await domainService.getDomainList(reqUserList);
                return userListResponse;
            }
            return rejectWithValue("Domain update failed");
        } catch (error) {
            toast.error(error.response?.data?.message || 'An error occurred');
            return rejectWithValue(error.response?.data?.message || 'An error occurred');
        }
    }
);
export const deleteDomain = createAsyncThunk(
    "domain/deleteDomain",
    async ({ reqData, reqUserList }, { rejectWithValue }) => {

        console.log("reqDatareqDatareqDatareqData", reqData);

        try {
            const deleteResponse = await domainService.deleteDomain(reqData);
            if (deleteResponse) {
                const userListResponse = await domainService.getDomainList(reqUserList);
                return userListResponse;
            }
            return rejectWithValue("Domain delete failed");
        } catch (error) {
            toast.error(error.response?.data?.message || 'An error occurred');
            return rejectWithValue(error.response?.data?.message || 'An error occurred');
        }
    }
);




