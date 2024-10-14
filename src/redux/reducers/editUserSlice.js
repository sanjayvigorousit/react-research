import { createSlice } from '@reduxjs/toolkit';
import { getParentData, getUserData } from "../actions/editUserActions";

const initialState = {
    fieldsUser: {},
    fieldsError: {},
    shareType: "",
    userMetaDetails: {},
    parentDetails: {},
    parentPriority: null,
    childPriority: null,
    parentDropDownOpen: false,
    fieldsUpline: {},
    errorsUpline: {},
    uplineUserPriority: null,
    uplineUserList: {},
    isFetch: false,
    selectedDomain: [],
    domainList: {},
    status: 'idle',
    error: null
};

const editUserSlice = createSlice({
    name: 'createUser',
    initialState,
    reducers: {
        setFieldsUser: (state, action) => {
            state.fieldsUser = action.payload;
        },
        setFieldsError: (state, action) => {
            state.fieldsError = action.payload;
        },
        setFieldsUpline: (state, action) => {
            state.fieldsUpline = action.payload;
        },
        setErrorsUpline: (state, action) => {
            state.errorsUpline = action.payload;
        },
        setSelectedDomain: (state, action) => {
            state.selectedDomain = action.payload;
        },
        setShareType: (state, action) => {
            state.shareType = action.payload;
        },
        setUserMetaDetails: (state, action) => {
            state.userMetaDetails = action.payload.data;
        },
        setParentPriority: (state, action) => {
            state.parentPriority = action.payload;
        },
        setChildPriority: (state, action) => {
            state.childPriority = action.payload;
        },
        setParentDropDownOpen: (state, action) => {
            state.parentDropDownOpen = action.payload;
        },
        setUplineUserPriority: (state, action) => {
            state.uplineUserPriority = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getUserData.pending, (state) => {
                state.isFetch = true;
            })
            .addCase(getUserData.fulfilled, (state, action) => {
                state.fieldsUser = action.payload.data;
                state.isFetch = false;
            })
            .addCase(getUserData.rejected, (state, action) => {
                state.error = action.payload;
                state.isFetch = false;
            })
            .addCase(getParentData.pending, (state) => {
                state.isFetch = true;
            })
            .addCase(getParentData.fulfilled, (state, action) => {
                state.parentDetails = action.payload.data;
                state.isFetch = false;
            })
            .addCase(getParentData.rejected, (state, action) => {
                state.error = action.payload;
                state.isFetch = false;
            });
    }
});

export const {
    setFieldsUser,
    setFieldsError,
    setFieldsUpline,
    setErrorsUpline,
    setSelectedDomain,
    setShareType,
    setUserMetaDetails,
    setParentPriority,
    setChildPriority,
    setParentDropDownOpen,
    setUplineUserPriority
} = editUserSlice.actions;

export default editUserSlice.reducer;
