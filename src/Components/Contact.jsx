import React from 'react'
import ButtonMailto from './Email'

function Contact() {
  return (
    <div className='text-[#4bb3f8] p-20 text-center font-semibold'>
        <h3 className='font-bold text-3xl'>Contact</h3>
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