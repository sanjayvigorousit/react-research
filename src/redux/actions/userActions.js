
import { createAsyncThunk } from '@reduxjs/toolkit';
import userService from "../services/userService";
import { toast } from 'react-toastify';

export const getUserList = createAsyncThunk(
    "match/getUserList",
    async (reqData, { rejectWithValue }) => {
        try {
            const response = await userService.getUserList(reqData);
            return response;
        } catch (error) {
            toast.error(error.response.data.message);
            return rejectWithValue(error.response.data.message);
        }
    }
);
export const userCreate = createAsyncThunk(
    "auth/userCreate",
    async ({ reqData, reqUserList }, { rejectWithValue }) => {
        try {
            const createResponse = await userService.userCreate(reqData);

            if (createResponse) {
                const userListResponse = await userService.getUserList(reqUserList);
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
    "auth/createCustomer",
    async ({ reqData, reqUserList }, { rejectWithValue }) => {
        try {
            const createResponse = await userService.createCustomer(reqData);

            if (createResponse) {
                const userListResponse = await userService.getUserList(reqUserList);
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
    "auth/updateUserStatus",
    async ({ reqData, reqUserList }, { rejectWithValue }) => {
        try {
            const createResponse = await userService.updateUser(reqData);

            if (createResponse) {
                const userListResponse = await userService.getUserList(reqUserList);
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
    "auth/updateUserStatus",
    async ({ userData, reqUserList }, { rejectWithValue }) => {
        try {
            const updateResponse = await userService.updateUserStatus(userData);

            if (updateResponse) {
                const userListResponse = await userService.getUserList(reqUserList);
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




