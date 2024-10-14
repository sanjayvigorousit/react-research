import { createSlice } from '@reduxjs/toolkit';
import { getUserList } from "../actions/userActions";

const userSlice = createSlice({
    name: 'user',
    initialState: {
        userList: [],
        fieldsUser: {},
        fieldsError: {},
        loading: false,
        updateModal: false,
        updateUserModal: false,
        addUserModal: false,
        viewUserModal: false,
        totalUserCount: 0,
    },
    reducers: {
        setFieldsUser: (state, action) => {
            state.fieldsUser = action.payload;
        },
        setFieldsError: (state, action) => {
            state.fieldsError = action.payload;
        },
        setViewUserModal: (state) => {
            state.viewUserModal = !state.viewUserModal;
        },
        setAddUserModal: (state) => {
            state.addUserModal = !state.addUserModal;
        },
        setUpdateUserModal: (state) => {
            state.updateUserModal = !state.updateUserModal;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getUserList.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(getUserList.fulfilled, (state, action) => {
                state.userList = action.payload.data;
                state.totalUserCount = action.payload.data.total;
                state.loading = false;
            })
            .addCase(getUserList.rejected, (state, action) => {
                state.loading = true;
            });
    },
});
export const {
    // setSize,
    // setOffset,
    // setPageNo,
    setFieldsUser,
    setFieldsError,
    setAddUserModal,
    setViewUserModal,
    setUpdateUserModal,
} = userSlice.actions;
export default userSlice.reducer;
