import { clearCart } from "@/features/cart/cartSlice";
import { useAppDispatch, useTypedSelector } from "@/store/store";
import { useCallback, } from "react";
import { OrderSummaryItem } from "./OrderSummaryItem";
import iconOrderConfirmed from "/assets/images/icon-order-confirmed.svg";
import { selectCartItems, selectCartTotal } from "@/features/cart/cartSelectors";
import { useKeyPress } from "@/shared/hooks/useKeyPress";
import { OrderTotal } from "@/features/cart";
import { Button } from "@/shared/ui/Button";

interface OrderConfirmationModalProps {
    onClose: () => void;
}

export function OrderConfirmationModal({ onClose }: OrderConfirmationModalProps) {
    const items = useTypedSelector(selectCartItems);
    const orderTotal = useTypedSelector(selectCartTotal);
    const dispatch = useAppDispatch();

    const handleClose = useCallback(() => {
        dispatch(clearCart());
        onClose();
    }, [dispatch, onClose]);

    useKeyPress({ callback: handleClose });

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
                <div className=" bg-rose-50 rounded-lg">
                    <div className="max-h-55 overflow-auto space-y-4 px-4 pt-4">
                        {items.map((item) => (<OrderSummaryItem key={item.id} item={item} />))}
                    </div>
                    <OrderTotal orderTotal={orderTotal} className="p-4" totalClassName="text-2xl" />
                </div>
                <Button onClick={handleClose} variant="primary" >
                    Start New Order
                </Button>
            </div>
        </>
    )
}


