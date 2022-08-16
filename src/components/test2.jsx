import React from 'react';
import img1 from '../assets/images/onion.jpeg';
import img2 from '../assets/images/Potatoe.jpeg';
import img3 from '../assets/images/tomatoe.jpeg';
import img4 from '../assets/images/corn3.jpeg';
import img5 from '../assets/images/Ginger.jpeg';
import img6 from '../assets/images/Fresh Broccoli.jpeg';
import img7 from '../assets/images/Free Honey Jar Mockups.png';
import img8 from '../assets/images/pep1.jpeg'

const Test2 = () => {

  const items = [
    {
      id:1,
      name: 'Onion',
      image: img1,
      price: '$12.67',
      off: 'New'
    },
    {
      id:2,
      name: 'Potato',
      image: img2,
      price: '25.89',
      off: 'New'
    },
    {
      id:3,
      name: 'Tomato',
      image: img3,
      price: '$22.56',
      off: 'New'
    },
    {
      id:4,
      name: 'Corn',
      image: img4,
      price: '$19.22',
      off: 'New'
    },
    {
      id:5,
      name: 'Ginger',
      image: img5,
      price: '$15.77',
      off: 'New'
    },
    {
      id:6,
      name: 'Broccoli',
      image: img6,
      price: '$36.15',
      off: 'New'
    },
    {
      id:7,
      name: 'Honey',
      image: img7,
      price: '$75.77',
      off: 'New'
    },
    {
      id:8,
      name: 'Pepper',
      image: img8,
      price: '$46.15',
      off: 'New'
    },
  ]
  return (
    <div className='py-10'>
        <h1 className='text-center font-medium text-2xl'>Hot Deal</h1>
      <div className=' grid md:grid-cols-4 md:gap-5 md:w-[80%] md:mx-auto px-5 py-5'> 
        {items.map((item) => (
            <div className='rounded-md shadow-md hover:shadow-xl bg-gray-50 text-center px-7 pt-10 object-cover pb-5 scale-75' key={item.id}>
                <div className=''>
                    <div className=''>
                        <div className='relative group'>
                            <img src={item.image} alt={item.alt} className=''/>
                            <p className='text-xs absolute top-1 border px-2 py-1 bg-lime-600 rounded-tl-2xl rounded-br-2xl'>{item.off}</p>
                            <div className='mt-4'>
                            <h3 className='text-gray-800 text-xl font-semibold tracking-widest title-font mb-1"'>{item.name}</h3>
                            <div className='flex flex-wrap item-center mt-5 font-bold'>
                            <p className='mt-1 text-xl'>{item.price}</p>
                            <small className='text-xl decoration mx-5 pt-1.5 line-through'>{item.oldPrice}</small>   
                            </div>    
                        </div> 
                        </div>   
                    </div>               
                </div>         
            </div>
        ))}
       </div> 
    </div>
  )
}

export default Test2;












