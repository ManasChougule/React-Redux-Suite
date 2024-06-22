import { createSlice } from "@reduxjs/toolkit";

// add initial state
const initialState = {
    total_capacity : 25,
    seats_left:25,
    records:[]
}

const cmtSlice = createSlice({
    name:"cmt",
    initialState : initialState,
    reducers : {
        unshift : (state , action) => {
            state.records.unshift(action.payload.arr2);
            state.seats_left -= action.payload.value
        },

        delete : (state , action) =>{
            if(state.records[action.payload][5]=="Click to Checkout"){
                state.seats_left+= Number(state.records[action.payload][0]);
            }
            state.records.splice(action.payload,1);
        },

        status : (state, action) =>{
            if(state.records[action.payload][5]=="Click to Checkout"){
                state.records[action.payload][5]="Served";
                const now = new Date();
                const timeString = now.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true });
                state.records[action.payload][4]=timeString;
                state.seats_left+= Number(state.records[action.payload][0]);
            }
        }

    }
})


export const cmtReducer=cmtSlice.reducer;

export const actions = cmtSlice.actions;

export const cmtSelector = (state) => state.cmtReducer;