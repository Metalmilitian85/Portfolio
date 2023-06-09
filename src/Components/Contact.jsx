import React from 'react'

function Contact() {
  return (
    <div className='text-[#4bb3f8] p-20 text-center'>
        <h3 className='font-bold text-3xl'>Contact</h3>
          <div className='flex justify-center space-x-4'>
            <img className='h-6 animate-spin -z-10' src="./emailicon.png" />
            <p> timward1985@gmail.com</p>
          </div>
          <p className='animate-type'>Linked-In</p>
          <p>Phone</p>
    </div>
  )
}

export default Contact