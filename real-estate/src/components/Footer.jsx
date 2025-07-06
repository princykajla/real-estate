import React from 'react'
import { assets } from '../assets/assets'
import { toast } from 'react-toastify';

const Footer = () => {
  return (
    <div className='pt-10 px-4 md:px-20 lg:px-32 w-full bg-gray-900 overflow-hidden' id='Footer'>
      <div className='container mx-auto flex flex-col md:flex-row justify-between items-left text-white py-8'>
        <div className='w-full md:w-1/3 text-center'>
            <img src={assets.logo_dark}/>
            <p className='text-gray-300 mt-4 text-left'>© 2023 Real Estate. All rights reserved.</p>
        </div>
        <div className='w-full md:w-1/3 text-center mt-8 md:mt-0'>
            <h3 className='text-white text-lg font-bold mb-4'>Company</h3>
            <ul className='flex flex-col gap-2 text-gray-300'>
                <li><a className='hover:text-white' href="#Header">Home</a></li>
                <li><a className='hover:text-white' href="#About">About</a></li>
                <li><a className='hover:text-white' href="#Projects">Projects</a></li>
                <li><a className='hover:text-white' href="#Testimonials">Testimonials</a></li>
                <li><a className='hover:text-white' href="#Contact">Contact</a></li>
            </ul>
        </div>
        <div className='w-full md:w-1/3 text-center mt-8 md:mt-0'>
            <h3 className='text-white text-lg font-bold mb-4'>Subscribe to our newsletter</h3>
            <div className='flex justify-center gap-4'>
                <input type="email" placeholder="Your Email" className='p-3 border border-gray-700 rounded w-2/3 text-gray-900 bg-white placeholder-gray-500' id="footer-email" />
                <button
                  className='bg-white text-gray-900 px-4 py-2 rounded'
                  onClick={(e) => {
                    e.preventDefault();
                    const email = document.getElementById('footer-email').value;
                    if (email) {
                      toast.success('Subscribed successfully!');
                    } else {
                      toast.error('Please enter a valid email.');
                    }
                  }}
                >Subscribe</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
