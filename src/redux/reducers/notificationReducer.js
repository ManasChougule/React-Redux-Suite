import { createSlice } from "@reduxjs/toolkit"
import { actions } from "./todoReducer"
import { addTodo } from "./todoReducer"

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

    // extraReducers : (builder)=>{
    //     builder.addCase(actions.add , (state , action)=>{  // used builder to avoid hardcoding names 
    //         state.message = "Todo is created"
    //     })
    // }

    // extraReducers : {
    //     [actions.add] : (state ,action) => {  // key is action , value is reducer function
    //         state.message = "Todo is created"
    //     }
    // }

    extraReducers: (builder) => {
        builder.addCase(addTodo.fulfilled, (state, action) => {
            // Handle fulfilled state
            state.message = 'Todo created successfully';
          });
    }

    
})

export const notificationReducer = notificationSlice.reducer;

export const notificationSelector = (state) => state.notificationReducer.message;

export const resetNotificationAction = notificationSlice.actions.reset;