import React from 'react';
import { FaRegStar } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
    const { id, name, image, category, price, rating } = product;
    return (
        <div className='mx-auto'>
            <div className="card bg-base-100 w-full md:w-72 shadow-sm transform transition duration-300 hover:scale-105">
                <figure>
                    <div className='relative'>
                        <img
                            src={image}
                            alt={name} />
                             <span className="absolute bottom-2 left-2 bg-neutral text-white text-xs px-2 py-1 rounded">
                        {category}
                    </span>
                    </div>
                </figure>
                <div className="card-body">
                    <h3 className="card-title">{name}</h3>
                    <div className='flex justify-between items-center'>
                        <h2 className='text-md md:text-xl font-semibold'>Price: {price} TK</h2>
                        <span className='flex items-center gap-1 font-semibold text-lg'>{rating} <FaRegStar size={18} /></span>
                    </div>
                    <div className="card-actions justify-center">
                        <Link to={`/products/${id}`} className="btn btn-neutral px-12">See Details</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;