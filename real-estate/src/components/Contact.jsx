import React from 'react'
import { toast } from 'react-toastify';

const Contact = () => {
    const handleSubmit = (e) => {
    e.preventDefault();
    toast.success('Message sent!');
    
  };
  return (
    <div className='text-center p-6 py-20 lg:px-32 w-full overflow-hidden' id='Contact'>
      <h1 className='text-2xl sm:text-4xl font-bold mb-2'>Contact <span 
      className='underline underline-offset-4 decoration-1 under font-light'>Us!</span></h1>
      <p className='text-gray-500 text-center mb-8 max-w-80 mx-auto'>
        We are here to help you find your dream home. Contact us today!
      </p>
      <form className='max-w-lg mx-auto' onSubmit={handleSubmit}>
        <input type="text" placeholder="Your Name" className='w-full p-3 mb-4 border border-gray-300 rounded' required />
        <input type="email" placeholder="Your Email" className='w-full p-3 mb-4 border border-gray-300 rounded' required />
        <textarea placeholder="Your Message" className='w-full p-3 mb-4 border border-gray-300 rounded' rows="5" required></textarea>
        <button type="submit" className='bg-black text-white px-8 py-2 rounded-md'>Send Message</button>
      </form>
    </div>
  )
}

export default Contact
