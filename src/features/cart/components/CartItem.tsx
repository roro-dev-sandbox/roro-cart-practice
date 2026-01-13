import iconRemove from "/assets/images/icon-remove-item.svg";
import { useAppDispatch } from "@/store/store";
import { removeItem } from "../cartSlice";
import { formatPrice, formatQuantity } from "@/shared/utils/formatters";
import type { CartItem } from "../types/cart.types";

interface CartItemProps {
  cartItem: CartItem;
}

export function CartItem({ cartItem }: CartItemProps) {
  const dispatch = useAppDispatch();

  const handleRemoveItem = () => {
    dispatch(removeItem(cartItem.id));
  }

  return (
    <li className="flex items-center justify-between gap-2 py-3 border-b border-rose-200">
      <div className="text-sm min-w-0">
        <h2 className="font-semibold text-rose-950 truncate">{cartItem.name}</h2>
        <p className="text-rose-500 space-x-2.5">
          <span className="font-semibold text-brand-red">
            {formatQuantity(cartItem.quantity)}
          </span>
          <span>@ {formatPrice(cartItem.price)}</span>
          <span className="font-semibold">
            {formatPrice(cartItem.price * cartItem.quantity)}
          </span>
        </p>
      </div>
      <button onClick={handleRemoveItem} className="rounded-full border border-rose-400 p-0.5 cursor-pointer hover:bg-rose-100 transition">
        <img src={iconRemove} alt="Remove item" />
      </button>
    </li>
  );
}
