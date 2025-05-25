import React from 'react';
import { FaRegStar } from 'react-icons/fa6';
import { useLoaderData, useNavigate, useParams } from 'react-router-dom';
// import { addToStoredCartItems } from '../utilities/addToDb.js';
import Swal from 'sweetalert2';
import { addToStoredCartItems } from '../utilities/addToDB';

const ProductDetails = () => {
    const { id } = useParams();
    const data = useLoaderData();
    // console.log(id, data);
    const product = data.find(product => product.id == id)
    const { name, image, description, category, price, stock, rating } = product;
    const navigate =  useNavigate();

    const handleAddToCart = (id) => {
        addToStoredCartItems(id);
        Swal.fire({
            title: "Product added to cart successfully!",
            icon: "success",
            draggable: true
        });
        navigate('/');
    }
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col md:gap-10 lg:flex-row">
                    <img
                        src={image}
                        className="max-w-3xs md:max-w-sm rounded-lg shadow-2xl"
                    />
                    <div>
                        <h1 className="text-xl md:text-5xl font-bold">{name}</h1>
                        <div className="badge badge-neutral badge-outline mt-3">{category}</div>
                        <p className="py-2">
                            {description}
                        </p>
                        <div className='flex items-center gap-4'>
                            <span className='font-semibold'>Stock: {stock} Pcs</span> |
                            <span className='flex items-center gap-1 font-semibold'>Rating: {rating} <FaRegStar size={18} /></span>
                        </div>
                        <h2 className='text-lg md:text-2xl font-semibold mt-3'>Price: {price} TK</h2>

                        {
                            stock ? <button onClick={() => handleAddToCart(id)} className="btn btn-neutral mt-4 px-15">Add to Cart</button>  : <button className="btn px-15" disabled="disabled">Stock Out</button>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;