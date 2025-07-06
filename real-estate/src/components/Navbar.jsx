import React from 'react'
import {assets} from '../assets/assets'

const Navbar = () => {
    const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  return (

    <div className='absolute top-0 left-0 w-full z-10'>
        
      <div className='container mx-auto flex justify-between items-center py-2 px-4 md:py-4 md:px-20 lg:px-32 bg-transparent'>
        <img src={assets.logo} alt="logo" className='md:mr-16 mr-8'/>
        <div className='flex items-center md:mx-12 flex-1'>
          <ul className='hidden md:flex gap-6 text-white flex-1 justify-center'>
              <a href="#Header" className='cursor-pointer hover:text-gray-400'>
                  Home</a>
              <a href="#About" className='cursor-pointer hover:text-gray-400'>
                  About</a>
              <a href="#Projects" className='cursor-pointer hover:text-gray-400'>
                  Projects</a>
              <a href="#Testimonials" className='cursor-pointer hover:text-gray-400'>
                  Testimonials</a>
          </ul>
        </div>
        <button className='hidden md:block bg=white px-8 py-2 rounded-full text-white md:ml-16 ml-12'>
            Sign up
        </button>
        <img onClick={() => setShowMobileMenu(true)} src={assets.menu_icon} className='md:hidden w-7 cursor-pointer' alt="menu icon"/>
      </div>

      {/* mobile menu ;D */}
      {showMobileMenu && (
        <div 
          className='md:hidden text-white fixed w-full right-0 top-0 bottom-0 overflow-hidden transition-transform duration-300 ease-in-out bg-cover bg-center' 
          style={{
            backgroundImage: `url(${assets.header_bg})`,
            transform: showMobileMenu ? 'translateY(0)' : 'translateY(-100%)',
          }}
        >
          <div 
            className='flex justify-end p-6 cursor-pointer bg-black bg-opacity-70 rounded-b-lg shadow-lg' 
            onClick={() => setShowMobileMenu(false)}
          >
              <img src={assets.cross_icon} className='w-6 filter invert hover:scale-110 transition-transform duration-200' alt="close menu" />
          </div>
          <ul className='flex flex-col items-center justify-center h-full gap-6 bg-black bg-opacity-70 text-white'>
              <a onClick={() => setShowMobileMenu(false)} className='cursor-pointer hover:text-gray-400 border border-white px-4 py-2 rounded-full inline-block' href="#Header">Home</a>
              <a onClick={() => setShowMobileMenu(false)} className='cursor-pointer hover:text-gray-400 border border-white px-4 py-2 rounded-full inline-block' href="#About">About</a>
              <a onClick={() => setShowMobileMenu(false)} className='cursor-pointer hover:text-gray-400 border border-white px-4 py-2 rounded-full inline-block' href="#Projects">Projects</a>
              <a onClick={() => setShowMobileMenu(false)} className='cursor-pointer hover:text-gray-400 border border-white px-4 py-2 rounded-full inline-block' href="#Testimonials">Testimonials</a>
          </ul>
        </div>
      )}

    </div>
  )
}

export default Navbar
