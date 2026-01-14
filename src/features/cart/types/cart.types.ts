import type { Product } from "@/features/products/types/product.types";
import type { PayloadAction } from "@reduxjs/toolkit";


export interface CartItem extends Product {
    quantity: number;
}

export interface InitialState {
    items: CartItem[];
}

export type PayloadCartItem = PayloadAction<CartItem>;
export type PayloadUpdateQuantity = PayloadAction<Pick<CartItem, "id" | "quantity">>