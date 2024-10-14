import { createSlice } from '@reduxjs/toolkit';
import { getSeriesBySportId, getSeriesList, getAllCustomSeries, fetchBetList } from "../actions/customSeriesActions";

const customSeriesSlice = createSlice({
    name: 'customSeries',
    initialState: {
        seriesList: [],
        totalCount: 0,
        offset: 0,
        fieldsSeries: {},
        fieldsError: {},
        loading: false,
        keyWord: "",
        pageNo: 1,
        size: 10,
        updateModal: false,
        rollBackModal: false,
        updateSeriesModal: false,
        addSeriesModal: false,
        viewSeriesModal: false,
        matchListModal: false,
        totalSeriesCount: 0,
    },
    reducers: {
        setFieldsSeries: (state, action) => {
            state.fieldsSeries = action.payload;
        },
        setFieldsError: (state, action) => {
            state.fieldsError = action.payload;
        },
        setViewSeriesModal: (state) => {
            state.viewSeriesModal = !state.viewSeriesModal;
        },
        setAddSeriesModal: (state) => {
            state.addSeriesModal = !state.addSeriesModal;
        },
        setUpdateSeriesModal: (state) => {
            state.updateSeriesModal = !state.updateSeriesModal;
        },
        setMatchListModal: (state) => {
            state.matchListModal = !state.matchListModal;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getSeriesBySportId.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(getSeriesBySportId.fulfilled, (state, action) => {
                state.seriesList = action.payload.data;
                state.loading = false;
            })
            .addCase(getSeriesBySportId.rejected, (state, action) => {
                state.loading = false;
            })
            .addCase(getSeriesList.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(getSeriesList.fulfilled, (state, action) => {
                state.seriesList = action.payload.data;
                state.totalSeriesCount = action.payload.data.total;
                state.loading = false;
            })
            .addCase(getSeriesList.rejected, (state, action) => {
                state.loading = true;
            })
            .addCase(getAllCustomSeries.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(getAllCustomSeries.fulfilled, (state, action) => {
                state.seriesList = action.payload.data;
                state.loading = false;
            })
            .addCase(getAllCustomSeries.rejected, (state, action) => {
                state.loading = true;
            });
    },
});
export const {
    // setSize,
    // setOffset,
    // setPageNo,
    setFieldsSeries,
    setFieldsError,
    setAddSeriesModal,
    setViewSeriesModal,
    setUpdateSeriesModal,
    setMatchListModal
} = customSeriesSlice.actions;
export default customSeriesSlice.reducer;
