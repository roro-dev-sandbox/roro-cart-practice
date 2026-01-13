import data from "@/data/products.json";
import { ProductCard } from "./ProductCard";

export function ProductList() {
    return (
        <section className="min-w-72 flex-1 md:flex-3 space-y-5">
            <h1 className="text-3xl font-bold">Desserts</h1>
            <div className="grid grid-cols-(--grid-cols-cards) gap-5">
                {data.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </section>
    );
}
