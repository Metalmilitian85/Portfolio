import React from 'react'

function Skills() {
  return (
    <div>
        <h2>Skills</h2>
            <p className='p-10 text-[#4bb3f8] text-center font-bold'>The skills that I have acquired are in HTML, CSS, JS, REACT, and TAILWIND CSS. 
            Always willing to learn more/refine what I already know, and ready to welcome more skills 
            as they come.
            </p>
          <div className='w-40 m-auto flex flex-col'>
            <a href="https://developer.mozilla.org/en-US/docs/Glossary/HTML5">
              <img className='h-40 w-40 mb-5 hover:opacity-80 opacity-1' src="./html.jpg" /></a>
            <a href="https://developer.mozilla.org/en-US/docs/Web/CSS">
              <img className='h-40 w-40 mb-5 hover:opacity-80 opacity-1' src="./css.jpg" /></a>
            <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">
              <img className='h-40 w-40 mb-5 hover:opacity-80 opacity-1' src="./js.jpg" /></a>
            <a href="https://www.react.dev">
              <img className='h-40 w-40 mb-5 hover:opacity-80 opacity-1' src="./reactjs.jpg" /></a>
            <a href="https://tailwindcss.com">
              <img className='h-40 w-40 mb-5 hover:opacity-80 opacity-1' src="./tailwindcss.jpg" /></a>
          </div>
    </div>
  )
}

export default Skills