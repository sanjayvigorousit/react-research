import { createSlice } from '@reduxjs/toolkit';
import { createCustomMatch, getMatchList } from "../actions/customMatchActions";

const customMatchSlice = createSlice({
    name: 'customMatch',
    initialState: {
        customMatchList: [],
        totalCount: 0,
        loading: false,
        offset: 0,
        fieldsMatch: {},
        fieldsError: {},
        keyWord: "",
        pageNo: 1,
        size: 10,
        updateModal: false,
        viewMatchModal: false,
        addMatchModal: false,
        updateMatchModal: false,
        totalMatchCount: 0,
        totalOddsCount: 0,
        totalFancyCount: 0,
    },
    reducers: {
        setFieldsMatch: (state, action) => {
            state.fieldsMatch = action.payload;
        },
        setFieldsError: (state, action) => {
            state.fieldsError = action.payload;
        },
        setViewMatchModal: (state) => {
            state.viewMatchModal = !state.viewMatchModal;
        },
        setAddMatchModal: (state) => {
            state.addMatchModal = !state.addMatchModal;
        },
        setUpdateMatchModal: (state) => {
            state.updateMatchModal = !state.updateMatchModal;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(createCustomMatch.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(createCustomMatch.fulfilled, (state, action) => {
                state.fancyBetList = action.payload.data.fancyBetData;
                state.loading = false;
            })
            .addCase(createCustomMatch.rejected, (state, action) => {
                state.loading = false;
            })
            .addCase(getMatchList.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(getMatchList.fulfilled, (state, action) => {
                state.customMatchList = action.payload.data;
                state.totalMatchCount = action.payload.data.total;
                state.loading = false;
            })
            .addCase(getMatchList.rejected, (state, action) => {
                state.loading = true;
            });
    },
});
export const {
    setSize,
    setOffset,
    setPageNo,
    setFieldsMatch,
    setFieldsError,
    setAddMatchModal,
    setViewMatchModal,
    setUpdateMatchModal
} = customMatchSlice.actions;

export default customMatchSlice.reducer;
