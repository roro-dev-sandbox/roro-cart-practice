
import { useTypedSelector } from "@/store/store";
import iconEmptyCart from "/assets/images/illustration-empty-cart.svg";
import { CartItem } from "./CartItem";

export function CartList() {
    const items = useTypedSelector((state) => state.cart.items);
    console.log(items);

    return (
        <section className="top-5 sticky min-w-44 w-full mobile:flex-1 md:min-w-72 bg-white p-5 rounded-lg shadow-md h-fit">
            <h1 className="text-xl font-bold text-brand-red">Your Cart({items.length})</h1>
            {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center gap-5 mt-10">
                    <img className="w-[45%]" src={iconEmptyCart} alt="Empty cart" />
                    <p className="font-semibold text-rose-500 text-sm sm:text-base">Your added item will appear here</p>
                </div>
            ) : (
                <ul>
                    {items.map((item, index) => (
                        <li key={index}>
                            <CartItem cartItem={item} />
                        </li>
                   
                    ))}
                </ul>
            )}
        </section>
    );
}
