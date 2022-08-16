import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import {Link} from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <div className="bg-gray-00">
        <div className="md:w-[80%] md:h-[8vh] mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
            <div className="text-white text-xs">
              <h4 className='text-xs text-gray-400 hidden md:hidden-none'>delivery to <span>lagos street, kubwa..</span></h4>
              <h4 className='md:inline-block text-xs text-gray-400 pt-1'> call Us for any query or help <span>. 004 0334 7002</span></h4>
            </div>
            <div className="">
              <select className='ml-3 text-xs p-2 rounded-md hover:border-0 hover:bg-[#84cc16] text-gray-800 hover:text-white' name='english' id='english'>
                <option value="english">English</option>
                <option value="spanish">Spanish</option>
                <option value="french">French</option>
                <option value="german">German</option> 
              </select>
              <select className='ml-3 text-sm p-2 rounded-md border hover:border-0 hover:bg-[#84cc16] text-gray-800 hover:text-white' name="money" id="money">
                <option value="ngn">NGN</option>
                <option value="usd">USD</option>
                <option value="eur">EUR</option>
                <option value="jpy">JPY</option>
              </select>
            </div>
        </div>
      </div>
      <nav className="bg-lime-600 w-full">
        <div className="max-w-7xl flex mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-16">
            <div className="flex items-center">
              <div className="flex items-center">           
                <img className="w-[50px]" src="data:image/png;base64,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" alt=""></img>
                <h2 className="text-2xl md:text-4xl ml-2">Grocs<span className="text-white">House</span></h2>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4 md:w-[50%] bor">
                  <Link to="/" className=" hojustify-between ver:bg-lime-700 text-white px-3 py-2 rounded-md text-sm font-medium">
                    HOME
                  </Link>

                  <Link to="/shop" className="text-gray-300 hover:bg-lime-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                    SHOP
                  </Link>

                  <Link to="/About" className="text-gray-300 hover:bg-lime-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                    ABOUT
                  </Link>

                  <Link to="/Contact" className="text-gray-300 hover:bg-lime-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                    CONTACT
                  </Link>

                  <Link to="/" className="text-gray-300 hover:bg-lime-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                    Reports
                  </Link>
                </div>
                {/* <div className="">

                </div> */}
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <Link href="/" className="hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium">
                  Dashboard
                </Link>

                <Link href="/shop" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                  Team
                </Link>

                <Link href="/about" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                  Projects
                </Link>

                <Link href="/" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium" >
                  Calendar
                </Link>

                <Link href="/" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium" >
                  Reports
                </Link>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
}

export default Navbar;