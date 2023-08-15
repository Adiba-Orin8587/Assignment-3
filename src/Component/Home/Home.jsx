/* eslint-disable no-unused-vars */
import React from 'react';
import './Home.css'
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong, faChevronRight, faCircleCheck, faEnvelope, faEnvelopeCircleCheck, faEnvelopeOpen, faFaceGrinTears, faFaceMeh, faFemale, faGift, faGifts, faIdBadge, faReorder, faShippingFast } from '@fortawesome/free-solid-svg-icons';
import Product from '../EachProduct/EachProduct';
import EachProduct from '../EachProduct/EachProduct';

const Home = () => {
    return (
        <div className=''>
            <Carousel data-bs-theme="dark container">
                <Carousel.Item >
                    <Carousel.Caption >
                        <div className='carousel-caption text-start'>
                            <p className='animate__fadeInLeft animate__animated animate__slow'>SEE THE LATEST</p>
                            <h1 className='fw-semibold font col-6 pt-2 pb-3 animate__backInLeft animate__animated animate__slow'>Best Seller in Women's Clothing</h1>
                            <p className='col-5 ph animate__fadeInRight animate__animated animate__slow'>The latest drops from our Holiday 2023 collection are chic and funtional. </p>
                            <Link to='/registration' className=''>
                                <button className='border-0 fs my-4  py-3 px-4'>
                                    Shop now <FontAwesomeIcon className=' w-10 ms-2 icon' icon={faChevronRight} />
                                </button></Link>
                        </div>
                    </Carousel.Caption>
                    <img data-aos="fade-up" data-aos-duration="1000" className="d-block slide animate__fadeInUp animate__animated animate__fast" src="https://res.cloudinary.com/dpc7vvoqg/image/upload/v1691836697/home-1_scbv9p.png
                          "
                        alt="First slide" />
                </Carousel.Item>
                <Carousel.Item>
                    <div className='flex'>
                        <Carousel.Caption >
                            <div className='carousel-caption text-start'>
                                <p className='animate__fadeInLeft animate__animated animate__slow'>REFRESH YOUR STYLE</p>
                                <h1 className='fw-semibold font col-6 pt-2 pb-3 animate__backInLeft animate__animated animate__fast'>Romantic Style Inspiration</h1>
                                <p className='col-5 ph animate__fadeInRight animate__animated animate__slow'> Unbox Your Style With your personal shopper</p>
                                <Link to='/registration' className=''>
                                    <button className='border-0 fs my-4  py-3 px-4'>
                                        Shop now <FontAwesomeIcon className=' w-10 ms-2 icon' icon={faChevronRight} />
                                    </button></Link>
                            </div>
                        </Carousel.Caption>
                        <img
                            className="d-block slide-1 animate__fadeInUp animate__animated animate__fast"
                            src="https://res.cloudinary.com/dpc7vvoqg/image/upload/v1691777336/body-home_maghoa.png"
                            alt="Second slide"
                        />
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className='flex'>
                        <Carousel.Caption >
                            <div className='carousel-caption text-start'>
                                <p className='animate__fadeInLeft animate__animated animate__slow'>SAVE 50% OFF</p>
                                <h1 className='fw-semibold font col-8 pt-2 pb-3 animate__backInLeft animate__animated animate__fast'>Shop For Men's Fashion</h1>
                                <p className='col-5 ph animate__fadeInRight animate__animated animate__slow'>Discover the latest trends in Men fashion</p>
                                <Link to='/registration' className=''>
                                    <button className='border-0 fs my-4  py-3 px-4'>
                                        Shop now <FontAwesomeIcon className=' w-10 ms-2 icon' icon={faChevronRight} />
                                    </button></Link>
                            </div>
                        </Carousel.Caption>
                        <img
                            className="d-block slide-2 animate__fadeInUp animate__animated animate__fast"
                            src="https://res.cloudinary.com/dpc7vvoqg/image/upload/v1691839636/home-3_h8zo6a.png"
                            alt="Third slide"
                        />
                    </div>
                </Carousel.Item>
            </Carousel>

            {/* // ------Section-2------- */}
            <section className='container mt-5 py-5'>
                <div className='my-5' >
                    <p className='p p22 animate__lightSpeedInLeft animate__animated animate__slower'>SPRING 2023 | <br />
                        NEW IN <span className='fs-2 col-4 m-2 text-black'>New Collection Ready to Wear</span> </p>
                    <div className="row flexh align-items-center">
                        <div className="sm:col-12 md:col-6">
                            <div className="row flexh align-items-center">
                                <div className="col">
                                    <div className="category text-center py-4 rounded sec-1 animate__zoomIn animate__animated animate__slower">
                                        <div className='flex ps'>
                                            <p className='pe-5  me-5'>Women's clothing</p>
                                            <p className='ps-5  ms-5'>5 products</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="category text-center py-4 rounded mb-4 sec-3 animate__zoomIn animate__animated animate__slower">
                                        <div className='flex pss'>
                                            <p className='pe-5  me-5'>Men's clothing</p>
                                            <p className='ps-5  ms-5'>5 products</p>
                                        </div>
                                    </div>
                                    <div>
                                        <p className='p p32 mt-5 animate__lightSpeedInRight animate__animated animate__slower'>SPRING 2023 |
                                            <br />
                                            <span className='my-3 text-black fw-semibold text-end'>  Discover more For our Products</span>
                                            <br /> <Link className='none'>
                                                Explore more<FontAwesomeIcon className=' w-10 ms-2 icon' icon={faArrowRightLong} />
                                            </Link> </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            <div className='sec-2 animate__zoomIn animate__animated animate__slower'>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
            {/* // ------Section-2------- */}


            {/* // ------Section-3------- */}
            <div className='mt-4 bg'>
                <section data-aos="zoom-in"
                    data-aos-duration="2000" className='container mt-4'>
                    <div className='row row-cols-2 row-cols-md-2 row-cols-lg-4 my-5 py-5'>
                        <div className='text-center'>
                            <FontAwesomeIcon className=' w-10 ms-2 icons' icon={faShippingFast} />
                            <h5 className='s'>Free Shipping </h5>
                            <p className='fs text-secondary'>
                                From all orders over $100
                            </p>
                        </div>
                        <div className='text-center'>
                            <FontAwesomeIcon className=' w-10 ms-2 icons' icon={faCircleCheck} />
                            <h5 className='s'>Quality Support  </h5>
                            <p className='fs text-secondary'>
                                24/7 online feedback
                            </p>
                        </div>
                        <div className='text-center'>
                            <FontAwesomeIcon className=' w-10 ms-2 icons' icon={faReorder} />
                            <h5 className='s'>Return & Refund  </h5>
                            <p className='fs text-secondary'>
                                Return money within 30 days
                            </p>
                        </div>
                        <div className='text-center'>
                            <FontAwesomeIcon className=' w-10 ms-2 icons' icon={faGift} />
                            <h5 className='s'>Gift Voucher </h5>
                            <p className='fs text-secondary'>
                                820% off when you shop online
                            </p>
                        </div>
                    </div>
                </section>
            </div>

            {/* section-4 */}
            <div className='mt-0'>
                <div className='row row-cols-md-2 row-cols-1 g-0 '>
                    <div className='gs text-center'>
                        <img data-aos="flip-left" data-aos-easing="ease-out-cubic"
                            data-aos-duration="2000" className='gsss' src="https://res.cloudinary.com/dpc7vvoqg/image/upload/v1692102474/h1-banner04_eib9sc.jpg" alt="" />
                    </div>
                    <div className=''>
                        <div className='container'>
                            <div data-aos="zoom-in-left" data-aos-duration="2000" className="col  gs-1">
                                <h4 className='text-secondary fw-bold text-center py-2'>New Arrival</h4>
                                <div className="card border-0">
                                    <img src="https://res.cloudinary.com/dpc7vvoqg/image/upload/v1691762057/foot_ring_hzhi1e.jpg" className="card-img-top er" alt="..." />
                                    <div className="card-body border-0">
                                        <h6 className="card-title text-secondary">Accessories / Kids</h6>
                                        <h3>Beautiful Ornaments</h3>
                                        <p className="card-text">Price:$88.17</p>
                                        <p className="card-text text-secondary">Price:<del>$98.17</del></p>
                                        <Link to='/registration' className=''>
                                            <button className='border-0 fs my-4  py-3 px-4'>
                                                Shop now
                                                <FontAwesomeIcon className=' w-10 ms-2 icon' icon={faChevronRight} />
                                            </button></Link>
                                    </div>
                                </div>
                            </div></div>
                    </div>
                </div>
                <div className='row row-cols-md-2 row-cols-1 g-0 '>
                    <div className=''>
                        <div className='container'>
                            <div data-aos="zoom-in-left" data-aos-duration="2000" className="col gs-1">
                                <h4 className='text-secondary fw-bold text-center py-2'>New Arrival</h4>
                                <div className="card border-0">
                                    <img src="https://res.cloudinary.com/dpc7vvoqg/image/upload/v1691762064/pink_txh00b.jpg" className="card-img-top" alt="..." />
                                    <div className="card-body border-0">
                                        <h6 className="card-title text-secondary">Accessories / Kids</h6>
                                        <h3>Rustic Floral Heel</h3>
                                        <p className="card-text">Price:$88.17</p>
                                        <p className="card-text text-secondary">Price:<del>$98.17</del></p>
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
                    <div className='gss text-center'>
                        <img data-aos="flip-left" data-aos-easing="ease-out-cubic"
                            data-aos-duration="2000" className='gsss' src="https://res.cloudinary.com/dpc7vvoqg/image/upload/v1692103005/h1-banner05_wgdp42.jpg" alt="" />
                    </div>
                </div>
            </div>



            <section className='container p-5 my-5 borders rounded'>
                <h2 data-aos="fade-left" data-aos-duration="2000" className='text-center py-3 fw-semibold co'>Our Collection</h2>
                <div className='cspan text-center mb-5'></div>
                <div className='row row-cols-md-3 row-cols-1 g-2'>
                    <div data-aos="flip-left" data-aos-duration="2000" className="col  ">
                        <div className="card border-0">
                            <img src="https://res.cloudinary.com/dpc7vvoqg/image/upload/v1691762071/white_shoes_ulztt1.jpg" className="card-img-top" alt="..." />
                            <div className="card-body border-0">
                                <h6 className="card-title text-secondary">Accessories / Kids</h6>
                                <h3>Rustic Leather Heel</h3>
                                <p className="card-text">Price:$88.17</p>
                                <p className="card-text text-secondary">Price:<del>$98.17</del></p>
                                <Link to='/registration' className=''>
                                    <button className='border-0 fs my-4  py-3 px-4'>
                                        Shop now
                                        <FontAwesomeIcon className=' w-10 ms-2 icon' icon={faChevronRight} />
                                    </button></Link>
                            </div>
                        </div>
                    </div>
                    <div data-aos="flip-left" data-aos-duration="2000" className="col ">
                        <div className="card border-0">
                            <img src="https://res.cloudinary.com/dpc7vvoqg/image/upload/v1691762092/red_dress_zk0zbw.jpg" className="card-img-top" alt="..." />
                            <div className="card-body border-0">
                                <h6 className="card-title text-secondary">Accessories / Jean</h6>
                                <h3>Floral Black Skirt</h3>
                                <p className="card-text">188.02</p>
                                <p className="card-text text-secondary">Price:<del>$198.17</del></p>
                                <Link to='/registration' className=''>
                                    <button className='border-0 fs my-4  py-3 px-4'>
                                        Shop now
                                        <FontAwesomeIcon className=' w-10 ms-2 icon' icon={faChevronRight} />
                                    </button></Link>
                            </div>
                        </div>
                    </div>
                    <div data-aos="flip-left" data-aos-duration="2000" className="col ">
                        <div className="card cr border-0">
                            <img src="https://res.cloudinary.com/dpc7vvoqg/image/upload/v1691762091/heels_igqk8v.jpg" className="card-img-top" alt="..." />
                            <div className="card-body border-0">
                                <h6 className="card-title text-secondary">Accessories / Kids</h6>
                                <h3>Rustic Leather Heel</h3>
                                <p className="card-text">Price:$88.17</p>
                                <p className="card-text text-secondary">Price:<del>$98.17</del></p>
                                <Link to='/registration' className=''>
                                    <button className='border-0 fs my-4  py-3 px-4'>
                                        Shop now
                                        <FontAwesomeIcon className=' w-10 ms-2 icon' icon={faChevronRight} />
                                    </button></Link>
                            </div>
                        </div>
                    </div>
                    <div data-aos="flip-left" data-aos-duration="2000" className="col ">
                        <div className="card border-0">
                            <img src="https://res.cloudinary.com/dpc7vvoqg/image/upload/v1691762072/white_k7k9lo.jpg" className="card-img-top" alt="..." />
                            <div className="card-body border-0">
                                <h6 className="card-title text-secondary">Accessories /Men</h6>
                                <h3>White cotton shirt</h3>
                                <p className="card-text">Price:$88.17</p>
                                <p className="card-text text-secondary">Price:<del>$98.17</del></p>
                                <Link to='/registration' className=''>
                                    <button className='border-0 fs my-4  py-3 px-4'>
                                        Shop now
                                        <FontAwesomeIcon className=' w-10 ms-2 icon' icon={faChevronRight} />
                                    </button></Link>
                            </div>
                        </div>
                    </div>
                    <div data-aos="flip-left" data-aos-duration="2000" className="col ">
                        <div className="card border-0">
                            <img src="https://res.cloudinary.com/dpc7vvoqg/image/upload/v1691762057/glass_mn8hby.jpg" className="card-img-top" alt="..." />
                            <div className="card-body border-0">
                                <h6 className="card-title text-secondary">Accessories / Kids</h6>
                                <h3>Trendy Glass</h3>
                                <p className="card-text">Price:$78.17</p>
                                <p className="card-text text-secondary">Price:<del>$98.17</del></p>
                                <Link to='/registration' className=''>
                                    <button className='border-0 fs my-4  py-3 px-4'>
                                        Shop now
                                        <FontAwesomeIcon className=' w-10 ms-2 icon' icon={faChevronRight} />
                                    </button></Link>
                            </div>
                        </div>
                    </div>
                    <div data-aos="flip-left" data-aos-duration="2000" className="col ">
                        <div className="card border-0">
                            <img src="https://res.cloudinary.com/dpc7vvoqg/image/upload/v1691762057/foot_ring_hzhi1e.jpg" className="card-img-top" alt="..." />
                            <div className="card-body border-0">
                                <h6 className="card-title text-secondary">Accessories / Women</h6>
                                <h3>Rings</h3>
                                <p className="card-text">Price:$288.17</p>
                                <p className="card-text text-secondary">Price:<del>$398.17</del></p>
                                <Link to='/registration' className=''>
                                    <button className='border-0 fs my-4  py-3 px-4'>
                                        Shop now
                                        <FontAwesomeIcon className=' w-10 ms-2 icon' icon={faChevronRight} />
                                    </button></Link>
                            </div>
                        </div>
                    </div>
                    <div data-aos="flip-left" data-aos-duration="2000" className="col ">
                        <div className="card border-0">
                            <img src="https://res.cloudinary.com/dpc7vvoqg/image/upload/v1691762064/pink_txh00b.jpg" className="card-img-top" alt="..." />
                            <div className="card-body border-0">
                                <h6 className="card-title text-secondary">Accessories / Kids</h6>
                                <h3>Rustic Leather Heel</h3>
                                <p className="card-text">Price:$88.17</p>
                                <p className="card-text text-secondary">Price:<del>$98.17</del></p>
                                <Link to='/registration' className=''>
                                    <button className='border-0 fs my-4  py-3 px-4'>
                                        Shop now
                                        <FontAwesomeIcon className=' w-10 ms-2 icon' icon={faChevronRight} />
                                    </button></Link>
                            </div>
                        </div>
                    </div>
                    <div data-aos="flip-left" data-aos-duration="2000" className="col ">
                        <div className="card border-0">
                            <img src="https://res.cloudinary.com/dpc7vvoqg/image/upload/v1691762058/green_hai4io.jpg" className="card-img-top" alt="..." />
                            <div className="card-body border-0">
                                <h6 className="card-title text-secondary">Accessories / Kids</h6>
                                <h3>Rustic Leather Suit</h3>
                                <p className="card-text">Price:$288.17</p>
                                <p className="card-text text-secondary">Price:<del>$298.17</del></p>
                                <Link to='/registration' className=''>
                                    <button className='border-0 fs my-4  py-3 px-4'>
                                        Shop now
                                        <FontAwesomeIcon className=' w-10 ms-2 icon' icon={faChevronRight} />
                                    </button></Link>
                            </div>
                        </div>
                    </div>
                    <div data-aos="flip-left" data-aos-duration="2000" className="col ">
                        <div className="card border-0">
                            <img src="https://res.cloudinary.com/dpc7vvoqg/image/upload/v1691762051/earring_xj8smx.webp" className="card-img-top" alt="..." />
                            <div className="card-body border-0">
                                <h6 className="card-title text-secondary">Accessories / Kids</h6>
                                <h3>Eearrings</h3>
                                <p className="card-text">Price:$88.17</p>
                                <p className="card-text text-secondary">Price:<del>$98.17</del></p>
                                <Link to='/registration' className=''>
                                    <button className='border-0 fs my-4  py-3 px-4'>
                                        Shop now
                                        <FontAwesomeIcon className=' w-10 ms-2 icon' icon={faChevronRight} />
                                    </button></Link>
                            </div>
                        </div>
                    </div>

                    <Link to='./product'><button className='border-0 fs my-4 bg-black text-white rounded  py-3 px-5 ms-2'>See all<FontAwesomeIcon className=' w-10 ms-2 icon' icon={faChevronRight} /></button></Link>
                </div>

            </section>
            <section>
                <div className='my-4 bg'>
                    <section className='container my-4 '>
                        <div className='row row-cols-2 row-cols-md-2 row-cols-lg-5 my-5 py-5'>
                            <div >
                                <img data-aos="zoom-out-right" data-aos-duration="2000" className='br' src="https://res.cloudinary.com/dpc7vvoqg/image/upload/v1691862865/brand01_adzpih.svg" alt="" />
                            </div>
                            <div >
                                <img data-aos="zoom-out-right" data-aos-duration="2000" className='br' src="https://res.cloudinary.com/dpc7vvoqg/image/upload/v1691862866/brand03_v5hexz.svg" alt="" />
                            </div>
                            <div>
                                <img data-aos="zoom-out-down" data-aos-duration="2000" className='br' src="https://res.cloudinary.com/dpc7vvoqg/image/upload/v1691862865/brand05_vly68n.svg" alt="" />
                            </div>
                            <div>
                                <img data-aos="zoom-out-left" data-aos-duration="2000" className='br' src="https://res.cloudinary.com/dpc7vvoqg/image/upload/v1691862865/brand06_yaya2h.svg" alt="" />
                            </div>
                            <div>
                                <img data-aos="zoom-out-left" data-aos-duration="2000" className='br' src="https://res.cloudinary.com/dpc7vvoqg/image/upload/v1691862865/brand02_pfcgwh.svg" alt="" />
                            </div>

                        </div>
                    </section>
                </div>
            </section>

            <section className='container my-5 py-5'>
                <h1 data-aos="fade-right" data-aos-duration="1000" className='pt-3 text-center'>Latest From Blog</h1>
                <p data-aos="fade-left" data-aos-duration="1000" className='py-1 fw-semibold text-secondary text-center'>Subscribe for latest news and blog updates from our editor. </p>
                <div data-aos="fade-up"
                    data-aos-duration="3000" className='row row-cols-md-3 row-cols-1'>
                    <div className="col ">
                        <div className="card border-0">
                            <img src="https://res.cloudinary.com/dpc7vvoqg/image/upload/v1691762093/sec-1_h6kiry.jpg" className="card-img-top" alt="..." />
                            <div className="card-body border-0">
                                <h7 className="card-title text-secondary py-2 fs"> <span className='s'>BestSeller , Lifestyle</span> / 3 Comments</h7>
                                <h3 className='pt-1'>Staying Safe on the Construction Site</h3>
                                <hr className=' hr'></hr>
                                <p className="card-title text-secondary fs">By admin</p>
                                <Link to='/registration' className=''>
                                    <button className='border-0 fs my-4 bg-black text-white  py-3 px-4'>
                                        Read more
                                        <FontAwesomeIcon className=' w-10 ms-2 icon' icon={faChevronRight} />
                                    </button></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col ">
                        <div className="card border-0">
                            <img src="https://res.cloudinary.com/dpc7vvoqg/image/upload/v1691762093/sec-2_odv7ny.jpg" className="card-img-top" alt="..." />
                            <div className="card-body border-0">
                                <h7 className="card-title text-secondary fs py-2 "><span className='s'>Kids , Lifestyle</span> / 3 Comments</h7>
                                <h3 className='pt-1'> Follow This Formula For a winning Fit
                                    Every type</h3>
                                <hr className=' hr'></hr>
                                <p className="card-title text-secondary fs">By admin</p>
                                <Link to='/registration' className=''>
                                    <button className='border-0 fs my-4 bg-black text-white  py-3 px-4'>
                                        Read more
                                        <FontAwesomeIcon className=' w-10 ms-2 icon' icon={faChevronRight} />
                                    </button></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col ">
                        <div className="card border-0">
                            <img src="https://res.cloudinary.com/dpc7vvoqg/image/upload/v1691762094/sec-3_su5jkb.jpg" className="card-img-top" alt="..." />
                            <div className="card-body border-0">
                                <h7 className="card-title text-secondary fs py-2"><span className='s'>Kids , Men </span>/ 3 Comments</h7>
                                <h3 className='pt-2'>Racer blog: Tiffany Keep – In the Zone</h3>
                                <hr className=' hr'></hr>
                                <p className="card-title text-secondary fs">By admin</p>
                                <Link to='/registration' className=''>
                                    <button className='border-0 fs my-4 bg-black text-white  py-3 px-4'>
                                        Read more
                                        <FontAwesomeIcon className=' w-10 ms-2 icon' icon={faChevronRight} />
                                    </button></Link>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
            <hr />
            <section className='py-5'>
                <div className='container'>
                    <h2 className='text-center fw-semibold'>Subscrible & Get <span className='s'>10%</span> Discount</h2>
                    <input type="text" placeholder='email address' className='w-100 my-3 b py-2' />
                    <Link to='/registration' className=''>
                        <button className='border-0 fs my-4 bg-black text-white  py-2 px-5'>
                            Enter
                            <FontAwesomeIcon className=' w-10 ms-2 icon' icon={faChevronRight} />
                        </button></Link>
                </div>
            </section>


        </div >


    );
};



export default Home;