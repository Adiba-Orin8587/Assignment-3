/* eslint-disable no-unused-vars */
import React from 'react';
import './About.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPeopleGroup } from '@fortawesome/free-solid-svg-icons';

const About = () => {
    return (
        <div>

            <div className='container text-center py-5 my-5'>
                <h5 className='pt-5 mt-5 pb-3 mb-2 fw-semibold'> Welcome to Fashion&Style - Your Ultimate Destination for Fashion and Elegance!</h5>

                <p className='text-secondary'>At Fashion&Style, we believe that every individual deserves to express themselves through the art of fashion. Our online platform is more than just a dress store; it's a curated haven where style, passion, and creativity converge. We are dedicated to providing you with an unparalleled shopping experience, offering an exquisite collection of dresses that cater to your unique taste and preferences.</p>
            </div>

            <div className='g'>            <div className='container'>
                <div className='row row-cols-1 row-cols-md-4 g-3'>

                    <div className='row row-cols-2 row-cols-md-2 border-a mt-5 p-5'>
                        <img className='img-a' src="https://res.cloudinary.com/dpc7vvoqg/image/upload/v1692097519/3893466-200_strlc5.png" alt="" />
                        <div className=''>
                            <p className=' text-center text-secondary fw-bold'>Total Guest</p>
                            <h4 className=' text-center'>200,000,000+</h4>
                        </div>
                    </div>
                    <div className='row row-cols-1 row-cols-md-2 border-a mt-5 p-5'>
                        <img className='img-a' src="https://res.cloudinary.com/dpc7vvoqg/image/upload/v1692098565/2451474_ozitav.png" alt="" />
                        <div className=''>
                            <p className=' text-center text-secondary fw-bold'>Cities</p>
                            <h4 className=' text-center'>60,000+</h4>
                        </div>
                    </div>
                    <div className='row row-cols-1 row-cols-md-2 border-a mt-5 p-5'>
                        <img className='img-a' src="https://res.cloudinary.com/dpc7vvoqg/image/upload/v1692098477/3125340_wwqm52.png" alt="" />
                        <div className=''>
                            <p className=' text-center text-secondary fw-bold'>Castle</p>
                            <h4 className=' text-center'>1,400+</h4>
                        </div>
                    </div>
                    <div className='row row-cols-1 row-cols-md-2 border-a mt-5 p-5'>
                        <img className='img-a' src="https://res.cloudinary.com/dpc7vvoqg/image/upload/v1692098097/3437694-200_glkmkn.png" alt="" />
                        <div className=''>
                            <p className=' text-center text-secondary fw-bold'>Countries</p>
                            <h4 className=' text-center'>191+</h4>
                        </div>
                    </div>
                </div></div></div>

            <div className='container text-center'>
                <h4 className='text-secondary pt-5'>Listings Worldwide</h4>
                <h1 className='pt-2'>3,000,000+</h1>
                <img className='amap' src="https://res.cloudinary.com/dpc7vvoqg/image/upload/v1692099941/blue-world-map-white-background_42634-9_kwt5vl.jpg" alt="" />
            </div>
        </div>

    );
};

export default About;