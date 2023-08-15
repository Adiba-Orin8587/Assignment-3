/* eslint-disable no-unused-vars */
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Footer.css'
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className='bg-black'>
            <div data-aos="flip-up" data-aos-duration="1000" className='container pt-5 mt-5'>
                <div className='row row-cols-1 row-cols-md-1 row-cols-lg-5 py-5'>
                    <div className='text-white'>
                        <h5 className='fw-medium py-4'>Quick Order</h5>
                        <h2 className='fw-light'>+877-834-1434 </h2>
                        <p className='fw-medium text-secondary'>customer_support@example.com</p>
                        <p className='fw-medium text-secondary'> Find a location nearest you. See <span className='fs-5 fw-semibold text-white'>Our Stores</span></p>
                    </div>
                    <div className='col-12 p-4 ms-5'>
                        <h5 className='ps-4 text-white py-2'>
                            useful links
                        </h5>
                        <ul className='text-white '>
                            <li>  <Link to='/registration' className='text-none   l'>New Products </Link></li>
                            <li>  <Link to='/registration' className='text-none   l'>   Best Sellers</Link></li>
                            <li>  <Link to='/registration' className='text-none   l'> Bundle & Save</Link></li>
                            <li>  <Link to='/registration' className='text-none   l'>Online Gift Card</Link></li>
                            <li>  <Link to='/registration' className='text-none   l'>   Collections</Link></li>

                        </ul>
                    </div>
                    <div className='col-12 p-4 '>
                        <h5 className='ps-4 text-white py-2'>
                            Shop
                        </h5>
                        <ul className='text-white '>
                            <li>  <Link to='/registration' className='text-none   l'>Men’s Shopping</Link></li>
                            <li>  <Link to='/registration' className='text-none   l'>Women’s Shopping</Link></li>
                            <li>  <Link to='/registration' className='text-none   l'> Kids’ Shopping</Link></li>
                            <li>  <Link to='/registration' className='text-none   l'>AccessoriesDiscounts</Link></li>
                            <li>  <Link to='/registration' className='text-none   l'>Discounts</Link></li>

                        </ul>
                    </div>
                    <div className='col-12 p-4'>
                        <h5 className='ps-4 text-white py-2'>
                            my account
                        </h5>
                        <ul className='text-white '>
                            <li>  <Link to='/registration' className='text-none   l'>My Profile</Link></li>
                            <li>  <Link to='/registration' className='text-none   l'>  My Order History</Link></li>
                            <li>  <Link to='/registration' className='text-none   l'>My Wish List</Link></li>
                            <li>  <Link to='/registration' className='text-none   l'>Order Tracking</Link></li>
                            <li>  <Link to='/registration' className='text-none   l'>Shopping Cart</Link></li>

                        </ul>
                    </div>
                    <hr className='hhh' />

                </div>

            </div>
        </footer>
    );
};

export default Footer;