import type { CartItem } from "@/interfaces/cart";

interface CartItemProps {
  cartItem: CartItem;
}

export function CartItem({ cartItem }: CartItemProps) {
  return (
    <div className="w-full">
      <h2>{cartItem.name}</h2>
      <p>Price: ${cartItem.price}</p>
      <p>Quantity: {cartItem.quantity}</p>
    </div>
  );
}
