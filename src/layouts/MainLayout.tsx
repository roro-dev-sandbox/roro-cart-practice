import { CartList, ProductsList } from "@/features";

export function MainLayout() {

    return (
        <div className="">
            <ProductsList />
            <CartList />
        </div>
    )
}