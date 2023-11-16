import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = { isRunning: false, elapsedTime: 0 };

const timerSlice = createSlice({
    name: "timer",
    initialState: INITIAL_STATE,
    reducers: {
        startTimer: (state, action) => {
            state.isRunning = true;
        },

        pauseTimer: (state, action) => {
            state.isRunning = false;
        },

        resetTimer: (state, action) => {
            state.isRunning = false;
            state.elapsedTime = 0;
        },

        incrementTimer: (state, action) => {
            state.elapsedTime++;
        },
    },
});


export const timerReducer = timerSlice.reducer;

export const actions = timerSlice.actions;

export const timerSelector = (state) => state.timerReducer;