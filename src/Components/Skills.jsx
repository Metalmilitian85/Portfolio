import React from 'react'

function Skills() {
  return (
    <div>
                <h1 className="w-full text-2xl text-center pt-32 font-bold text-[#4bb3f8] hover:scale-105 duration-300">SKILLS</h1>
            <p className='p-10 text-[#4bb3f8] text-center font-bold md:text-lg'>The skills that I have acquired are in HTML, CSS, JS, REACT, and TAILWIND CSS. 
            Always willing to learn more/refine what I already know, and ready to welcome more skills 
            as they come.
            </p>
          <div className='flex flex-wrap w-40 m-auto'>
            <a href="https://www.react.dev" target="_blank">
              <img className='h-40 w-40 mb-5 hover:opacity-80 opacity-1 border-4 hover:scale-105 duration-300 rounded-lg border-sky-400' src="./reactjs.jpg" /></a>
            <a href="https://tailwindcss.com" target="_blank">
              <img className='h-40 w-40 mb-5 hover:opacity-80 opacity-1 border-4 hover:scale-105 duration-300 rounded-lg border-teal-600' src="./tailwindcss.jpg" /></a>
            <a href="https://developer.mozilla.org/en-US/docs/Glossary/HTML5" target="_blank">
              <img className='h-40 w-40 mb-5 hover:opacity-80 opacity-1 border-4 hover:scale-105 duration-300 rounded-lg border-[#c78c7b]' src="./html.jpg" /></a>
            <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank">
              <img className='h-40 w-40 mb-5 hover:opacity-80 opacity-1 border-4 hover:scale-105 duration-300 rounded-lg border-sky-300' src="./css.jpg" /></a>
            <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
              <img className='h-40 w-40 mb-5 hover:opacity-80 opacity-1 border-4 hover:scale-105 duration-300 rounded-lg border-yellow-200' src="./js.jpg" /></a>
          </div>
    </div>
  )
}

export default Skills