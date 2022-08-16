import React from 'react';
import '../assets/css/about.css';
import ContDisplay from '../components/contDisplay';
import Footer from '../components/footer';


function Contact(){
    return(
        <div>
            <div className='text-gray-800'>
                <div className='relative flex' id="contact">
                    <div className='absolute top-[60%] left-[10%]'>
                        <h3 className='text-base text-lime-500'>.//WELCOME TO OUR ONLINE STORE</h3>
                        <h2 className='text-4xl md:text-6xl font-bold text-white'>Contact Us</h2>
                    </div>
                </div>
            </div>
            <ContDisplay />
            <Footer />
        </div>
    )
}

export default Contact;