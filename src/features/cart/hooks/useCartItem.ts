import { addItem, updateQuantity } from "@/features/cart/cartSlice";
import { useAppDispatch, useTypedSelector } from "@/store/store";
import { useCallback } from "react";
import { selectCartItemById } from "../cartSelectors";
import type { CartItem } from "../types/cart.types";
import type { Product } from "@/features/products/types/product.types";

interface UseCartItemReturn {
  item?: CartItem;
  handleAddItem: () => void;
  handleIncreaseQuantity: () => void;
  handleDecreaseQuantity: () => void;
}

export const useCartItem = (product: Product): UseCartItemReturn => {
  const dispatch = useAppDispatch();
  const item = useTypedSelector(selectCartItemById(product.id));

  const handleAddItem = useCallback(() => {
    dispatch(addItem({ ...product, quantity: 1 }));
  }, [dispatch, product]);

  const handleIncreaseQuantity = useCallback(() => {
    dispatch(updateQuantity({ id: product.id, quantity: 1 }));
  }, [dispatch, product]);

  const handleDecreaseQuantity = useCallback(() => {
    dispatch(updateQuantity({ id: product.id, quantity: -1 }));
  }, [dispatch, product]);
  return {
    item,
    handleAddItem,
    handleIncreaseQuantity,
    handleDecreaseQuantity,
  };
};
