// import actions
// import { ADD_TODO , TOGGLE_TODO } from "../actions/todoActions";

import { createSlice } from "@reduxjs/toolkit"
import axios from "axios"
import { createAsyncThunk } from "@reduxjs/toolkit";
// add initial state
const initialState = {
    todos:[]
}


export const getInitialState = createAsyncThunk("todo/getInitialState", 
//     async (_,thunkAPI)=>{
//     // async calls.
//     try{
//         const res = await axios.get("http://localhost:4100/api/todos");
//         thunkAPI.dispatch(actions.setInitialState(res.data)); // createAsyncThunk action is calling another action
//     }catch(err){
//         console.log(err);
//     }
//   }   
    () => {
        return  axios.get("http://localhost:4100/api/todos");
    }
)


export const addTodo = createAsyncThunk("todo/addTodo" , async(payload)=>{
    const response = await fetch("http://localhost:4100/api/todos", { // this adds new todo to backend & also returns new todo to display on front end
        method : "POST",
        headers : { "content-type" : "application/json" },
        body : JSON.stringify({text : payload, completed : false})
    });
    // console.log("*****",response.json());
    return  response.json();
});
  
  

//  todo slice & reducer using redux toolkit
const todoSlice = createSlice({
    name:"todo",
    initialState:initialState,
    reducers : {
        // setInitialState : (state , action) => {
        //     state.todos = [...action.payload];  // 
        // },

        // add : (state , action) => {  // this is add action
        //     state.todos.push({
        //         text : action.payload,
        //         completed : false
        //     })  
        // },

        toggle : (state , action) => {
            state.todos.map((todo , i) =>{
                if(i===action.payload){
                    todo.completed = !todo.completed
                }
                return todo;
            })
        }

    },
    extraReducers : (builder) => {
        builder.addCase(getInitialState.fulfilled , (state , action)=>{
            state.todos = [...action.payload.data];
        })
        .addCase(addTodo.fulfilled , (state , action)=>{
            // console.log('action.payload',action.payload);
            state.todos.push(action.payload);                                        
        })
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

