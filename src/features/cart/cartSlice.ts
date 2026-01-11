import type { CartItem, InitialState } from "@/interfaces/cart";
import { createSlice } from "@reduxjs/toolkit";


const initialState: InitialState = {
    items: [],
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItem: (state, action: { payload: CartItem }) => {
            const existingItem = state.items.find(item => item.id === action.payload.id);
            if (existingItem) {
                existingItem.quantity += 1;
                return;
            }
            state.items.push(action.payload);
        },
        removeItem: (state, action: { payload: number }) => {
            state.items = state.items.filter(item => item.id !== action.payload);
        },
        clearCart: (state) => {
            state.items = [];
        },
    },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;