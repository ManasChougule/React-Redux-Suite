import { createSlice } from "@reduxjs/toolkit";

// add initial state
const initialState = {
    score : 0,
    wicket:0,
    hit: null,
    ballWiseRes : []
}

const scoreKeeperSlice = createSlice({
    name:"cmt",
    initialState : initialState,
    reducers : {
        setHitStatus : (state , action) => {
            if(action.payload==-1){
                state.hit = 'Out'
            }else{
                state.hit = action.payload
            }
        },


        addScore : (state, action) =>{
            state.score += action.payload
        },

        addWicket : (state, action) =>{
            state.wicket += 1
        },

        addStatus : (state, action) =>{
            state.ballWiseRes.unshift({
                hit: action.payload.hit === 0 ? "." : action.payload.hit,
                commentary: action.payload.commentary
            });
            state.hit = null;
        },

    }
})


export const scoreKeeperReducer=scoreKeeperSlice.reducer;

export const actions = scoreKeeperSlice.actions;

export const scoreKeeperSelector = (state) => state.scoreKeeperReducer;