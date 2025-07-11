import {assets} from '../assets/assets'

const About = () => {
  return (

    <div className='overflow-hidden flex flex-col items-center justify-center container mx-auto py-20 px-6 md:px-20 lg:px-32 text-center bg-gray-100' id='About'> 
    <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2'>
        About<span className='underline underline-offset-4 decoration-1 under font-light'>Our Brand</span>
    </h1>  
    <p className='text-gray-500 max-2-80 text-center mb-8'>Dedicated to our goal of providing everyone affordable and beautiful housing options.</p>
    <div className='flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16'>
        <img src={assets.brand_img} alt='' className='w-full sm:w-1/2 max-w-lg' />
        <div className='flex flex-col items-center md:items-start mt-10 text-gray-600'>
            <div className='grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28'>
                <div>
                    <p className='text-4xl font-bold text-gray-800'>10+</p>
                    <p>Years of Experience</p>
                </div>
                <div>
                    <p className='text-4xl font-bold text-gray-800'>12+</p>
                    <p>Projects Completed</p>
                </div>
                <div>
                    <p className='text-4xl font-bold text-gray-800'>20+</p>
                    <p> Min Sqft. delivered</p>
                </div>
                <div>
                    <p className='text-4xl font-bold text-gray-800'>15+</p>
                    <p>Ongoing Projects</p>
                </div>
            </div>
            <p className='my-10 max-w-lg text-justify mx-auto'>We are committed to transforming dreams into reality by delivering high-quality, affordable, and beautiful homes. With a passion for excellence and a focus on customer satisfaction, we have helped countless families and businesses find their perfect space. Our dedication to innovation, transparency, and integrity sets us apart in the real estate industry, ensuring every project is built to the highest standards and tailored to your needs.</p>
            <div className='flex justify-center w-full'>
              <button className='bg-black text-white px-8 py-2 rounded-md'>Learn more</button>
            </div>
        </div>
    </div>
    </div>

  )
}

export default About
