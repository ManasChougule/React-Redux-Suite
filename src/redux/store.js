// import * as redux from "redux";
// import { combineReducers } from "redux";

import { configureStore , getDefaultMiddleware } from "@reduxjs/toolkit";
import { todoReducer } from "./reducers/todoReducer";
import { noteReducer } from "./reducers/noteReducer";
import { notificationReducer } from "./reducers/notificationReducer";
import { timerReducer } from "./reducers/timerReducer";
import { counterReducer } from "./reducers/counterReducer";
import { cmtReducer } from "./reducers/cmtReducer";
import { loggerMiddleware } from "./middlewares/loggerMiddleware";

// const result = combineReducers({
//     todoReducer,
//     noteReducer
// })
// export const store = redux.createStore(result);

export const store = configureStore({
    reducer : {
        todoReducer ,
        noteReducer ,
        notificationReducer  ,
        timerReducer ,
        counterReducer ,
        cmtReducer
    } ,

    middleware : [ ...getDefaultMiddleware() ,loggerMiddleware]
})

