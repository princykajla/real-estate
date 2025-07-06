import React from 'react'
import { assets } from '../assets/assets'
import { testimonialsData } from '../assets/assets'

const Testimonials = () => {
  return (
    <div className='container mx-auto py-10 lg:px-32 px-6 md:px-20 text-center overflow-hidden' id='Testimonials'>
      <h1 className='text-2xl sm:text-4xl font-bold mb-2'>Customer <span className='underline underline-offset-4 decoration-1 under font-light'>Testimonials</span></h1>
      <p className='text-gray-500 text-center mb-12 max-w-80 mx-auto'>What our clients say about us</p>

      <div className='flex flex-wrap justify-center items-center gap-8'>
        {testimonialsData.map((testimonial, index) => (
          <div key={index} className='mb-8 w-[260px] h-[320px] flex flex-col justify-between border shadow-lg rounded-lg p-4 bg-white'>
            <img className='w-16 h-16 rounded-full mx-auto mb-2'
            src={testimonial.image} alt={testimonial.name} />
            <h2 className='text-lg font-semibold'>{testimonial.name}</h2>
            <p className='text-sm text-gray-500'>{testimonial.title}</p>
            <div className='flex flex-row justify-center mt-2'>
              {Array.from({ length: testimonial.rating }, (item, index) => (
                <img key={index} src={assets.star_icon} className='text-yellow-500 w-4 h-4' alt='star' />
              ))}
            </div>
            <p className='text-gray-600 mt-2 text-sm line-clamp-4'>{testimonial.text}</p>
          </div>
        ))}
      </div>

    </div>
  )
}

export default Testimonials
