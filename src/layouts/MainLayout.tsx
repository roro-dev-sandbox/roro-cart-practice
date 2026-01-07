import { CartList, ProductsList } from "@/features";

export function MainLayout() {

    return (
        <div>
            <ProductsList />
            <CartList />
        </div>
    )
}