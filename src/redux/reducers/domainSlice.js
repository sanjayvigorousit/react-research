import { createSlice } from '@reduxjs/toolkit';
import { getDomainList } from "../actions/domainActions";

const domainSlice = createSlice({
    name: 'domain',
    initialState: {
        domainList: [],
        fieldsUser: {},
        fieldsError: {},
        loading: false,
        updateModal: false,
        updateAsignDomainModal: false,
        asignDomainModal: false,
        viewAsignDomainModal: false,
        totalUserCount: 0,
    },
    reducers: {
        setFieldsUser: (state, action) => {
            state.fieldsUser = action.payload;
        },
        setFieldsError: (state, action) => {
            state.fieldsError = action.payload;
        },
        setViewAsignDomainModal: (state) => {
            state.viewAsignDomainModal = !state.viewAsignDomainModal;
        },
        setAsignDomainModal: (state) => {
            state.asignDomainModal = !state.asignDomainModal;
        },
        setUpdateAsignDomainModal: (state) => {
            state.updateAsignDomainModal = !state.updateAsignDomainModal;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getDomainList.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(getDomainList.fulfilled, (state, action) => {
                state.domainList = action.payload.data;
                state.totalUserCount = action.payload.data.total;
                state.loading = false;
            })
            .addCase(getDomainList.rejected, (state, action) => {
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
    setAsignDomainModal,
    setViewAsignDomainModal,
    setUpdateAsignDomainModal,
} = domainSlice.actions;
export default domainSlice.reducer;
