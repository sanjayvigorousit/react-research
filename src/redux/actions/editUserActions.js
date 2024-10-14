import { createAsyncThunk } from '@reduxjs/toolkit';
import editUserService from "../services/editUserService";
import { toast } from 'react-toastify';

export const getUserData = createAsyncThunk(
    "auth/getUserData",
    async (userData, { rejectWithValue }) => {
        try {
            const userResponse = await editUserService.getUserData(userData);
            if (userResponse) {
                console.log("userResponseuserResponse", userResponse);

                const parentResponse = await editUserService.getParentData(userData);
                return parentResponse;
            }
        } catch (error) {
            toast.error(error.response.data.message);
            return rejectWithValue(error.response.data.message);
        }
    }
);
export const getParentData = createAsyncThunk(
    "auth/getParentData",
    async (userData, { rejectWithValue }) => {
        try {
            console.log("testttttttttttttttttttttt");
            const response = await editUserService.getParentData(userData);
            return response;
        } catch (error) {
            toast.error(error.response.data.message);
            return rejectWithValue(error.response.data.message);
        }
    }
);
export const createNewUser = createAsyncThunk(
    "auth/createNewUser",
    async (userData, { rejectWithValue }) => {
        try {
            console.log("testttttttttttttttttttttt");

            const response = await editUserService.createNewUser(userData);
            // console.log("responseresponseresponseresponse", response);
            // toast.success("User list fetch successfully");
            return response;
        } catch (error) {
            toast.error(error.response.data.message);
            return rejectWithValue(error.response.data.message);
        }
    }
);




