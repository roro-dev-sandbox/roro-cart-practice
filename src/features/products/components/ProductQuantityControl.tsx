import iconIncQuantity from "/assets/images/icon-increment-quantity.svg";
import iconDecQuantity from "/assets/images/icon-decrement-quantity.svg";

export interface ProductQuantityControlProps {
    handleIncreaseQuantity: () => void;
    handleDecreaseQuantity: () => void;
    quantity: number;
}

export function ProductQuantityControl({
    handleIncreaseQuantity,
    handleDecreaseQuantity,
    quantity,
}: ProductQuantityControlProps) {
    return (
        <div className="w-40 bg-brand-red flex items-center justify-between gap-10 mx-auto px-2.5 py-1.5 rounded-2xl font-medium -translate-y-6/12 text-white">
            <button
                aria-label="Decrease quantity"
                className="group/decrement rounded-full border border-white px-1 py-2 hover:bg-white cursor-pointer"
                onClick={handleDecreaseQuantity}
            >
                <img
                    src={iconDecQuantity}
                    alt="Decrease quantity"
                    className="group-hover/decrement:filter-[invert(26%)_sepia(89%)_saturate(5500%)_hue-rotate(355deg)_brightness(90%)_contrast(110%)]"
                />
            </button>
            <span>{quantity}</span>
            <button
                aria-label="Increase quantity"
                className="group/increment rounded-full border border-white p-1 hover:bg-white cursor-pointer"
                onClick={handleIncreaseQuantity}
            >
                <img
                    src={iconIncQuantity}
                    alt="Increase quantity"
                    className="group-hover/increment:filter-[invert(26%)_sepia(89%)_saturate(5500%)_hue-rotate(355deg)_brightness(90%)_contrast(110%)]"
                />
            </button>
        </div>
    );
}
