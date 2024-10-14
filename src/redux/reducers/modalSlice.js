import { createSlice } from '@reduxjs/toolkit';

const modalSlice = createSlice({
    name: 'modal',
    initialState: {
        isModalOpen: false,
        alertModal: false,
    },
    reducers: {
        openModal: (state) => {
            state.isModalOpen = true;
        },
        closeModal: (state) => {
            state.isModalOpen = false;
        },
        setAlertModal: (state, action) => {
            state.alertModal = action.payload;
        },
        handleModal: (state) => {
            state.isModalOpen = !state.isModalOpen;
        },
    },
});

export const { openModal, closeModal, setAlertModal, handleModal } = modalSlice.actions;
export default modalSlice.reducer;
