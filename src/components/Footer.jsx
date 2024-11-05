import React from 'react';

const Footer = () => {
    return (
        <>
             <div className='text-center'>
                <h1 className='font-semibold text-2xl md:text-3xl lg:text-4xl'>Gadget Heaven</h1>
                <p className='mt-3 text-base '>Leading the way in cutting-edge technology and innovation.</p> 
             </div>
            <footer className="footer bg-white text-black-content px-40 py-10">
                <nav>
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Order Tracking</a>
                    <a className="link link-hover">Shipping & Delivery</a>
                    <a className="link link-hover">Product Support</a>
                    <a className="link link-hover">Returns</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Carrers</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>

        </footer>
        </>
    );
};

export default Footer;