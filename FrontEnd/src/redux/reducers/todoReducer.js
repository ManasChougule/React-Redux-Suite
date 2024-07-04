import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Initial state
const initialState = {
  todos: []
};

// Thunk to get initial state
export const getInitialState = createAsyncThunk("todo/getInitialState", async () => {
  const response = await axios.get("http://localhost:4100/api/todos");
  return response.data; // Return only the data
});

// Thunk to add a todo
export const addTodo = createAsyncThunk("todo/addTodo", async (payload) => {
  const response = await fetch("http://localhost:4100/api/todos/addPost", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ text: payload, completed: false })
  });
  return response.json(); // Return only the data
});

// Todo slice
const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    toggle: (state, action) => {
      state.todos.map((todo, i) => {
        if (i === action.payload) {
          todo.completed = !todo.completed;
        }
        return todo;
      });
    }
  },
  extraReducers: (builder) => {
    builder
    .addCase(getInitialState.fulfilled, (state, action) => {
      state.todos = [...action.payload];
    })
    .addCase(addTodo.fulfilled, (state, action) => {

        state.todos = [...action.payload];
    });
  }
});

export const todoReducer = todoSlice.reducer;
export const actions = todoSlice.actions;
export const todoSelector = (state) => state.todoReducer.todos;
