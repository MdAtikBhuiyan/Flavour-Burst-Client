import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import CartCard from './CartCard';

const MyCart = () => {
    const products = useLoaderData();
    // console.log('cart', products);

    const [cartProducts, setCartProducts] = useState(products);

    return (
        <div className='mt-16 w-[90%] mx-auto'>

            {
                cartProducts.length ?
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>

                        {cartProducts.map(product => <CartCard
                            key={product._id}
                            product={product}
                            cartProducts={cartProducts}
                            setCartProducts={setCartProducts}
                        />)}

                    </div>
                    :

                    <div>
                        Hello World
                    </div>

            }


        </div>
    );
};

export default MyCart;