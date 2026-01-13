import { CartList } from "@/features/cart";
import { ProductList } from "@/features/products";


export function MainLayout() {

    return (
        <div className="flex flex-wrap max-w-345 mx-auto gap-7 p-4 sm:p-6 md:p-8 lg:p-11 xl:p-17">
            <ProductList />
            <CartList />
        </div>
    )
}