// authSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "../services/authService";
import { toast } from 'react-toastify';

// Async action creators
export const loginUser = createAsyncThunk(
    "auth/loginUser",
    async (loginDetails, { rejectWithValue }) => {
        try {
            const response = await authService.login(loginDetails);
            window.location.reload();
            toast.success(response.message);

            return response;
        } catch (error) {
            toast.error(error.response.data.message);
            return rejectWithValue(error.response.data.message);
        }
    }
);

export const logoutUser = createAsyncThunk(
    "auth/logoutUser",
    async (_, { rejectWithValue }) => {
        try {
            // await authService.logout();
            localStorage.clear();
            toast.success("Logout successful");
            window.location.reload();
            return true;
        } catch (error) {
            return rejectWithValue(error.response.data.message);
        }
    }
);

export const editUser = createAsyncThunk(
    "auth/editUser",
    async ({ userData, selectedUserType }, { rejectWithValue }) => {
        try {
            const response = await authService.editUser(userData, selectedUserType);
            toast.success("User edited successfully");
            return response;
        } catch (error) {
            toast.error(error.response.data.message);
            return rejectWithValue(error.response.data.message);
        }
    }
);

export const deleteUser = createAsyncThunk(
    "auth/deleteUser",
    async ({ userData, selectedUserType }, { rejectWithValue }) => {
        try {
            const response = await authService.deleteUser(userData, selectedUserType);
            toast.success("User deleted successfully");
            return response;
        } catch (error) {
            toast.error(error.response.data.message);
            return rejectWithValue(error.response.data.message);
        }
    }
);

export const socialMediaSignup = createAsyncThunk(
    'auth/socialMediaSignup',
    async (authData, { rejectWithValue }) => {
        try {
            const response = await authService.socialMediaSignup(authData);
            toast.success("User deleted successfully");
            return response;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);