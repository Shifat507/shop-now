import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { deleteItem, getStoredCartItems } from '../utilities/addToDB';
import { RiDeleteBin6Fill } from 'react-icons/ri';
import Swal from 'sweetalert2';
import deliveryImg from '../assets/OthersImags/delivery.jpg'

const Cart = () => {
    const allProducts = useLoaderData();
    const [cartItems, setCartItems] = useState([]);
    const [price, setPrice] = useState(0);
    useEffect(() => {
        const getStoredCart = getStoredCartItems();
        const getStoredCartInt = getStoredCart.map(id => parseInt(id));
        // console.log(getStoredCartInt, allProducts);

        const cartList = allProducts.filter(product => getStoredCartInt.includes(product.id));
        setCartItems(cartList);


    }, [])

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You want to remove this item?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, remove it!"
        }).then((result) => {
            if (result.isConfirmed) {
                deleteItem(id);

                const updatedCartItems = cartItems.filter(item => item.id !== id);
                setCartItems(updatedCartItems);
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });
            }
        });

    }

    useEffect(() => {
        const total = cartItems.reduce((sum, item) => sum + item.price, 0);
        setPrice(total);
    }, [cartItems])

    return (
        <div className=''>
            <div className='mt-10 mb-16 md:w-3/4'>
                {
                    (cartItems.length > 0) ? <div>
                        <h2 className='text-lg md:text-3xl font-bold w-full'>All Items</h2>

                        <div className="overflow-x-auto">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th className='font-bold'>Products</th>
                                        <th className='font-bold'>Price</th>
                                        <th className='font-bold'>Action</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    {
                                        cartItems.map(item => <tr>
                                            <td>
                                                <div className="flex items-center gap-3">
                                                    <div className="avatar">
                                                        <div className="mask mask-squircle h-20 w-10 md:w-20">
                                                            <img
                                                                src={item.image} />
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="text-sm md:text-lg font-bold ">{item.name}</div>

                                                    </div>
                                                </div>
                                            </td>

                                            <td className='text-sm md:text-lg font-bold'>{item.price} Tk</td>
                                            <td>
                                                <button onClick={() => handleDelete(item.id)} className='cursor-pointer'><RiDeleteBin6Fill size={25} /></button>
                                            </td>
                                        </tr>)
                                    }



                                </tbody>
                            </table>
                            <hr />
                            <div className='flex justify-between w-2/3 md:ml-16 mt-2'>
                                <p className='text-lg font-semibold'>Product Price
                                    <span className='ps-4 text-lg text-gray-600'> | QTY: {cartItems.length}</span>
                                </p>
                                <p className='text-lg font-semibold'>{price} Tk</p>
                            </div>
                            <div className='flex justify-between w-2/3 md:ml-16 my-2'>
                                <p className='text-lg font-semibold'>Delivery Charge

                                </p>
                                <p className='text-lg font-semibold'>100 Tk</p>
                            </div>
                            <hr />
                            <div className='flex justify-between w-2/3 md:ml-16 my-2'>
                                <p className='text-lg font-semibold'>Total

                                </p>
                                <p className='text-lg font-semibold'>{price + 100} Tk</p>
                            </div>
                        </div>
                    </div> : <p className='text-lg font-semibold'>No product add to cart yet.</p>
                }
            </div>
            {/* <div>
                <img src={deliveryImg} alt="" />
            </div> */}
        </div>
    );
};

export default Cart;