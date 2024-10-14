import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    navbarOpen: false,
    navWidth: true,
    showSection: "",
};

const componentSlice = createSlice({
    name: 'component',
    initialState,
    reducers: {
        toggleNavbar: (state) => {
            state.navbarOpen = !state.navbarOpen;
        },
        setNavWidth: (state, action) => {
            state.navWidth = action.payload;
        },
        setShowSection: (state, action) => {
            state.showSection = action.payload;
        },
    },
});

export const { toggleNavbar, setNavWidth, setShowSection } = componentSlice.actions;
export default componentSlice.reducer;
