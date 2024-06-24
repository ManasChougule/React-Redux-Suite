import { createSlice } from "@reduxjs/toolkit";

const initialState = { blogs: [] };

const blogsSlice = createSlice({
    name:"react_blogs",
    initialState : initialState,
    reducers : {
        updateBlog: (state, action) => {
            state.blogs = state.blogs.map((blog, index) =>
                index === action.payload.index ? { ...blog, content: action.payload.new_content, title: action.payload.new_title } : blog
            );
        },
        reloadBlogs: (state, action) => {
            console.log('reloadBlogs called',action.payload)
            state.blogs = [...action.payload];
        }
    }
})


export const blogsReducer=blogsSlice.reducer;

export const actions = blogsSlice.actions;

export const blogsSelector = (state) => state.blogsReducer;