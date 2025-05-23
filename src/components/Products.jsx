import React, { useEffect, useState } from 'react';
import Product from './Product';

const Products = () => {
    const [products, setProducts] = useState([]);
        useEffect(()=>{
            fetch('/public/productsData.json')
            .then(res => res.json())
            .then(data =>setProducts(data));
        },[])
    return (
        <div>
            {/* All Products */}
            <section className='mt-16'>
                <h2 className='text-lg md:text-3xl font-bold'>Exclusive Collections</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-8 gap-x-3 mt-10'>
                    {
                        products.map(product => <Product key={product.id} product={product}></Product>)
                    }
                </div>
            </section>
        </div>
    );
};

export default Products;