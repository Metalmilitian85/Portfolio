import React from 'react'

function Projects() {
  return (
    <div id="Projects" className="text-center pt-12">
        <h1 className="w-full text-2xl font-bold text-center text-[#4bb3f8] hover:scale-105 duration-300 mb-10">PROJECTS</h1>
        <div>
          <a href="https://inquisitive-blancmange-5e1d77.netlify.app/" target="_blank" className="burgers" >Brian's Burger Bash</a>
          <a href="https://inquisitive-blancmange-5e1d77.netlify.app/" target="_blank">
            <img src="burgerbash.jpg" className="mx-auto max-w-[40%] min-h-[130px] max-h-[300px] border-4 rounded-xl border-red-600 mt-4 mb-20" /></a>
          <a href="https://harmonious-marzipan-26c91f.netlify.app/" target="_blank">
          <a href="https://harmonious-marzipan-26c91f.netlify.app/" target="_blank" className="flixpix" >FLIXPIX</a>
            <img src="flixpix.jpg" className="mx-auto max-w-[40%] min-h-[130px] max-h-[300px] border-4 rounded-xl border-sky-500 mt-4 mb-20" /></a> 
        </div>
    </div>
  )
}

export default Projects