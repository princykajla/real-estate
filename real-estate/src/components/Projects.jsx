import React from 'react'
import { assets, projectsData } from '../assets/assets'

const Projects = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [cardsToShow, setCardsToShow] = React.useState(1);
  const nextProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projectsData.length);
  }
  const prevProject = () => {
    setCurrentIndex((prevIndex) => prevIndex === 0 ? projectsData.length - 1 : prevIndex - 1);
  }

  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setCardsToShow(4);
      } else if (window.innerWidth >= 768) {
        setCardsToShow(2);
      } else {
        setCardsToShow(1);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (

    <div className="container mx-auto py-4 pt-20 px-6 md:px-20 lg:px-32 my-20 w-full overflow-hidden" id='Projects'>
      <h1 className='text-2xl sm:text-4x font-bold mb-2 text-center'>Projects <span
      className='underline underline-offset-4 decoration-1 under font-light'>Completed</span></h1>
      <p className='text-center text-gray-500 mb-8 max-w-80 mx-auto'>Crafting Spaces, Building Legacies - Explore Our Portfolio</p>

      {/** slider buttons :DD **/}

      <div className='flex justify-end items-center mb-8'>
        <button onClick={prevProject} 
        className='p-3 bg-gray-200 rounded mr-2' aria-label='Previous Project'>
          <img src={assets.left_arrow} alt="Previous"/>
        </button>
        <button onClick={nextProject}
        className='p-3 bg-gray-200 rounded mr-2' aria-label='Next Project'>
          <img src={assets.right_arrow} alt="Next"/>
        </button>
      </div>

      {/** project slider container **/}

      <div className='overflow-hidden'>
        <div className='flex gap-8 transition-transform duration-500 ease-in-out'>
          {projectsData.slice(currentIndex, currentIndex + cardsToShow).map((project, index) => (
            <div key={index} className='relative flex-shrink-0 w-full sm:w-1/2 lg:w-1/4'>
              <img src={project.image} alt={project.title} className='w-full h-64 object-cover rounded-lg mb-4' />
              <div className='left-0 right-0 absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300'>
                <div className='p-4 items-center text-center'>
                  <h2 className='text-xl font-bold text-white'>
                    {project.title}
                  </h2>
                  <p className='items-center text-gray-300 mt-2'>
                    {project.price} <span className='text-gray-300'>- {project.location}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}

export default Projects
