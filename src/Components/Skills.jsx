import React from 'react'

function Skills() {
  return (
    <div id="Skills" className="text-black pt-8 border-8 rounded-lg border-sky-600 mx-3 bg-sky-300">
                <h1 className="w-full text-2xl text-center font-bold hover:scale-105 duration-300">SKILLS</h1>
            <p className='py-7 text-center font-bold md:text-lg mx-24'>The skills that I have acquired are in HTML, CSS, JS, REACT, and TAILWIND CSS. 
            Always willing to learn more/refine what I already know, and ready to welcome more skills 
            as they come.
            </p>
          <div className='flex flex-wrap justify-center'>
            <a href="https://www.react.dev" target="_blank">
              <img className='mx-12 h-40 w-40 mb-5 hover:opacity-80 opacity-1 border-4 hover:scale-105 duration-300 rounded-lg border-sky-400' src="./reactjs.jpg" /></a>
            <a href="https://tailwindcss.com" target="_blank">
              <img className='mx-12 h-40 w-40 mb-5 hover:opacity-80 opacity-1 border-4 hover:scale-105 duration-300 rounded-lg border-teal-600' src="./tailwindcss.jpg" /></a>
            <a href="https://developer.mozilla.org/en-US/docs/Glossary/HTML5" target="_blank">
              <img className='mx-12 h-40 w-40 mb-5 hover:opacity-80 opacity-1 border-4 hover:scale-105 duration-300 rounded-lg border-[#c78c7b]' src="./html.jpg" /></a>
            <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank">
              <img className='mx-12 h-40 w-40 mb-5 hover:opacity-80 opacity-1 border-4 hover:scale-105 duration-300 rounded-lg border-sky-300' src="./css.jpg" /></a>
            <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
              <img className='mx-12 h-40 w-40 mb-5 hover:opacity-80 opacity-1 border-4 hover:scale-105 duration-300 rounded-lg border-yellow-200' src="./js.jpg" /></a>
          </div>
    </div>
  )
}

export default Skills