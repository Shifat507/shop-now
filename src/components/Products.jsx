import React, { useEffect, useState } from 'react';
import Product from './Product';

const Products = () => {
    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState('');
    const [searchProducts, setSearchProducts] = useState([]);
    const [category, setCategory] = useState('');
    const [categoryFiltered, setCategoryFiltered] = useState([]);
    const [sortPrice, setSortPrice] = useState(null);

    useEffect(() => {
        fetch('/productsData.json')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])

    // Search Functionality
    const handleSearch = (e) => {
        const searchResult = e.target.value;
        setSearch(searchResult);
    }
    useEffect(() => {
        const searchFilter = products.filter(item => item.name.toLowerCase().includes(search.toLocaleLowerCase()));
        setSearchProducts(searchFilter);

    }, [search, products])
    // console.log(searchProducts);

    // Category Functionality
    const handleCategory = (e) => {
        const categoryValue = e.target.value;
        setCategory(categoryValue);
    }
    // console.log(category);
    useEffect(() => {
        const categoryWiseFilter = products.filter(item => item.category === category).sort((a, b) => a.price - b.price);
        setCategoryFiltered(categoryWiseFilter);
    }, [category, products])
    // console.log(category);
    // console.log(categoryFiltered);

    // Sorting Functionality
    const handleSortByPrice = () => {
        const sortedByPrice = products.sort((a, b) => a.price - b.price);
        setSortPrice(sortedByPrice);
    }

    // Decide what to display based on OR logic
    let displayProducts = products;

    if (search) {
        displayProducts = searchProducts;
    } else if (category) {
        displayProducts = categoryFiltered;
    } else if (sortPrice) {
        displayProducts = sortPrice;
    }


    return (
        <div>
            {/* All Products */}
            <section className='mt-16'>
                <div className='flex flex-col md:flex-row justify-between gap-y-2 gap-x-3'>
                    {/* Filter by Category */}
                    <select onChange={handleCategory} value={category} className="select">
                        <option value="">All Categories</option>
                        <option value="clothing">Clothing</option>
                        <option value="accessories">Accessories</option>
                        <option value="bags">Bags</option>
                        <option value="shoes">Shoes</option>
                    </select>

                    <div className='flex items-center gap-2 mb-10'>
                        {/* Searching Products */}
                        <label className="input md:w-80">
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

                        {/* Sort by Price */}
                        <button onClick={handleSortByPrice} className="btn btn-neutral">Sort by Price</button>
                    </div>
                </div>


                <h2 className='text-lg md:text-3xl font-bold'>Exclusive Collections</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-8 gap-x-3 mt-10'>
                    {
                        displayProducts.length > 0 ? (
                            displayProducts.map(product => (
                                <Product key={product.id} product={product} />
                            ))
                        ) : (
                            <p className='col-span-full flex justify-center my-16 text-lg font-semibold text-center'>
                                No products found!
                            </p>
                        )
                    }
                </div>
            </section>
        </div>
    );
};

export default Products;