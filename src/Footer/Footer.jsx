import React from 'react'
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa6";

const Footer = () => {
  return (
<div className='bg-gray-900 mt-10'>
      <div className='px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-4'>
        <div className='grid mb-8 lg:grid-cols-6'>
          <div className='grid grid-cols-2 gap-5 lg:col-span-4 md:grid-cols-4'>
            {/* Category 1 */}
            <div>
              <p className='font-medium tracking-wide text-green-300'>Company</p>
              <ul className='mt-2 space-y-2'>
                <li>
                  <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-green-500'>About us</a>
                </li>
                <li>
                  <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-green-500'>Blog</a>
                </li>
                <li>
                  <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-green-500'>Contact us</a>
                </li>
                <li>
                  <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-green-500'>Pricing</a>
                </li>
              </ul>
              </div>
              {/* Category 2 */}
              <div>
              <p className='font-medium tracking-wide text-green-300'>Support</p>
              <ul className='mt-2 space-y-2'>
                <li>
                  <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-green-500'>Help center</a>
                </li>
                <li>
                  <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-green-500'>Terms of service</a>
                </li>
                <li>
                  <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-green-500'>Legal</a>
                </li>
                <li>
                  <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-green-500'>Privacy policy</a>
                </li>
                <li>
                  <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-green-500'>Status</a>
                </li>
              </ul>
              </div>
              {/* Category 3 */}
              <div>
              <p className='font-medium tracking-wide text-green-300'>Personalization</p>
              <ul className='mt-2 space-y-2'>
                <li>
                  <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-green-500'>Media</a>
                </li>
                <li>
                  <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-green-500'>Publication</a>
                </li>
                <li>
                  <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-green-500'>Education</a>
                </li>
                <li>
                  <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-green-500'>Politics</a>
                </li>
              </ul>
              </div>
          </div>
          {/* Category 5 */}
          <div className='md:max-w-md lg:col-span-2 lg:mt-0 mt-5'>
              <p className='font-medium tracking-wide text-green-300'>Subscribe for updates</p>
              <form className='mt-4 flex flex-col md:flex-row'>
                <input type="email" id='email' className='flex-grow w-full h-12 px-4 mb-3 transiti duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none md:mr-2 md:mb-0 focus:border-green-400 focus:outline-none' />
                <button type='sumbit' className='inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md hover:bg-green-300 focus:outline-none border'>
                  Subscribe
                </button>
              </form>
              <p className='mt-4 text-sm text-gray-500'>Lorem ipsum dolor sit amet consectetur adipsicing ekit. Sunt nisicumque voluptas. Fuga optio aut saepe voluptas adipisci tempribus ducimus omnis explicabo consequuntur! Id dolores corrupti nemo? Ducimus, quidem odio?</p>
              </div>
        </div>

        <div className='flex flex-col justify-between pt-5 pb-10 border-t border-gray-800 sm:flex-row'>
          <p className='text-sm text-gray-50'><span className='text-lg text-green-300'>© </span>Copyright 2025 | All right reserved.</p>
          <div className='flex items-center mt-4 space-x-4 sm:m-0'>
            <a href="https://www.instagram.com/dtech.services?igsh=Y3VODJsN3oza2dy&utm_source=qr" className='text-gray-500 transition-all duration-300 hover:text-purple-400'><FaInstagram className='h-6 w-6'/></a>
            <a href="https://www.linkedin.com/in/davies-david-7a461a257?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" className='text-gray-500 transition-all duration-300 hover:text-purple-400'><FaLinkedin className='h-6 w-6'/></a>
            <a href="https://github.com/Dayveesptf" className='text-gray-500 transition-all duration-300 hover:text-purple-400'><FaGithub className='h-6 w-6'/></a>
          </div>
        </div>
      </div>
    </div>  )
}

export default Footer