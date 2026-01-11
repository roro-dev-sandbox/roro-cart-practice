import { configureStore } from "@reduxjs/toolkit"
import cartReducer from "@/features/cart/cartSlice"
import { useDispatch, useSelector, type TypedUseSelectorHook } from "react-redux";


const store = configureStore({
  reducer: {
    cart: cartReducer
  }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store
