import iconAddToCart from "/assets/images/icon-add-to-cart.svg";
import { useCartItem } from "@/features/cart/hooks/useCartItem";
import { ProductQuantityControl } from "./ProductQuantityControl";
import { ProductImage } from "./ProductImage";
import { formatPrice } from "@/shared/utils/formatters";
import type { Product } from "../types/product.types";


export interface ProductCardProps {
    product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
    const { item, handleAddItem, handleIncreaseQuantity, handleDecreaseQuantity } = useCartItem(product);

    return (
        <article className="group">
            <ProductImage product={product} isActive={!!item} />
            {!item ? (
                <button
                    className="w-40 group/add bg-white flex items-center justify-center gap-2 mx-auto px-3 py-1.5 rounded-2xl border border-rose-400 font-medium -translate-y-6/12 cursor-pointer hover:bg-brand-red hover:border-brand-red hover:text-white transition"
                    onClick={handleAddItem}
                >
                    <img
                        className="group-hover/add:brightness-0 group-hover/add:invert"
                        src={iconAddToCart}
                        alt="Add to cart"
                    />
                    Add to Cart
                </button>
            ) : (
                <ProductQuantityControl
                    handleIncreaseQuantity={handleIncreaseQuantity}
                    handleDecreaseQuantity={handleDecreaseQuantity}
                    quantity={item.quantity}
                />
            )}
            <p className="text-gray-500 text-sm">{product.category}</p>
            <h2 className="font-semibold">{product.name}</h2>
            <p className="text-brand-red font-semibold">{formatPrice(product.price)}</p>
        </article>
    );
}
