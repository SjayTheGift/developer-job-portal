import { useEffect, useState } from 'react'
import {FaLinkedin, FaGithub, FaFileDownload} from 'react-icons/fa'
import { Link } from 'react-router-dom';

const Hero = () => {

  return (
    <section id='about' className='h-screen py-16 text-white max-w-[100%]'>
        <div className='m-auto grid md:grid-cols-2'>
            <div className='bg-emerald-600 h-96  md:h-screen w-full flex flex-col items-center justify-center'>
                <h1 className='text-3xl sm:text-4xl md:text-6xl font-bold text-center mb-6'>Hire developers</h1>
                <Link to="/register/company" className='rounded-md px-6 py-3 bg-white hover:scale-110 ease-in duration-300 text-emerald-600 text-xl md:text-3xl '>Sign Up</Link>
            </div>
            
            <div className='dark:bg-gray-900 h-96 md:h-screen w-full text-white flex flex-col items-center justify-center'>
                <h1 className='text-3xl sm:text-4xl md:text-6xl font-bold text-center mb-6'>Find a dev job</h1>
                <Link to="/register/developer" className='rounded-md px-6 py-3 bg-emerald-600 hover:scale-110 ease-in duration-300 text-white text-xl md:text-3xl'>Sign Up</Link>
            </div>
            
        </div>     

        {/* <div className='w-[80%] m-auto flex flex-col items-center justify-center text-black'>
            <h1 className='py-4 text-2xl sm:text-3xl md:text-4xl xl:text-5xl text-center text-red-600'>
                Find a developer 
            </h1>
            <p className='py-2 text-center text-1xl sm:text-2xl md:text-3xl'>
                FindDev is a job marketplace that helps companies hire developers. App also help job seek developers by providing the companies with developers 
                information on skills, role, and yes, even salary.
            </p>
        </div> */}

 
    </section>
  )
}

export default Hero



