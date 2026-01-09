import data from "@/data/dataProducts.json";
import { ProductsItem } from "./ProductsItem";

export function ProductsList() {
    return (
        <section className="min-w-44 mobile:flex-1 md:flex-3 space-y-5">
            <h1 className="text-3xl font-bold">Desserts</h1>
            <div className="flex flex-wrap gap-5">
                {data.map((product, index) => (
                    <ProductsItem key={index} product={product} />
                ))}
            </div>
        </section>
    );
}
