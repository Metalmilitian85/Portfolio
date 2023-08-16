import React, { useEffect } from 'react'
import Aos from 'aos'

function Skills() {

  useEffect(() => {
    Aos.init();
}, [])

  return (
    <div id="Skills" className="text-white pt-8 border-2 bg-opacity-75 rounded-lg border-sky-600 border-t-0 bg-gray-800 mx-auto shadow-xl shadow-cyan-500 md:max-w-[90%]">
                <h1 className="w-full text-2xl text-center font-bold hover:scale-105 duration-300">SKILLS</h1>
            <p className='py-7 text-center font-bold md:text-lg mx-24'>The skills that I have acquired are in HTML, CSS, JS, REACT, and TAILWIND CSS. 
            Always willing to learn more/refine what I already know, and ready to welcome more skills 
            as they come.
            </p>
        <div className='hide flex flex-wrap justify-center mb-7'>
          <div className="logo" >
            <a href="https://www.react.dev" target="_blank">
              <img className='mx-12 h-40 w-40 mb-5 hover:opacity-80 opacity-1 border-4 hover:scale-105 duration-300 rounded-lg border-sky-400' src="./reactjs.jpg" data-aos="fade-right" /></a>
          </div>
          <div className="logo">
            <a href="https://tailwindcss.com" target="_blank">
              <img className='mx-12 h-40 w-40 mb-5 hover:opacity-80 opacity-1 border-4 hover:scale-105 duration-300 rounded-lg border-teal-600' src="./tailwindcss.jpg" data-aos="fade-right"/></a>
          </div>
          <div className="logo">
            <a href="https://developer.mozilla.org/en-US/docs/Glossary/HTML5" target="_blank">
              <img className='mx-12 h-40 w-40 mb-5 hover:opacity-80 opacity-1 border-4 hover:scale-105 duration-300 rounded-lg border-[#c78c7b]' src="./html.jpg" data-aos="fade-right"/></a>
          </div>
          <div className="logo">
            <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank">
              <img className='mx-12 h-40 w-40 mb-5 hover:opacity-80 opacity-1 border-4 hover:scale-105 duration-300 rounded-lg border-sky-300' src="./css.jpg" data-aos="fade-right"/></a>
          </div>
          <div className="logo">
            <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
              <img className='mx-12 h-40 w-40 mb-5 hover:opacity-80 opacity-1 border-4 hover:scale-105 duration-300 rounded-lg border-yellow-200' src="./js.jpg" data-aos="fade-right"/></a>
          </div>
          <div className="logo">
            <a href="https://www.github.com" target="_blank">
              <img className='mx-12 h-40 w-40 mb-5 hover:opacity-80 opacity-1 border-4 hover:scale-105 duration-300 rounded-lg border-gray-400' src="./githublogo.jpg" data-aos="fade-right"/></a>
          </div>
        </div>
    </div>
  )
}

export default Skills