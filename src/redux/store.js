


import { todoReducer } from "./reducers/todoReducer";
const redux = require("redux");
export const store = redux.createStore(todoReducer);

