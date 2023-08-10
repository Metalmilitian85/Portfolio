import React from 'react'

function Projects() {
  return (
    <div className="text-center">
        <h1 className="pt-32 w-full text-2xl font-bold text-center text-[#4bb3f8] hover:scale-105 duration-300 mb-10">PROJECTS</h1>
        <div>
          <a href="https://incomparable-sherbet-60d556.netlify.app/" target="_blank" className="project" >Pet Adoption</a>
          <a href="https://incomparable-sherbet-60d556.netlify.app/" target="_blank">
            <img src="adoptions.jpg" className="border-4 rounded-xl border-purple-500 mt-4 mx-auto min-w-[28%] max-w-[40%] min-h-[150px] max-h-[300px] mb-20" /></a>
          <a href="https://prismatic-pasca-506ef1.netlify.app/" target="_blank" className="scrolls" >The Elder Scrolls</a>
          <a href="https://prismatic-pasca-506ef1.netlify.app/" target="_blank">
            <img src="skyrimbg.webp" className="mx-auto max-w-[40%] min-h-[150px] max-h-[300px] border-4 rounded-xl border-gray-500 mt-4 mb-20" /></a>
          <a href="https://inquisitive-blancmange-5e1d77.netlify.app/" target="_blank" className="burgers" >Brian's Burger Bash</a>
          <a href="https://inquisitive-blancmange-5e1d77.netlify.app/" target="_blank">
            <img src="burgerbash.jpg" className="mx-auto max-w-[40%] min-h-[150px] max-h-[300px] border-4 rounded-xl border-red-600 mt-4 mb-20" /></a>
          <a href="https://harmonious-marzipan-26c91f.netlify.app/" target="_blank">
          <a href="https://harmonious-marzipan-26c91f.netlify.app/" target="_blank" className="flixpix" >FLIXPIX</a>
            <img src="flixpix.jpg" className="mx-auto max-w-[38%] min-h-[150px] max-h-[300px] border-4 rounded-xl border-sky-500 mt-4 mb-20" /></a> 
          <a href="https://marvelous-dragon-48b7bb.netlify.app" target="_blank" className="weather" >Weather App</a>
        </div>
    </div>
  )
}

export default Projects