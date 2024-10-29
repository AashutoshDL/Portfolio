import React from 'react'
import { FaEnvelope, FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'

const Hero = () => {
  return (
    <div className='bg-background text-white font-Kanit flex flex-col items-center mt-24 mb-36'>
        <div className='mr-96 '>
        <p className='mr-80 text-2xl'>i am</p>
        </div>
        <div className='flex flex-col items-center'>
        <h1 className='text-9xl tracking-wide font-bold border-b-2 pb-2 transform transition-transform duration-300 hover:scale-105'>AASHUTOSH</h1>
        </div>
        <div className='ml-96 text-4xl font-bold tracking-wider'>
        <h6 className='ml-64 mt-8'>DAHAL</h6>
        </div>
        <div className='mt-10 text-3xl border-b-2 pb-2'>
          <p>SOFTWARE ENGINEER</p>
        </div>
        {/* <div className='mr-96'>
        <p className='mr-96 text-2xl -rotate-12 -mb-24'>CLICK HERE</p>
        </div> */}
        <div className='flex flex-row mt-32 gap-24'>
          <a 
            href='https://x.com/AashutoshDL'
            target='_blank'
            rel="noopener noreferrer" 
            aria-label="Twitter"
          >
          <FaTwitter className='text-4xl transform transition-transform duration-300 hover:scale-125'/>
          </a>
          <a            
            href='https://www.linkedin.com/in/aashutosh-dahal/'
            target='_blank'
            rel="noopener noreferrer" 
            aria-label="LinkedIn">
          <FaLinkedin className='text-4xl transform transition-transform duration-300 hover:scale-125'/>
          </a>
          <a            
            href='https://github.com/AashutoshDL'
            target='_blank'
            rel="noopener noreferrer" 
            aria-label="Github">
          <FaGithub className='text-4xl transform transition-transform duration-300 hover:scale-125'/>
          </a>
          <a            
            href='mailto:aashudahal11@gmail.com'
            target='_blank'
            rel="noopener noreferrer" 
            aria-label="Gmail">
          <FaEnvelope className='text-4xl transform transition-transform duration-300 hover:scale-125'/>
          </a>
        </div>
    </div>
  )
}

export default Hero
