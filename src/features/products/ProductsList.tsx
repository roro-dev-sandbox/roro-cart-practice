import data from '@/data/dataProducts.json'
import { ProductsItem } from './ProductsItem';

export function ProductsList() {

    return (
        <section className='space-y-5'>
            <h1 className='text-3xl font-bold'>Desserts</h1>
            <div className='flex flex-wrap gap-5'>
                {
                    data.map((product) => <ProductsItem product={product} />)
                }
            </div>
        </section>

    )
}