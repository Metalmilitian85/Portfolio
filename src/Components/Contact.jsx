import React from 'react'
import ButtonMailto from './Email'

function Contact() {
  return (
    <div className='text-[#4bb3f8] p-5 text-center font-semibold'>
        <h1 className="w-full text-2xl font-bold text-center text-[#4bb3f8] hover:scale-105 duration-300 mb-10">CONTACT</h1>
          <div className='flex justify-center space-x-3 p-2'>
            <img className='h-6 -z-10 rounded-full' src="./emailicon.png" />
            <button onClick={() => window.location = 'mailto:timward1985@gmail.com'}>timward1985@gmail.com</button>
          </div>
          <div className='flex justify-center p-2 space-x-3'>
            <img className='h-6 -z-10' src="./linkedin.png" />
            <a href="https://www.linkedin.com/in/tim-ward-827b111ab/">Linked In</a>
          </div>
          <div className='flex justify-center p-2 space-x-3'>
            <img className='h-6 -z-10 rounded-full' src="./phone.jpg" />
            <a href="tel:9132310183">913-231-0183</a>
          </div>
    </div>
  )
}

export default Contact