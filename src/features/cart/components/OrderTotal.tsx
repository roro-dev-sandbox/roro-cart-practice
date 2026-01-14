import { formatPrice } from "@/shared/utils/formatters";

export interface OrderTotalProps {
    orderTotal: number;
    className?: string;
    totalClassName?: string;
}

export function OrderTotal({ orderTotal, className, totalClassName }: OrderTotalProps) {

    return (
        <p className={`flex justify-between items-center ${className}`}>
            <span className="text-sm text-rose- font-semibold">Order Total:</span>
            <span className={`text-rose-900 font-bold ${totalClassName}`}>
                {formatPrice(orderTotal)}
            </span>
        </p>
    )
}