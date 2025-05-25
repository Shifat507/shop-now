import React, { useEffect, useState } from 'react';
import Product from './Product';

const Products = () => {
    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState('');
    const [searchProducts, setSearchProducts] = useState('');
    useEffect(() => {
        fetch('/public/productsData.json')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])
    const handleSearch = (e) => {
        const searchResult = e.target.value;
        setSearch(searchResult);
    }
    useEffect(() => {
        const searchFilter = products.filter(item => item.name.toLowerCase().includes(search.toLocaleLowerCase()));
        setSearchProducts(searchFilter);

    }, [search, products])
    console.log(searchProducts);
    return (
        <div>
            {/* All Products */}
            <section className='mt-16'>
                <div>
                    <label className="input">
                        <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <g
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                strokeWidth="2.5"
                                fill="none"
                                stroke="currentColor"
                            >
                                <circle cx="11" cy="11" r="8"></circle>
                                <path d="m21 21-4.3-4.3"></path>
                            </g>
                        </svg>
                        <input onChange={handleSearch} type="search" required placeholder="Search by product name" />
                    </label>
                </div>
                <h2 className='text-lg md:text-3xl font-bold'>Exclusive Collections</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-8 gap-x-3 mt-10'>
                    {
                        search ? searchProducts.length > 0 ? searchProducts.map(product => <Product key={product.id} product={product}></Product>) :
                            <p className='col-span-full flex justify-center my-16 text-lg font-semibold text-center'>No results found!</p>
                            : products.map(product => <Product key={product.id} product={product}></Product>)
                    }
                </div>
            </section>
        </div>
    );
};

export default Products;