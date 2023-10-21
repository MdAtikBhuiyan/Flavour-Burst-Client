import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import CartCard from './CartCard';
import cartEmpty from '../../assets/images/cart-empty.png'

const MyCart = () => {
    const products = useLoaderData();
    console.log('cart', products);

    const [cartProducts, setCartProducts] = useState(products && products);

    return (
        <div className='my-16 w-[90%] mx-auto'>

            {
                cartProducts?.length ?
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>

                        {cartProducts?.map(product => <CartCard
                            key={product._id}
                            product={product}
                            cartProducts={cartProducts}
                            setCartProducts={setCartProducts}
                        />)}

                    </div>
                    :

                    <div className='flex items-center flex-col'>
                        <img src={cartEmpty} className='max-h-40' alt="" />
                        <h2 className='capitalize font-bold text-3xl text-title-secondary italic text-center'>
                            Your Cart is Empty
                        </h2>
                    </div>

            }


        </div>
    );
};

export default MyCart;