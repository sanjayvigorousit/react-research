import { createSlice } from '@reduxjs/toolkit';
import { getSeriesList, getMatchList, matchListByDatabase, matchDetails, uploadFile } from "../actions/sportActions";

const sportSlice = createSlice({
    name: 'sport',
    initialState: {
        seriesList: [],
        matchList: [],
        inplayMatchList: [
            {
                "userName": "Amit",
                "merchantName": "Phone,Paytm,GooglePay",
                "paymentType": "Cash,Online",
                "amount": 1000,
                "date": "10-10-2024",
                "transactionType": "Purchase,Sale",
                "ledgerAmount": 1000,
                "offerAmount": 5,
                "items": 4,
                "productName": "Shirt"
            },
            {
                "userName": "Rahul",
                "merchantName": "Amazon,Paytm",
                "paymentType": "Online",
                "amount": 1500,
                "date": "09-10-2024",
                "transactionType": "Purchase",
                "ledgerAmount": 1500,
                "offerAmount": 10,
                "items": 2,
                "productName": "Laptop"
            },
            {
                "userName": "Sneha",
                "merchantName": "GooglePay,Phone",
                "paymentType": "Cash,Online",
                "amount": 500,
                "date": "08-10-2024",
                "transactionType": "Sale",
                "ledgerAmount": 500,
                "offerAmount": 2,
                "items": 1,
                "productName": "Book"
            },
            {
                "userName": "Vikram",
                "merchantName": "Paytm,Phone",
                "paymentType": "Online",
                "amount": 2000,
                "date": "07-10-2024",
                "transactionType": "Purchase",
                "ledgerAmount": 2000,
                "offerAmount": 15,
                "items": 3,
                "productName": "Shoes"
            },
            {
                "userName": "Priya",
                "merchantName": "GooglePay",
                "paymentType": "Cash",
                "amount": 1200,
                "date": "06-10-2024",
                "transactionType": "Sale",
                "ledgerAmount": 1200,
                "offerAmount": 8,
                "items": 5,
                "productName": "Dress"
            },
            {
                "userName": "Ankit",
                "merchantName": "Phone,GooglePay",
                "paymentType": "Cash,Online",
                "amount": 750,
                "date": "05-10-2024",
                "transactionType": "Purchase",
                "ledgerAmount": 750,
                "offerAmount": 7,
                "items": 2,
                "productName": "Headphones"
            },
            {
                "userName": "Divya",
                "merchantName": "Paytm,GooglePay",
                "paymentType": "Online",
                "amount": 300,
                "date": "04-10-2024",
                "transactionType": "Sale",
                "ledgerAmount": 300,
                "offerAmount": 3,
                "items": 1,
                "productName": "Pen"
            },
            {
                "userName": "Ravi",
                "merchantName": "Phone",
                "paymentType": "Cash",
                "amount": 1800,
                "date": "03-10-2024",
                "transactionType": "Purchase",
                "ledgerAmount": 1800,
                "offerAmount": 20,
                "items": 6,
                "productName": "Watch"
            },
            {
                "userName": "Kiran",
                "merchantName": "Amazon,Phone",
                "paymentType": "Cash,Online",
                "amount": 2200,
                "date": "02-10-2024",
                "transactionType": "Sale",
                "ledgerAmount": 2200,
                "offerAmount": 12,
                "items": 3,
                "productName": "Tablet"
            },
            {
                "userName": "Neha",
                "merchantName": "GooglePay,Paytm",
                "paymentType": "Online",
                "amount": 1300,
                "date": "01-10-2024",
                "transactionType": "Purchase",
                "ledgerAmount": 1300,
                "offerAmount": 6,
                "items": 4,
                "productName": "Bag"
            }
        ],
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
                // state.inplayMatchList = action.payload.data;
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
