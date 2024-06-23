import { createSlice } from "@reduxjs/toolkit";


const INITIAL_STATE = { blogs: [] };


const blogsSlice = createSlice({
    name:"react_blogs",
    initialState : INITIAL_STATE,
    reducers : {
        addBlog: (state, action) => {
            state.blogs = [action.payload, ...state.blogs];
        },
        removeBlog: (state, action) => {
            state.blogs = state.blogs.filter((blog, index) => index !== action.payload);
        },
        updateBlog: (state, action) => {
            state.blogs = state.blogs.map((blog, index) =>
                index === action.payload.index ? { ...blog, content: action.payload.new_content, title: action.payload.new_title } : blog
            );
        },
        reloadBlogs: (state, action) => {
            state.blogs = [...action.payload];
        }
    }
})


export const blogsReducer=blogsSlice.reducer;

export const actions = blogsSlice.actions;

export const blogsSelector = (state) => state.blogsReducer;