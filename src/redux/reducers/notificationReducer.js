import { createSlice } from "@reduxjs/toolkit"
import { actions } from "./todoReducer"


const initialState = {
    message : ""
}

const notificationSlice = createSlice({
    name : "notification" ,
    initialState ,
    reducers : {
        reset : (state , action) => {
            state.message = "";
        }
    },
    // extraReducers : {
    //     "todo/add" : (state , action) => {
    //         state.message = "Todo is created"
    //     }
    // }
    extraReducers : (builder)=>{
        builder.addCase(actions.add , (state , action)=>{  // used builder to avoid hardcoding names 
            state.message = "Todo is created"
        })
    }
})

export const notificationReducer = notificationSlice.reducer;

export const notificationSelector = (state) => state.notificationReducer.message;

export const resetNotificationAction = notificationSlice.actions.reset;