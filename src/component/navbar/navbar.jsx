import React from 'react';
import './navbar.css';
// import './script.js';

function Navbar() {
  function gantiShape() {
    const burger = document.querySelector('#burger');
    const navMenu = document.querySelector('#nav-menu');
    burger.addEventListener('click', function () {
      burger.classList.toggle('Hamburger-active');
      navMenu.classList.toggle('hidden');
    });
  }
  return (
    <div>
      <div
        id="header"
        className="bg-transparent fixed top-0 left-0 w-full flex z-10"
      >
        <div className="container">
          <div className="flex justify-between items-center relative">
            <div className="px-7 py-4">
              <a href="#" className="font-bold text-lg font-mulish lg:mx-20 ">
                Finmod.id
              </a>
            </div>
            <div className="flex justify-end mx-5 lg:mx-10 xl:mx-16 ">
              <button
                id="burger"
                name="burger"
                className="block absolute right-10 lg:hidden md:-mx-32 top-5"
                onClick={gantiShape}
              >
                <span className="Hamburger-line origin-top-left transition duration-300 ease-in-out"></span>
                <span className="Hamburger-line transition duration-300 ease-in-out"></span>
                <span className="Hamburger-line origin-bottom-left transition duration-300 ease-in-out"></span>
              </button>
              <nav
                id="nav-menu"
                className="hidden lg:block absolute lg:static lg:bg-transparent py-5 bg-white shadow-lg lg:shadow-none rounded-lg lg:rounded-none max-w-[250px] lg:max-w-full w-full right-4 top-full"
              >
                <ul className="block lg:flex">
                  <li className="group">
                    <a
                      href="#"
                      className="text-base text-black py-2 mx-8 group-hover:text-teal-400  flex"
                    >
                      Home
                    </a>
                  </li>
                  <li className="group">
                    <a
                      href="#"
                      className="text-base text-black py-2 mx-8 group-hover:text-teal-400 flex"
                    >
                      About
                    </a>
                  </li>
                  <li className="group">
                    <a
                      href="#"
                      className="text-base text-black py-2 mx-8 group-hover:text-teal-400 flex"
                    >
                      Pricing
                    </a>
                  </li>
                  <li className="group">
                    <a
                      href="#"
                      className="text-base text-black py-2 mx-8 group-hover:text-teal-400 flex"
                    >
                      Login
                    </a>
                  </li>
                  <button className="bg-white rounded-full hover:bg-teal-400  hover:text-white py-2 px-4 border transition duration-300 ease-in-out">
                    Sign In
                  </button>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
