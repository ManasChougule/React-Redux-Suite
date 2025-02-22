// import * as redux from "redux";
// import { combineReducers } from "redux";

import { configureStore , getDefaultMiddleware } from "@reduxjs/toolkit";
import { todoReducer } from "./reducers/todoReducer";
import { noteReducer } from "./reducers/noteReducer";
import { notificationReducer } from "./reducers/notificationReducer";
import { timerReducer } from "./reducers/timerReducer";
import { counterReducer } from "./reducers/counterReducer";
import { cmtReducer } from "./reducers/cmtReducer";
import { scoreKeeperReducer } from "./reducers/cricketScoreKeeperReducer";
import { blogsReducer } from "./reducers/blogsAppReducer";
import { shoppingCartReducer } from "./reducers/shoppingCartReducer";
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
        cmtReducer ,
        scoreKeeperReducer ,
        blogsReducer ,
        shoppingCartReducer
    } ,

    middleware :  (getDefaultMiddleware) => [...getDefaultMiddleware(), loggerMiddleware]
})

