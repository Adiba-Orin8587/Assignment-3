/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import './EachProduct.css'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';


const EachProduct = ({ product }) => {
    const { category, name, price, minusPrice, img } = product;
    return (
        <div>
            <div className='container  my-5'>
                <div  className="col " >
                    <div className="card border-0">
                        <img src={img} className="card-img-top" alt="..." />
                        <div className="card-body border-0">
                            <h6 className="card-title text-secondary">{category}</h6>
                            <h3>{name}</h3>
                            <p className="card-text">Price:${price}</p>
                            <p className="card-text text-secondary">Price:<del>${minusPrice}</del></p>
                            <Link to='/registration' className=''>
                                <button className='border-0 fs my-4  py-3 px-4'>
                                    Shop now
                                    <FontAwesomeIcon className=' w-10 ms-2 icon' icon={faChevronRight} />
                                </button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EachProduct;