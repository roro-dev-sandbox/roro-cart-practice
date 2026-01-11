import type { Product } from "@/interfaces/product";
import iconAddToCart from "/assets/images/icon-add-to-cart.svg";
import iconIncQuantity from "/assets/images/icon-increment-quantity.svg";
import iconDecQuantity from "/assets/images/icon-decrement-quantity.svg";
import { useAppDispatch, useTypedSelector } from "@/store/store";
import { addItem } from "../cart/cartSlice";



export interface ProductsItemProps {
    product: Product;
}

export function ProductsItem({ product }: ProductsItemProps) {
    const dispatch = useAppDispatch();
    const item = useTypedSelector((state) => state.cart.items.find((item) => item.id === product.id));

    const handleClickIncrease = () => {
        dispatch(addItem({
            ...product,
            quantity: 1,
        }));
    };

    const handleClickDecrease = () => {
        dispatch(addItem({
            ...product,
            quantity: -1,
        }));
    };

    return (
        <article className="w-full md:flex-1/3 lg:flex-1/4 flex flex-col group">
            <div
                className={`w-full h-48 md:h-60 rounded-xl group-hover:border-2 group-hover:border-brand-red  bg-(image:--image-url-mobile) md:bg-(image:--image-url-tablet) lg:bg-(image:--image-url-desktop) ${item ? 'border-brand-red border-2' : ''}`}
                style={{
                    '--image-url-desktop': `url(${product.image.desktop})`,
                    '--image-url-tablet': `url(${product.image.tablet})`,
                    '--image-url-mobile': `url(${product.image.mobile})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                } as React.CSSProperties}

            >
            </div>
            {!item ? (
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
                        className="group/decrement rounded-full border border-white px-1 py-2 hover:bg-white cursor-pointer"
                        onClick={handleClickDecrease}
                    >
                        <img src={iconDecQuantity} alt="Decrease quantity" className="group-hover/decrement:filter-[invert(26%)_sepia(89%)_saturate(5500%)_hue-rotate(355deg)_brightness(90%)_contrast(110%)]" />
                    </button>
                    <span>{item.quantity}</span>
                    <button
                        className="group/increment rounded-full border border-white p-1 hover:bg-white cursor-pointer"
                        onClick={handleClickIncrease}
                    >
                        <img src={iconIncQuantity} alt="Increase quantity" className="group-hover/increment:filter-[invert(26%)_sepia(89%)_saturate(5500%)_hue-rotate(355deg)_brightness(90%)_contrast(110%)]" />
                    </button>
                </div>
            )}
            <p className="text-gray-500 text-sm">{product.category}</p>
            <h2 className="font-semibold">{product.name}</h2>
            <p className="text-brand-red font-semibold">${product.price}</p>
        </article>
    );
}
