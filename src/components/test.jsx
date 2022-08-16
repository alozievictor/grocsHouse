import React from 'react';
// import {Link} from 'react-router-dom'
import img1 from '../assets/images/ajax  liquid.jpeg';
import img2 from '../assets/images/apple1.jpeg';
import img3 from '../assets/images/bread2.jpeg';
import img4 from '../assets/images/liquid.jpeg';
import img5 from '../assets/images/avacado.jpeg';
import img6 from '../assets/images/orangeJuice1.jpeg';
import img7 from '../assets/images/bread3.jpeg';
import img8 from '../assets/images/Banana-fied.jpeg';
import img9 from '../assets/images/Chocolate Garoto Talento Avelãs Chocolate Garoto Talento Chocolate ao Leite com Avelãs 25g.jpeg';
import img10 from '../assets/images/Roasted Peanuts Dabeli .jpeg';
import img11 from '../assets/images/milk.jpeg';
import img12 from '../assets/images/mac1.jpeg';
// import Display2 from './display2';

const Test = () => {

    const items = [
        {
            id: 1,
            name: 'Ajax liquid',
            image: img1,
            alt: 'Grocery',
            price: '$ 67.90',
            oldPrice: '$ 69.05',
            off: '10%'
        },
        {
            id: 2,
            name: 'Apple',
            image: img2,
            alt: 'Grocery',
            price: '$ 33.16',
            oldPrice: '$ 38.23',
            off: '25%'
        },
        {
            id: 3,
            name: 'Bread',
            image: img3,
            alt: 'Grocery',
            price: '$ 17.56',
            oldPrice: '$ 21.23',
            off: '16%'
        },
        {
            id: 4,
            name: 'Liquid Detergent',
            image: img4,
            alt: 'Grocery',
            price: '$ 37.56',
            off: 'New'
        },
        {
            id: 5,
            name: 'Avacado',
            image: img5,
            alt: 'Grocery',
            price: '$ 23.05',
            off: 'New'
        },
        {
            id: 6,
            name: 'Curry',
            image: img6,
            alt: 'Grocery',
            price: '$ 33.16',
            oldPrice: '$ 43.23',
            off: '11%'
        },
        {
            id: 7,
            name: 'Bread',
            image: img7,
            alt: 'Grocery',
            price: '$ 17.56',
            oldPrice: '$ 31.23',
            off: '33%'

        },
        {
            id: 8,
            name: 'Banana',
            image: img8,
            alt: 'Grocery',
            price: '$ 37.56',
            off: 'New'
            
        },
        {
            id: 9,
            name: 'Chocolate Garoto',
            image: img9,
            alt: 'Grocery',
            price: '$ 37.56',
            off: 'New',
            
        },
        {
            id: 10,
            name: 'Rusted Peanut',
            image: img10,
            alt: 'Grocery',
            price: '$ 37.56',
            off: 'New'
          
        },
        {
            id: 11,
            name: 'Milk',
            image: img11,
            alt: 'Grocery',
            price: '$ 37.56',
            oldPrice: '$ 42.89',
            off: '10%'
           
        },
        {
            id: 12,
            name: 'Macaroni',
            image: img12,
            alt: 'Grocery',
            price: '$ 37.56',
            off: 'New'
        },
    ]
    return(
       <div>
         <h1 className='text-center font-medium text-2xl'>Trending products</h1>
       <div className=' grid md:grid-cols-4 md:gap-5 w-full md:mx-auto px-5 py-5'> 
        {items.map((item) => (
            <div className='rounded-md shadow-md hover:shadow-xl bg-gray-50 text-center px-7 pt-10 object-cover pb-5 scale-75' key={item.id}>
                <div className=''>
                    <div className=''>
                        <div className='relative group'>
                            <img src={item.image} alt={item.alt} className=''/>
                            <p className='text-xs absolute top-1 border px-2 py-1 bg-lime-600 rounded-tl-2xl rounded-br-2xl'>{item.off}</p>
                            <div className='mt-4'>
                            <h3 className='text-gray-800 text-xl font-semibold tracking-widest title-font mb-1'>{item.name}</h3>
                            <div className='flex flex-wrap item-center mt-5 font-bold'>
                            <p className='mt-1 text-2xl text-lime-600'>{item.price}</p>
                            <small className='text-xl text-gray-300 decoration mx-5 pt-1.5 line-through'>{item.oldPrice}</small>   
                            </div>    
                        </div> 
                        </div>   
                    </div>               
                </div>         
            </div>
        ))}
       </div> 
            {/* <Display2 /> */}
       </div> 
    )
}
 
export default Test;
