// import actions
// import { ADD_TODO , TOGGLE_TODO } from "../actions/todoActions";

import { createSlice } from "@reduxjs/toolkit"

// add initial state
const initialState = {
    todos:[]
}

//  todo slice & reducer using redux toolkit
const todoSlice = createSlice({
    name:"todo",
    initialState:initialState,
    reducers : {
        add : (state , action) => {  // this is add action
            state.todos.push({
                text : action.payload,
                completed : false
            })  
        },

        toggle : (state , action) => {
            state.todos.map((todo , i) =>{
                if(i===action.payload){
                    todo.completed = !todo.completed
                }
                return todo;
            })
        }

    }
})

export const todoReducer=todoSlice.reducer;

export const actions = todoSlice.actions;

export const todoSelector = (state)=> state.todoReducer.todos;









// //add reducers using redux
// export function todoReducer(state = initialState , action){
//     switch(action.type){
//         case ADD_TODO:
//             return {
//                 ...state,
//                 todos:[
//                     ...state.todos,
//                     {
//                         text:action.text,
//                         completed:false
//                     }
//                 ]
//             }
//         case TOGGLE_TODO:
//             return {
//                 ...state,
//                 todos: state.todos.map((todo , i ) => {
//                     if(i===action.index){
//                         todo.completed  = !todo.completed;
//                     }
//                     return todo;
//                 })
//             }
//         default:
//             return state;
//     }
// }

