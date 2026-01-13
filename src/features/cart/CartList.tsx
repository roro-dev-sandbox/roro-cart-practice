import { useTypedSelector } from "@/store/store";
import iconEmptyCart from "/assets/images/illustration-empty-cart.svg";
import iconCarbonNeutral from "/assets/images/icon-carbon-neutral.svg";
import { CartItem } from "./CartItem";
import { CartModal } from "./CartModal";
import { useState } from "react";

export function CartList() {
    const items = useTypedSelector((state) => state.cart.items);
    const orderTotal = items.reduce((total, item) => total + item.price * item.quantity, 0);
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>

            <section className="top-5 sticky min-w-72 w-full flex-1 bg-white p-5 rounded-lg h-fit">
                <h1 className="text-xl font-bold text-brand-red">
                    Your Cart({items.length})
                </h1>
                {items.length === 0 ? (
                    <div className="flex flex-col items-center justify-center gap-5 mt-10">
                        <img className="w-[45%]" src={iconEmptyCart} alt="Empty cart" />
                        <p className="font-semibold text-rose-500 text-sm sm:text-base">
                            Your added item will appear here
                        </p>
                    </div>
                ) : (
                    <div className="space-y-6">
                        <ul>
                            {items.map((item, index) => (
                                <CartItem key={index} cartItem={item} />
                            ))}
                        </ul>
                        <p className="flex justify-between items-center">
                            <span className="text-sm text-rose- font-semibold">Order Total:</span>
                            <span className="text-rose-900 font-bold text-md">
                                ${orderTotal.toFixed(2)}
                            </span>
                        </p>
                        <div className="bg-rose-50 flex justify-center items-center gap-2 text-rose-500 text-xs font-semibold p-2 rounded-md">
                            <img src={iconCarbonNeutral} alt="Carbon Neutral" />
                            <p>This is a <span className="text-rose-900">carbon-neutral</span> delivery</p>
                        </div>
                        <button onClick={() => setIsModalOpen(true)} className="w-full bg-brand-red text-white font-semibold py-2 rounded-3xl hover:bg-brand-red/90 transition cursor-pointer">
                            Confirm Order
                        </button>
                    </div>
                )}
            </section>
            {isModalOpen && <CartModal onClose={() => setIsModalOpen(false)} />}

        </>
    );
}
