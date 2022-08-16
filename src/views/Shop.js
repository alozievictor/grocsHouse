import React from 'react';
// import { Link } from 'react-router-dom';
import '../assets/css/about.css'
import Groceries from '../components/shop';
import Footer from '../components/footer';

function Shop(){
    return(
        <div>
            <div className='text-gray-800'>
                <div className='relative flex' id="shop">
                    <div className='absolute top-[60%] left-[10%]'>
                        <h3 className='text-xl md:text-base text-lime-500'>.//WELCOME TO OUR ONLINE STORE</h3>
                        <h2 className='text-4xl md:text-6xl font-bold text-white'>Shop With Us</h2>
                    </div>
                </div>
            </div>
            <Groceries />
            <Footer />
        </div>
    )
}

export default Shop;