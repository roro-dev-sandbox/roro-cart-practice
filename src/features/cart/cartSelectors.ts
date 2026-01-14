import type { RootState } from "@/store/store";

export const selectCartItems = (state: RootState) => state.cart.items;
export const selectCartTotal = (state: RootState) =>
    state.cart.items.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );
export const selectCartItemCount = (state: RootState) =>
    state.cart.items.length;
export const selectCartItemById = (id: number) => (state: RootState) =>
    state.cart.items.find(item => item.id === id);