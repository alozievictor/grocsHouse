import React from 'react';
import '../assets/css/display2.css'
import Honey from '../assets/images/Glass Honey Jar with Paper Cap Mockup on Yellow Images Object Mockups.jpeg'


const Display2 = () => {
  return (
    <div className='text-gray-200 w-full bg-gray-100'>
        <div className='md:w-[80%] mx-auto md:flex flex-wrap'>
            <div className='w-[50%]'>
                <img src={Honey} alt="honeyImage" />
            </div>
            <div className='px-5 md:py-32'>
                <p className='text-xl text-lime-500'>Todays Hot Deal</p>
                <h3 className='cont-text text-gray-800 font-semibold mt-5'>Original Stock Honey <br /> Combo Package</h3>
              
              <div className=' grid md:grid-cols-4 gap-5 mt-5 md:mt-10 text-center text-gray-700'>
                <div>
                  <div className='time shadow-md'>00</div>
                  <h3 className='pt-3 text-base'>DAYS</h3>
                </div>
                <div>
                  <div className='time shadow-md'>00</div>
                  <h3 className='pt-3 text-base'>HRS</h3>
                </div>
                <div>
                  <div className='time shadow-md'>00</div>
                  <h3 className='pt-3 text-base'>MINS</h3>
                </div>
                <div>
                  <div className='time shadow-md'>00</div>
                  <h3 className='pt-3 text-base'>SECS</h3>
                </div>
              </div>
              <button>Shop now</button>
            </div>
        </div>
    </div>
  )
}

export default Display2;