import { useTypedSelector } from "@/store/store";
import iconCarbonNeutral from "/assets/images/icon-carbon-neutral.svg";
import { CartItem } from "./CartItem";
import { useState } from "react";
import { OrderConfirmationModal } from "@/features/order/";
import { EmptyCart } from "./EmptyCart";
import { selectCartItems, selectCartTotal } from "../cartSelectors";
import { OrderTotal } from "./OrderTotal";
import { Button } from "@/shared/ui/Button";

export function CartList() {
    const items = useTypedSelector(selectCartItems);
    const orderTotal = useTypedSelector(selectCartTotal);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleConfirmOrder = () => {
        setIsModalOpen(true);
    };

    return (
        <>

            <section className="top-5 sticky min-w-72 w-full flex-1 bg-white p-5 rounded-lg h-fit">
                <h1 className="text-xl font-bold text-brand-red">
                    Your Cart({items.length})
                </h1>
                {items.length === 0 ? (
                    <EmptyCart />
                ) : (
                    <div className="space-y-6">
                        <ul>
                            {items.map((item) => (
                                <CartItem key={item.id} cartItem={item} />
                            ))}
                        </ul>
                        <OrderTotal orderTotal={orderTotal} totalClassName="text-md" />
                        <div className="bg-rose-50 flex justify-center items-center gap-2 text-rose-500 text-xs font-semibold p-2 rounded-md">
                            <img src={iconCarbonNeutral} alt="Carbon Neutral" />
                            <p>This is a <span className="text-rose-900">carbon-neutral</span> delivery</p>
                        </div>
                        <Button onClick={handleConfirmOrder} variant="primary">
                            Confirm Order
                        </Button>
                    </div>
                )}
            </section>
            {isModalOpen && <OrderConfirmationModal onClose={() => setIsModalOpen(false)} />}
        </>
    );
}
