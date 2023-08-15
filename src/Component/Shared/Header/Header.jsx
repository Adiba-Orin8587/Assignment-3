/* eslint-disable no-unused-vars */
import React from 'react';
import './Header.css'
import { Container, Modal, Nav, Navbar } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp, faShoppingCart, faSearch } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import Logo from '../../../assets/image/Logo.svg'

const Header = () => {
    return (
        <header>
            <Navbar expand="lg" className="bg-body-tertiary justify-content-around sticky-top">
                <Container>
                    <Navbar.Brand to="/">
                        <img className='pe-5' src={Logo} alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto  ">
                            <Nav.Link><Link to='/' className='text-none fw-medium'>Home <FontAwesomeIcon className=' pe-4 icon' icon={faChevronUp} /></Link></Nav.Link>
                            <Nav.Link><Link to='/product' className='text-none fw-medium'>Product <FontAwesomeIcon className='pe-4 icon' icon={faChevronUp} /></Link></Nav.Link>
                            <Nav.Link><Link to='/cart' className='text-none fw-medium'>Cart  <FontAwesomeIcon className=' pe-4 icon' icon={faChevronUp} /></Link></Nav.Link>
                            <Nav.Link><Link to='/registration' className='text-none fw-medium'>Registration  <FontAwesomeIcon className=' pe-4 icon' icon={faChevronUp} /></Link></Nav.Link>
                            <Nav.Link><Link to='/about' className='text-none fw-medium'>About Us <FontAwesomeIcon className=' pe-4 icon' icon={faChevronUp} /></Link></Nav.Link>

                        </Nav>
                        <div>
                            <div className='d-flex'><input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <FontAwesomeIcon className='p-3 icon-1' icon={faSearch} />
                                <FontAwesomeIcon className='p-3 icon-1' icon={faShoppingCart} />
                            </div>

                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;