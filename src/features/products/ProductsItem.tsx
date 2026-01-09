import type { Product } from "@/interfaces/product";
import iconAddToCart from "/assets/images/icon-add-to-cart.svg";
import iconIncQuantity from "/assets/images/icon-increment-quantity.svg";
import iconDecQuantity from "/assets/images/icon-decrement-quantity.svg";
import { useState } from "react";
import { useAppDispatch } from "@/store/store";
import { addItem } from "../cart/cartSlice";

export interface ProductsItemProps {
    product: Product;
}

export function ProductsItem({ product }: ProductsItemProps) {
    const dispatch = useAppDispatch();
    const [quantity, setQuantity] = useState(0);

    const handleClickIncrease = () => {
        setQuantity((prevQuantity) => prevQuantity + 1);
        dispatch(addItem({
            id: product.id,
            name: product.name,
            price: product.price,
            quantity: 1,
        }));
    };

    const handleClickDecrease = () => {
        setQuantity((prevQuantity) => Math.max(prevQuantity - 1, 0));
    };

    return (
        <article className="w-full md:flex-1/3 lg:flex-1/4 flex flex-col group">
            <img
                className="rounded-xl group-hover:border-2 group-hover:border-brand-red"
                src={product.image.desktop}
                alt={product.name}
            />
            {quantity === 0 ? (
                <button
                    className="group/add bg-white flex items-center justify-center gap-2 m-auto px-3 py-1.5 rounded-2xl border border-brand-red font-medium -translate-y-6/12 cursor-pointer hover:bg-brand-red hover:text-white transition"
                    onClick={handleClickIncrease}
                >
                    <img
                        className="group-hover/add:brightness-0 group-hover/add:invert"
                        src={iconAddToCart}
                        alt="Add to cart"
                    />
                    Add to Cart
                </button>
            ) : (
                <div className="bg-brand-red flex items-center justify-center gap-10 m-auto px-3 py-1.5 rounded-2xl font-medium -translate-y-6/12 text-white">
                    <button
                        className="rounded-full border border-white px-1 py-2 hover:bg-white cursor-pointer"
                        onClick={handleClickDecrease}
                    >
                        <img src={iconDecQuantity} alt="Decrease quantity" />
                    </button>
                    <span>{quantity}</span>
                    <button
                        className="rounded-full border border-white p-1 hover:bg-white cursor-pointer"
                        onClick={handleClickIncrease}
                    >
                        <img src={iconIncQuantity} alt="Increase quantity" />
                    </button>
                </div>
            )}
            <p className="text-gray-500 text-sm">{product.category}</p>
            <h2 className="font-semibold">{product.name}</h2>
            <p className="text-brand-red font-semibold">${product.price}</p>
        </article>
    );
}
