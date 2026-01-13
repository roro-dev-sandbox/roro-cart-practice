import type { CartItem } from "@/features/cart/types/cart.types";
import { formatPrice, formatQuantity } from "@/shared/utils/formatters";

interface OrderSummaryItemProps {
    item: CartItem;
}

export function OrderSummaryItem({ item }: OrderSummaryItemProps) {
    return (
        <article className="flex justify-between gap-2 items-center border-b border-rose-100 pb-3">
            <div className="flex gap-2.5 items-center">
                <img className="size-10 rounded-lg" src={item.image.desktop} alt={item.name} />
                <div className="text-sm min-w-0">
                    <h2 className="font-semibold text-shadow-rose-900 truncate">{item.name}</h2>
                    <p className="text-rose-500 space-x-2.5">
                        <span className="font-semibold text-brand-red">
                            {formatQuantity(item.quantity)}
                        </span>
                        <span>@ {formatPrice(item.price)}</span>
                    </p>
                </div>
            </div>
            <p className="font-semibold text-md">
                {formatPrice(item.price * item.quantity)}
            </p>
        </article>
    )
}
