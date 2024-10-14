import { createSlice } from '@reduxjs/toolkit';
import { fetchInplayMatchList, fetchCompletedMatchList, getFancyBetList, getOddsBetList, getSessionPostion, fetchBetList } from "../actions/matchActions";

const matchSlice = createSlice({
    name: 'match',
    initialState: {
        inplayMatchList: [],
        completeSportList: [],
        fancyBetList: [],
        oddsBetList: [],
        getSessionPostionList: [],
        totalCount: 0,
        totalProfitComplete: 0,
        isFetch: false,
        offset: 0,
        fieldsUser: {},
        errorsUser: {},
        isFetch: false,
        keyWord: "",
        pageNo: 1,
        size: 10,
        oddBetList: {},
        filteredData: {},
        clientList: {},
        matchDetails: {},
        socketPerm: "",
        socketUrl: "",
        matchDetailsForSocket: {},
        cacheUrl: "",
        matchScoreDetails: {},
        positionData: {},
        selectedIds: [],
        updateModal: false,
        rollBackModal: false,
        teamDataList: {},
        fromDate: '',
        newDateValue: '',
        toDate: '',
        totalOddsCount: 0,
        totalFancyCount: 0,
    },
    reducers: '',
    extraReducers: (builder) => {
        builder
            .addCase(fetchInplayMatchList.pending, (state) => {
                state.isFetch = true;
            })
            .addCase(fetchInplayMatchList.fulfilled, (state, action) => {
                const filteredData = [...action.payload.data].sort(
                    (a, b) => a.priority - b.priority
                );
                state.inplayMatchList = filteredData;
                state.isFetch = false;
            })
            .addCase(fetchInplayMatchList.rejected, (state) => {
                state.isFetch = false;
            })
            .addCase(fetchCompletedMatchList.pending, (state) => {
                state.isFetch = true;
            })
            .addCase(fetchCompletedMatchList.fulfilled, (state, action) => {
                const completeSportList = Object.values(action.payload.data.matchData);
                state.completeSportList = completeSportList;
                state.totalCount = action.payload.totalCount;
                state.isFetch = false;

                if (completeSportList.length > 0) {
                    const profitArray = completeSportList.filter(item => item.totalProfit);
                    const totalProfitComplete = profitArray.reduce((acc, item) => acc + item.totalProfit, 0);
                    state.totalProfitComplete = totalProfitComplete;
                }
            })
            .addCase(fetchCompletedMatchList.rejected, (state) => {
                state.isFetch = false;
            })
            .addCase(getFancyBetList.pending, (state, action) => {
                state.isFetch = true;
            })
            .addCase(getFancyBetList.fulfilled, (state, action) => {
                state.fancyBetList = action.payload.data.fancyBetData;
                state.isFetch = false;
            })
            .addCase(getFancyBetList.rejected, (state, action) => {
                state.isFetch = false;
            })
            .addCase(getOddsBetList.pending, (state, action) => {
                state.isFetch = true;
            })
            .addCase(getOddsBetList.fulfilled, (state, action) => {
                state.oddsBetList = action.payload.data.oddsBetData;
                state.isFetch = false;
            })
            .addCase(getOddsBetList.rejected, (state, action) => {
                state.isFetch = true;
            })
            .addCase(fetchBetList.pending, (state, action) => {
                state.isFetch = true;
            })
            .addCase(fetchBetList.fulfilled, (state, action) => {
                state.oddsBetList = action.payload.data.oddsBetData;
                state.fancyBetList = action.payload.data.fancyBetData;
                state.totalOddsCount = action.payload.data.totalOddsCount;
                state.totalFancyCount = action.payload.data.totalFancyCount;
                state.isFetch = false;
            })
            .addCase(fetchBetList.rejected, (state, action) => {
                state.isFetch = true;
            })
            .addCase(getSessionPostion.pending, (state, action) => {
                state.isFetch = true;
            })
            .addCase(getSessionPostion.fulfilled, (state, action) => {
                state.getSessionPostionList = action.payload;
                state.isFetch = false;
            })
            .addCase(getSessionPostion.rejected, (state, action) => {
                state.isFetch = true;
            });
    },
});
export const { setFieldUser, setSize, setOffset, setPageNo } = matchSlice.actions;
export default matchSlice.reducer;
