import iconEmptyCart from "/assets/images/illustration-empty-cart.svg";

export function EmptyCart() {
    return (
        <div className="flex flex-col items-center justify-center gap-5 mt-10">
            <img className="w-[45%]" src={iconEmptyCart} alt="Empty cart" />
            <p className="font-semibold text-rose-500 text-sm sm:text-base">
                Your added item will appear here
            </p>
        </div>
    );
}
