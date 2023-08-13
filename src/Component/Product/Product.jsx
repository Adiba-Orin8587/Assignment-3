/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import EachProduct from '../EachProduct/EachProduct';

const Product = () => {
    const products = useLoaderData()
    return (
        <div className='container'>
        <h2 className='py-5'>Trendy Products</h2>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 user">
            {
               products.map(product => <EachProduct
                    key={product?.id}
                    product={product}
                ></EachProduct>)
            }
        </div>
    </div>
    );
};

export default Product;