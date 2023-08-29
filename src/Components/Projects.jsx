import Aos from 'aos'
import React, { useEffect } from 'react'

function Projects() {

  useEffect(() => {
    Aos.init();
  })

  return (
    <div id="Projects" className="text-center pt-7 text-black border-2 rounded-lg border-gray-500 bg-black w-[80%] mx-auto my-12 shadow-xl shadow-gray-300 md:max-w-[60%]">
        <h1 className="w-full text-2xl font-bold text-center text-[#4bb3f8] hover:scale-105 duration-300 mb-10">PROJECTS</h1>
        <div>
          <a href="https://briansburgers.netlify.app/" target="_blank" className="burgers" >Brian's Burger Bash
            <img src="burgerbash.jpg" className="mx-auto max-w-[40%] min-h-[130px] max-h-[300px] border-4 rounded-xl border-red-600 mt-4 mb-20 hover:scale-105 duration-300" /></a>
          <a href="https://flixpix.netlify.app/" target="_blank" className="flixpix" >FLIXPIX
            <img src="flixpix.jpg" className="mx-auto max-w-[40%] min-h-[130px] max-h-[300px] border-4 rounded-xl border-sky-500 mt-4 mb-10 hover:scale-105 duration-300 " /></a> 
        </div>
    </div>
  )
}

export default Projects