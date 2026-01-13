
import { createSlice } from "@reduxjs/toolkit";
import type { InitialState, PayloadCartItem, PayloadUpdateQuantity } from "./types/cart.types";

const initialState: InitialState = {
    items: [],
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItem: (state, action: PayloadCartItem) => {
            state.items.push(action.payload);
        },
        removeItem: (state, action: { payload: number }) => {
            state.items = state.items.filter((item) => item.id !== action.payload);
        },
        clearCart: (state) => {
            state.items = [];
        },
        updateQuantity: (state, action: PayloadUpdateQuantity) => {
            const item = state.items.find((item) => item.id === action.payload.id);
            if (item) {
                item.quantity += action.payload.quantity;
                if (item.quantity <= 0) {
                    state.items = state.items.filter((item) => item.id !== action.payload.id);
                }
            }
        },
    },
});

export const { addItem, removeItem, clearCart, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;
