import { createSlice } from '@reduxjs/toolkit';
import { getSeriesList, getMatchList, matchListByDatabase, matchDetails, uploadFile } from "../actions/sportActions";

const sportSlice = createSlice({
    name: 'sport',
    initialState: {
        seriesList: [],
        matchList: [],
        inplayMatchList: [],
        fieldsMatch: {},
        fieldsError: {},
        loading: false,
        uploadStatus: 'idle',
    },
    reducers: {
        setFieldsMatch: (state, action) => {
            state.fieldsMatch = action.payload;
        },
        setFieldsError: (state, action) => {
            state.fieldsError = action.payload;
        },
        setInplayMatchList: (state, action) => {
            state.inplayMatchList = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getSeriesList.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(getSeriesList.fulfilled, (state, action) => {
                state.seriesList = action.payload.data;
                state.loading = false;
            })
            .addCase(getSeriesList.rejected, (state, action) => {
                state.loading = true;
            })
            .addCase(getMatchList.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(getMatchList.fulfilled, (state, action) => {
                state.matchList = action.payload.data;
                state.loading = false;
            })
            .addCase(getMatchList.rejected, (state, action) => {
                state.loading = true;
            })
            .addCase(matchListByDatabase.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(matchListByDatabase.fulfilled, (state, action) => {
                state.inplayMatchList = action.payload.data;
                state.loading = false;
            })
            .addCase(matchListByDatabase.rejected, (state, action) => {
                state.loading = true;
            })
            .addCase(matchDetails.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(matchDetails.fulfilled, (state, action) => {
                state.fieldsMatch = action.payload.data;
                state.loading = false;
            })
            .addCase(matchDetails.rejected, (state, action) => {
                state.loading = true;
            })
            .addCase(uploadFile.pending, (state) => {
                state.uploadStatus = 'loading';
            })
            .addCase(uploadFile.fulfilled, (state, action) => {
                console.log("alldataalldataalldataalldata", action.payload);

                state.uploadStatus = 'succeeded';
                const { name, imageName, imgBaseUrl } = action.payload;
                state.fieldsMatch[name] = `${imgBaseUrl}/${imageName}`;
            })
            .addCase(uploadFile.rejected, (state, action) => {
                state.uploadStatus = 'failed';
                state.errorMessage = action.payload;
            });
    },
});
export const {
    setFieldsMatch,
    setFieldsError,
    setInplayMatchList
} = sportSlice.actions;
export default sportSlice.reducer;
