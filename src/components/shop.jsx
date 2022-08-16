import React from 'react';
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
import img13 from '../assets/images/onion.jpeg';
import img14 from '../assets/images/Potatoe.jpeg';
import img15 from '../assets/images/tomatoe.jpeg';
import img16 from '../assets/images/corn3.jpeg';
import img17 from '../assets/images/Ginger.jpeg';
import img18 from '../assets/images/Fresh Broccoli.jpeg';
import img19 from '../assets/images/Free Honey Jar Mockups.png';
import img20 from '../assets/images/pep1.jpeg'

const Groceries = () => {

    const shopItems = [
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
        {
            id:13,
            name: 'Onion',
            image: img13,
            price: '$12.67',
            off: 'New'
          },
          {
            id:14,
            name: 'Potato',
            image: img14,
            price: '25.89',
            off: 'New'
          },
          {
            id:15,
            name: 'Tomato',
            image: img15,
            price: '$22.56',
            off: 'New'
          },
          {
            id:16,
            name: 'Corn',
            image: img16,
            price: '$19.22',
            off: 'New'
          },
          {
            id:17,
            name: 'Ginger',
            image: img17,
            price: '$15.77',
            off: 'New'
          },
          {
            id:18,
            name: 'Broccoli',
            image: img18,
            price: '$36.15',
            off: 'New'
          },
          {
            id:19,
            name: 'Honey',
            image: img19,
            price: '$75.77',
            off: 'New'
          },
          {
            id:20,
            name: 'Pepper',
            image: img20,
            price: '$46.15',
            off: 'New'
          },
    ]
  return (
    <div className='pt-14'>
        <div className=' grid md:grid-cols-4 md:gap-5 w-full md:w-[80%] md:mx-auto py-3'>
            {shopItems.map((item) =>(
                <div className='rounded-md shadow-md hover:shadow-xl border-red-600 bg-gray-50 text-center px-7 pt-10 object-cover pb-10 scale-75' key={item.id}>
                <div className=''>
                    <div className=''>
                        <div className='relative group'>
                            <img src={item.image} alt={item.alt} className=''/>
                            <p className='text-xs absolute top-1 border px-2 py-1 bg-lime-600 rounded-tl-2xl rounded-br-2xl'>{item.off}</p>
                            <div className='mt-4'>
                            <h3 className='text-gray-800  text-xl font-semibold tracking-widest title-font mb-1"'>{item.name}</h3>
                            <div className='flex flex-wrap item-center mt-5 font-bold'>
                            <p className='mt-1 text-2xl text-lime-600'>{item.price}</p>
                            <small className='text-xl decoration mx-5 pt-1.5 line-through'>{item.oldPrice}</small>   
                            </div> 
                        </div> 
                        </div>   
                    </div>               
                </div>         
            </div>
            ))}
             <button className='w-60 mx-auto px-7 py-5 border'>Load More</button>   
        </div>
   
    </div>
  )
}

export default Groceries;