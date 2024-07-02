import { createSlice } from "@reduxjs/toolkit";

const initialState = { 
    total : 0,
    item : 0,
    showCart : false,
    cart : []
 };

const cartSlice = createSlice({
    name:"shoppingCart",
    initialState : initialState,
    reducers : {
        updateCart : (state , action) => {
            state.item = action.payload.updated_item;
            state.total = action.payload.updated_total;
            state.cart = action.payload.updated_cart;
        },
        toggleCart: (state, action) => {
            state.showCart = !state.showCart;
        },
        clearCart: (state, action) => {
            state.total = 0;
            state.item = 0;
            state.cart = [];
        }
    }
})


export const shoppingCartReducer=cartSlice.reducer;

export const actions = cartSlice.actions;

export const shoppingCartSelector = (state) => state.shoppingCartReducer;