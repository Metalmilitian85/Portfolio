import React from 'react'
import './index.css'
import Navbar from './Components/Navbar'

function App() {

  return (
    <>
      <Navbar />
      <div>
      <h1 className='font-bold text-3xl text-center text-[#4bb3f8] pt-20'>
        Hello there and welcome to my Portfolio!</h1>
      </div>
      <div className='text-[#4bb3f8] p-20 text-center'>
        <p className='p-10'>Greetings! My name is Tim Ward and I'm an aspiring Front-End Developer!</p>
        <p className='p-10'>The skills that I have acquired are in HTML, CSS, JS, REACT, and TAILWIND CSS. 
          Always willing to learn more/refine what I already know, and ready to welcome more skills 
          as they come.
        </p>
        <p className='p-10 animate-bounce'>Projects</p>
        <div>
        <h3 className='font-bold text-3xl'>Contact</h3>
          <div className='flex justify-center space-x-4'>
            <img className='h-6 animate-spin' src="./emailicon.png" />
            <p> timward1985@gmail.com</p>
          </div>
          <p className='animate-type'>Linked-In</p>
          <p>Phone</p>
        </div>
      </div>
    </>
  )
}

export default App
