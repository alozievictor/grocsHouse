import React from 'react';
import Footer from '../components/footer';
import HomeDisplay from '../components/homeDisplay';


const Home = () => {
  return (
    <div className=''>
      <div className="" id='hero'>
        <div className='md:w-[35%] text-gray-900 absolute top-[37%] left-[10%]'>
            <h3 className="text-xl md:text-2xl py-5 "><span className='text-lime-600'>Grocs-Spa</span> is always giving you</h3>
            <h1 className='text-4xl md:text-5xl'>Testy And Healthy Organic Foods</h1>
            <p className="text-sm py-5">From the grocs-spa farm to your table, We bring to you orginic ingredient & 
              Healthy vegetables just for you. Discover everything that sets us apart from traditional grocery stores.</p>
            <button className='text-sm text-white hover:text-gray-800 text-center px-7 py-4 my-5 rounded-md bg-lime-600'>Shop Now</button>
        </div>
      </div>
      <HomeDisplay />
      <Footer />
    </div>
  )
}

export default Home;






