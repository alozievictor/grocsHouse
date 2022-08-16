import React from 'react';
import img from '../assets/images/grocery bg.jpg';
import '../assets/css/about.css';
import Footer from '../components/footer';

function About(){
  return (
    <div>
        <div className='text-gray-900 text-center py-10'>
            <h1 className='text-4xl text-gray-800'>About Us</h1>
            <div className='grid md:grid-cols-2 md:w-[85%] mx-auto md:my-10 text-gray-700'>
                <div>
                    <img src={img} alt="groceryimage" />
                </div>
                <div className='text-justify md:pt-14 px-6 md:px-20'>
                    <h2 className='text-2xl py-5'>Our Store</h2>
                    <p>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click
                       “Edit Text” or double click me to add your own content and make changes to the font.
                        Feel free to drag and drop me anywhere you like on your page. I’m a great place for
                        you to tell a story and let your users know a little more about you.</p>

                    <p>This is a great space to write a long text about your company and your services.
                        You can use this space to go into a little more detail about your company. Talk 
                        about your team and what services you provide. Tell your visitors the story of how 
                        you came up with the idea for your business and what makes you different from your 
                        competitors. Make your company stand out and show your visitors who you are.</p>
                </div>
            </div>

            <div className='flex-grow flex flex-wrap md:pl-20 pb-12 md:mt-5 mt-10 md:text-left text-center'>
                <div className='lg:w-1/4 md:w-1/3 w-full md:h-[400px] px-4 mx-12 py-5 mb-7 shadow-md rounded-sm'>
                    <div className='flex justify-center w-20 mx-auto my-7 p-4'>
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAADxklEQVRoge2YS2wbVRSGvzN2HljIZZFEbdUVSGyK1FQCpD6Ix2mClK7KYmJbKQ+pPCSEWIBUNWzaokphgUTFAqQi2BCROF5QVUoq+vI4aku6gC5oC6xYEEFIsilFcZNx5rCIjUxiHGc8xLHkT7qyPef6/D7+77nXHmjQoEGDBg28I6Yd003WnEcYXWxyj3+7P5X1K2nQr0QboA3lrdYlQ4G3/UoqfiWqlO5M7HlX+QaYs81kh195Db8SVcq1SPJS/mm7n3mDfvWIbSY33d1iNt2R/4tgrb9Jv6hJEUXLeQbYXm6uorMGkjEM99TVrtS9/5pX1Tni1U0vmgoLojpgR8fOl4rXtkeUhG0mpXgUQoXXwUDgCUUvCIQQGe3O9HeVSlXTpVXK0VIxa8wKzHYYXwi8BPp7c1NL56UDX84Wv68udq1Uf2pZ9I9jCDdAdiw6iyPWmBUonrPhc6RWu5wdtXNdmXjCgNsC3bMdHAeGCvG6cKTAZGT0V3F5GVBB3jfT1sFCrO7OkXT36HjEjn0k8A4iI2Y6sdeOjszXlSMF/np02wmEWyC7QD+ECntkq7n23dPnnK6MlRCMO4i+aKats3XpCMBkJPWLKJ8KGCKBN7dgj+g0yC4zHYvb0eRouZmi+rWKvOuikVr8QyyPGp8jehJhxLRjI2Wn5h8FHg+WO2Vrw8wZdDuIe2ylmSsiuOUcsaN2DjiVH+tSMKJum301jUK2GhX1iJl+pRUj+wbKgMLulatyB3Q4tPDnuYuHLy769YG8aq3rSO/1+E4kO4VyFnhGILQy9FmBj7Oh8NRzk0d3+FFENVplC+mb6GtxcjoB7FG4Jy5HnGA27ASzYVRfAH4COgOuM27dtZqrKaJarbJLayEUfl1gD/Bjk+Puv9Kbul8UPt9z2UrnmowpYO/8nPEq8InXQqrVMhR+A4he6z+wOrkgCQBxGVyVGIArvan7irwH4MKA1yK8apnpWHwlqtNiZmJDKCfKiTjBbPjGwQsPSsX6pgbC2Ye5NcJe8aSlctpob3NPInxQcGbDwg+WNu2nzVotnUblNMycCaZ2p5aAwfz4F6Ydvwm6r8lpPQSUvJ+03GwcQkHhZsZMrlmelVKtVvntV/UrAESGei5b29aIp4885uo/NwCGvRTgl1bZZWHdtZrn5oxbQCfwsyKDodbAVYCHi7keVxkSeFLh+452d1/eXU9Uq7Xu+u69Ht/p5HQ8L1CK26h72I6mZrwW4YdWRY3aN9HXkn0k/BoGR1Geyl/+AZHh9rblz6pxopZaDRo0qEP+BvWl55SjkS4pAAAAAElFTkSuQmCC" alt=''></img>
                    </div>
                    <div>
                        <h3 className='text-2xl pb-7 text-gray-900'>Delivering Freshness Every Day at a Time</h3>
                        <p className='text-justify'>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.</p>
                    </div>
                </div>
                <div className='lg:w-1/4 md:w-1/2 w-full px-4 mx-10 py-5 mb-7 shadow-md rounded-sm'>
                    <div div className='flex justify-center w-20 mx-auto my-7 p-4'>
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAAGPUlEQVRoge2ZX4xcVR3HP7+7W7bttlUJ00IUg2FNqqQmZZEo2t57J1mafdCmtPOnqW0MIhQpio0RH3yo/En6UIEYjaSkvJil8wdfSNkVgd4zY0sf6MYiER4ESkUftq2l2sK20+X8fNjtOnvnztyZ7t3Yh/0mm5mc3++c7/c759x7zu8szGMe82gFmYtBXZP9PvCYg/xm4cLup0a+NvSfueCphzMXg4pKvyDLFX7x8YWJ414l/3D/0XsXzAXXZcyJEYQ7/veVa1HdveT8v496Qf62OeFjDoz4B7MbgVXhdoGvIHrENbkHk+acGj853PnS1t6LPbW3BD7fmlWeNmtXPoDssklxJzojtYUXdzWYEB5C2D6jTXW7X3n7qSS5EzOSruZuReWhcLugfzNrv/QM8M/6doUHXZO7Pyn+xIxYq48D3Q0BlU3ILitoKaLbnvSruZuT4J9+Rr5x6NtLuycW7RG4a1IAvwf7E+OXz8cN4h/M9KvjHG0S/jCVstefOsntiPOncFDhuYpX3BLHEadvekaumVj8S4F7geuA6xDuA2dPHAGAdjnfbRH+zOkx+erFHkaBiXBQIHPn4a3L4zji9E0bsdj1DQJFN8QRTCbitQyLrD5yR3kc+GtEeEFt4uJgHEWcvmkjgjT8KlFtTfCFVkEVWQ2g0UbAyhfjCOL0JfWw97QWoSkAUc41SVkyWwFJGRlrHdYFACp8FBUV4cxsBSRiROGNlgkiCyY/qEXHtdkbr20kNSPPx8TPAoiyIiJ2Qu3JP85WQCJGlqfsEPBm0wSr7wAo3FjfrGBF9AfGNw2v5U6RiJHyLeWaFbseeDc6Q95BEZ15DhtzRDYEbmk4CQ2JHVGqbvn4pe7x1Qg/B44pfAycVaiKSNqr5D5wRH+syE6FLGr7ArfwQlL8jWejWeDwN184Bzw+9QdMHu1rPbV/gbweuMVhIJEZCKOVkUtiZdALvG5Yfg/IShWGKl7x9U4IatfUfKBH0dc66ZeuZm7/xMoWEXkLO7YP1QFEhoHIkrnp0lLYH6QLr+KseBSR3yL8SOA11+S3diIIh3VTI/6h3S6uyW+11jksyA9Rnha5/hHjl14RKDSnaQJR/gygSrauuVvQZ12Tb+8MBqAMAGfPL/n0oXbSXZPfIOiz1K0WRTMAKtp0v6o3MmPXVeEGAIEToT7dgu53zeaBdoSBnEHZN3rb3ktxma7ZPCDofkJLXtG/A2DlhlCXac3T9YhncseBm+qSPkilbN+pk3wZcarA0vAgih2oeOUjbfmJgWsyXxecl4HeUOgcatcuGj//9vjiZe8Cn70cUHiv4hVvhhmnX8JFz42nTsoTxi8fE6uD0HBO6hWckXQ1d+tsTaytZFaBcyBsQqEmVjPGLx+7sHjZk/UmpjRXL3+fNqIqvyJc+Ig84JvcziBdOoySB8LL41PWMuwFmb4rNeEFmT5HnZcFrg2FLomyMUiXXvJNbqdCuL6fEGt/3WDE+IWjAg+HiRT2+JXs3cYvHkDZphC+wlmBOCNrqplUpybWVDMpxBmBmWcwBYuyzfjFA34le7dCQ6WqyE+DdHm0wQhA4BWfQNkX6iOqstcL8puMXyyAbp/kmoG+LusU0Q7uyRTpsk4JCM+mOiL3G79Y8IL8JlXZS/j+TdlX8QpP1jdFvH4X7UBkNNTYpaJD/sHsuopXekaQ3RHSfM/kvteuD7eSvQcaS2RBdgduYa9/MLtORYeArpkJMgqLdjT2i4AX5G9S0dGIdfuRiGYVZxWqUWZOpVL2c+VbytF1xxQGhwd7xhcv+weTFwkhRfIzwb6pKiUaH/4zotJv/ML74W6RG6LxC++Lag74JBTqVZUXm5gASJ0ek2+1MgFwoXfp+kgTAKq7VeXFCBMW+E6UCWixsxu/9Aoqj8WJatDRJZtjcybfgB1BVB6teMWRZvGWx3jjrXwEaNo5Ekp/fIrE5oQwMqWlKVrXI7LLTnR1bVF4rwPS8DGicVgiS95mOIE62+Ju7mMLq0NrnvvQsdwFjLdJ3PJqqIMcgAti7Ubj7z8dl9hWhRiki28ocl+b5MlBZEf9ptcKbZe6Fa/wuytXdGUwbiG8OTfF3PwP8f+AeSNXG+aNXG3o1Ejza9GEcxT+0sY487hq8V+FUTIvXER7sQAAAABJRU5ErkJggg=="alt=''></img>
                    </div>
                    <div>
                        <h3 className='text-2xl pb-7 text-gray-900'>We Take Sustainability Seriously</h3>
                        <p className='text-justify'>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font..</p>
                        <p>This is a great space to write a long text about your company and your services. You can use this space to go into a little more detail about your company.</p>
                    </div>
                </div>
                <div className='lg:w-1/4 md:w-1/2 w-full px-4 mx-10 py-5 mb-7 shadow-md rounded-sm border'>
                    <div div className='flex justify-center w-20 mx-auto my-7 p-4'>
<img src="data:image/png;base64,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" alt=''></img>                    </div>
                    <div>
                        <h3 className='text-2xl pb-7 text-gray-900'>Supporting Local Products</h3>
                        <p className='text-justify'>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.</p>
                    </div>
                </div>
            </div>
            <div className='flex justify-center items-center' id='fixed-image'>
                <div className='text-white md:text-start w-full md:w-[50%] pb-5'>
                    <h3 className='text-2xl'>Subscribe and get</h3>
                    <h1 className='text-8xl'>20% <span className='text-xl'>off</span></h1>
                    <h3 className='text-xl'>Your next purchase</h3>
                    <form action="" className='my-5'>
                        <input className='w-[95%] md:w-[50%] h-[8vh] px-5 rounded-xl hover:bg-lime-600 hover:text-white hover:placeholder:text-white' type="email" name="" id="" placeholder='Enter email'/>
                        <button type='submit' className=' md:ml-5 px-10 py-3 mt-10 rounded-2xl border hover:border-0 hover:bg-lime-600'>Send</button>
                    </form>
                </div>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default About;