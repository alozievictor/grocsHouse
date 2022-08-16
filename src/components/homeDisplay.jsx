// import { Disclosure } from '@headlessui/react';
import React from 'react'
import Display2 from './display2';
// import Footer from './footer';
import Test from './test';
import Test2 from './test2';

const HomeDisplay = () => {
  return (
    <div>
    <div className='md:w-[80%] md:mx-auto my-10'>
        <div className='grid grid-cols-2 md:grid-cols-4'>
            <div className='flex justify-center items-center py-3'>
                <div className='icons'>
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAADxklEQVRoge2YS2wbVRSGvzN2HljIZZFEbdUVSGyK1FQCpD6Ix2mClK7KYmJbKQ+pPCSEWIBUNWzaokphgUTFAqQi2BCROF5QVUoq+vI4aku6gC5oC6xYEEFIsilFcZNx5rCIjUxiHGc8xLHkT7qyPef6/D7+77nXHmjQoEGDBg28I6Yd003WnEcYXWxyj3+7P5X1K2nQr0QboA3lrdYlQ4G3/UoqfiWqlO5M7HlX+QaYs81kh195Db8SVcq1SPJS/mm7n3mDfvWIbSY33d1iNt2R/4tgrb9Jv6hJEUXLeQbYXm6uorMGkjEM99TVrtS9/5pX1Tni1U0vmgoLojpgR8fOl4rXtkeUhG0mpXgUQoXXwUDgCUUvCIQQGe3O9HeVSlXTpVXK0VIxa8wKzHYYXwi8BPp7c1NL56UDX84Wv68udq1Uf2pZ9I9jCDdAdiw6iyPWmBUonrPhc6RWu5wdtXNdmXjCgNsC3bMdHAeGCvG6cKTAZGT0V3F5GVBB3jfT1sFCrO7OkXT36HjEjn0k8A4iI2Y6sdeOjszXlSMF/np02wmEWyC7QD+ECntkq7n23dPnnK6MlRCMO4i+aKats3XpCMBkJPWLKJ8KGCKBN7dgj+g0yC4zHYvb0eRouZmi+rWKvOuikVr8QyyPGp8jehJhxLRjI2Wn5h8FHg+WO2Vrw8wZdDuIe2ylmSsiuOUcsaN2DjiVH+tSMKJum301jUK2GhX1iJl+pRUj+wbKgMLulatyB3Q4tPDnuYuHLy769YG8aq3rSO/1+E4kO4VyFnhGILQy9FmBj7Oh8NRzk0d3+FFENVplC+mb6GtxcjoB7FG4Jy5HnGA27ASzYVRfAH4COgOuM27dtZqrKaJarbJLayEUfl1gD/Bjk+Puv9Kbul8UPt9z2UrnmowpYO/8nPEq8InXQqrVMhR+A4he6z+wOrkgCQBxGVyVGIArvan7irwH4MKA1yK8apnpWHwlqtNiZmJDKCfKiTjBbPjGwQsPSsX6pgbC2Ye5NcJe8aSlctpob3NPInxQcGbDwg+WNu2nzVotnUblNMycCaZ2p5aAwfz4F6Ydvwm6r8lpPQSUvJ+03GwcQkHhZsZMrlmelVKtVvntV/UrAESGei5b29aIp4885uo/NwCGvRTgl1bZZWHdtZrn5oxbQCfwsyKDodbAVYCHi7keVxkSeFLh+452d1/eXU9Uq7Xu+u69Ht/p5HQ8L1CK26h72I6mZrwW4YdWRY3aN9HXkn0k/BoGR1Geyl/+AZHh9rblz6pxopZaDRo0qEP+BvWl55SjkS4pAAAAAElFTkSuQmCC" alt=''></img>
                </div>
                <div className='cont ml-5 pb-5'>
                    <h3 className='font-bold text-xl text-gray-800'>Free Delivery</h3>
                    <p className='text-sm text-gray-800'>To Your Door</p>
                </div>
            </div>
            <div className='flex justify-center items-center border-l-2'>
                <div className='icons'>
                    <img src="data:image/png;base64,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" alt=''></img>
                </div>
                <div className='cont ml-5 pb-5'>
                    <h3 className='font-bold text-xl text-gray-800'>Local Pickup</h3>
                    <p className='text-sm text-gray-800'>Checkout Locations</p>
                </div>
            </div>
            <div className='flex  justify-center items-center border-l-2'>
                <div className='icons'>
                    <img src="data:image/png;base64,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" alt=''></img>
                </div>
                <div className='cont ml-5 pb-5'>
                    <h3 className='font-bold text-xl text-gray-800'>Available For You</h3>
                    <p className='text-sm text-gray-800'>Online Support 24/7</p>
                </div>  
        </div>
        <div className='flex justify-center items-center border-l-2'>
            <div className='icons md:px-5'>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAADnUlEQVRoge2ZT2gcVRzHP79Jmpo2iNJdwUQQepBiwYsFkVgzuykqKErA3WyQVPDgpVgvKkGkf6weREU96MGTzcFsuoXUg6DS7kxp7MmCQoP24EEhUXdaqLYR0u7Mz8NmYDLZ2bTJJLzW/V72ze/3+773Pvvm7Z950FZb6yJJShRmCl01zzoi6CjIvWkOqjAnwng2Exys7KxcS6PPzqSEV5O3RXijBeuqJdCLMnbR61DgzTT6TARRkVEBLJH+6kD5bBqDhcpVi/1qyXSAvkhKIFZSQqAXIG0IACd/7PvoGGkoEeRWU+KtFcp2h3UjJrJW/X9WxLUn0//YIv2Vvm1WxHiQAbc0+ujZQvdKdUaD2E7pNUHHN1+3ph7+4eVNrWqNBgH/pMI/KE/2XL38QatKo0HcXOVHUXkOWBBkv+2MPJVUaxzI4JnhB6LXbq7sovIWgErwaWGm0NXMZxSI7ZQO+T4/5U+P5KPxrOd/BJwX2O7V5KVmXqNAsHQbcIevwZTtvHBfGK4UKz4qhwFU5JWm1g2a4g3JfXxyP8JXAneq+B8uzf55AvQPgQdtp7Qr7jUKBEGterAPuCJo0XZGdoQpN+fWBTnRuAqWbXqzQIDqYGVWYaJxpaVoLgAHAJFH4j7jQBqyjjdedE80qsL5xeaOZY71n9TNS0V/aTT0/mi861owt9jMxj1Ggmyd/7vWaMmSCdc7vfmwJO4xEmRhc0+m0VIvGu/u7tsCoPBv3GMkCJ3WTgBFfo+G5xfqfQACtbjFSJAAGQIQ0e+icQt5CADRC3GPcSD5U4U+Vd0LqPgdx5cklWcARK1lT3bMAtFDlt8hnwlsASad/MRMmGr8H9GnAQj8b+NWo0Bs98ITgjwLcsnyO8aiuZ6rl58H7gZ+dvKVc3GvUSBubuIbRQ5YIsXq4Je/hfHGT3d5B0BEPm7mXfEpykbrtF0+Eo/VPOtVge3Ar5mM/0Uzn1Er0kwDbjEn8C6gEui+pKf3RoMMnhzaJlgVYBPCJ07+2LJNHspokFN7pi4hvI/o1wR/vd6q1mgQAHeg/N6VrXcNuTm33qrOeBCAc7s+v75SzS0BciNqHyuYptvmWGFN3+y2WzoD+ljzrEy7dnn3Wvq/Ga3jraUbureSj6dhTqA3Vy32h6ewca32HbedQriKs6vxN1MiiAjjKGNqybTtDqc13hIpejStvhJBspngoHfRQpW9aZ6HL2pW0aP3ZPVwyv221Vba+g+mVR0Xf+bVwAAAAABJRU5ErkJggg==" alt=''></img>
            </div>
            <div className='cont ml-5 pb-5'>
                <h3 className='text-xl font-bold text-gray-800'>Order freely</h3>
                <p className='text-sm text-gray-800'>Download Our App</p>
            </div>
        </div>
        </div>
            <section className="text-gray-600 body-font">
    <div class="container px-5 py-24 mx-auto">
        <h2>Available products</h2>
        <div class="flex flex-wrap -m-4 text-center">
            <div class="lg:w-1/4 md:w-1/2 p-4 w-full hover:shadow-md">
                <div className="block relative h-48 rounded overflow-hidden" id='item-1'></div>
                    <div class="mt-4">
                        <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">VEGETABLE</h3>
                       
                    </div>
                </div>
        <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
            <div className="block relative h-48 rounded overflow-hidden" id='item-2'>
            {/* <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://dummyimage.com/421x261"></img> */}
            </div>
            <div class="mt-4">
            <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">BREAD</h3>
          
           
            </div>
        </div>
        <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
            <div className="block relative h-48 rounded overflow-hidden" id='item-3'>
            {/* <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://dummyimage.com/422x262"></img> */}
            </div>
            <div class="mt-4">
            <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">WINE</h3>
        
            </div>
        </div>
        <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
            <div className="block relative h-48 rounded overflow-hidden" id='item-4'>
            {/* <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://dummyimage.com/423x263"/> */}
            </div>
            <div class="mt-4">
            <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">EGGS</h3>
          
            </div>
        </div>
        <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
            <a href='/' className="block relative h-48 rounded overflow-hidden" id='item-5'>
            {/* <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://dummyimage.com/424x264"/> */}
            </a>
            <div class="mt-4">
            <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">MILK</h3>
         
            </div>
        </div>
        <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
            <a href='/' className="block relative h-48 rounded overflow-hidden" id='item-6'>
            {/* <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://dummyimage.com/425x265"/> */}
            </a>
            <div class="mt-4">
            <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">MEAT</h3>
            
            </div>
        </div>
        <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
            <a href='/' className="block relative h-48 rounded overflow-hidden" id='item-7'>
            {/* <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://dummyimage.com/427x267"/> */}
            </a>
            <div class="mt-4">
            <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">FRUIT</h3>
           
            </div>
        </div>
        <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
            <a href='/' className="block relative h-48 rounded overflow-hidden" id='item-8'>
            {/* <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://dummyimage.com/428x268"/> */}
            </a>
            <div class="mt-4">
            <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">NATURAL HONEY</h3>
         
            </div>
        </div>
        </div>
    </div>
    </section>
        <Test />        
    </div>
        <Display2 />
        <Test2 />
        {/* <Footer /> */}
    </div>
        

  )
}

export default HomeDisplay;