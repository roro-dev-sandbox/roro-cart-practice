import { useAppDispatch, useTypedSelector } from "@/store/store";
import { CartItemConfirmed } from "./CartItemConfirmed";
import iconOrderConfirmed from "/assets/images/icon-order-confirmed.svg";
import { clearCart } from "./cartSlice";
import { useEffect } from "react";

interface CartModalProps {
    onClose: () => void;
}

export function CartModal({ onClose }: CartModalProps) {

    const items = useTypedSelector((state) => state.cart.items);
    const orderTotal = items.reduce((total, item) => total + item.price * item.quantity, 0);
    const dispatch = useAppDispatch();

    const handleClose = () => {
        onClose();
        dispatch(clearCart())
    }

    useEffect(() => {
        const handleEscape = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                handleClose();
            }
        };

        window.addEventListener("keydown", handleEscape);
        document.body.style.overflow = "hidden";
        return () => {
            window.removeEventListener("keydown", handleEscape);
            document.body.style.overflow = "auto";
        };
    }, [handleClose]);


    return (
        <>
            <div
                className="fixed inset-0 z-50 bg-black/50"
                onClick={handleClose}
                aria-hidden="true"
            />
            <div className="w-full sm:w-120 space-y-6 bg-white rounded-2xl shadow-md p-6 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50">
                <img className="size-10 " src={iconOrderConfirmed} alt="Order Confirmed" />
                <h1 className="mb-1 text-rose-900 text-3xl font-bold">Order Confirmed</h1>
                <p className="text-rose-400 text-sm" >We hope you enjoy your food!</p>
                <div className="space-y-6 bg-rose-50 p-4 rounded-lg">
                    {items.map((item, index) => (<CartItemConfirmed key={index} item={item} />))}
                    <p className="flex justify-between items-center">
                        <span className="text-sm text-rose- font-semibold">Order Total:</span>
                        <span className="text-rose-900 font-bold text-2xl">
                            ${orderTotal.toFixed(2)}
                        </span>
                    </p>
                </div>
                <button onClick={handleClose} className="w-full bg-brand-red text-white font-semibold py-2 rounded-3xl hover:bg-brand-red/90 transition cursor-pointer">
                    Start New Order
                </button>
            </div>
        </>
    )
}