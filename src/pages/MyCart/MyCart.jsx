import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CartCard from './CartCard';

const MyCart = () => {
    const products = useLoaderData();

    return (
        <div className='mt-16 w-[90%] mx-auto'>

            {
                products ?
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
                        {products.map(product => <CartCard key={product.id} product={product} />)}
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