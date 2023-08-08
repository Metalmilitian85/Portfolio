import React from 'react'

function Projects() {
  return (
    <div className="text-center">
        <h1 className="pt-32 w-full text-2xl font-bold text-center text-[#4bb3f8] hover:scale-105 duration-300 mb-10">PROJECTS</h1>
        <div>
          <a href="https://incomparable-sherbet-60d556.netlify.app/" target="_blank" className="project" >Pet Adoption</a>
          <a href="https://incomparable-sherbet-60d556.netlify.app/" target="_blank">
            <img src="adoptions.jpg" className="border-4 rounded-xl border-purple-500 mx-auto max-w-[40%] mb-20" /></a>
          <a href="https://prismatic-pasca-506ef1.netlify.app/" target="_blank" className="scrolls" >The Elder Scrolls</a>
          <a href="https://prismatic-pasca-506ef1.netlify.app/" target="_blank">
            <img src="skyrimbg.webp" className="mx-auto max-w-[40%] border-4 rounded-xl border-gray-500 mb-20" /></a>
          <a href="https://inquisitive-blancmange-5e1d77.netlify.app/" target="_blank" className="burgers" >Brian's Burger Bash</a>
          <a href="https://inquisitive-blancmange-5e1d77.netlify.app/" target="_blank">
            <img src="burgerbash.jpg" className="mx-auto max-w-[40%] border-4 rounded-xl border-red-600 mb-20" /></a>
          <a href="https://marvelous-dragon-48b7bb.netlify.app" target="_blank" className="weather" >Weather App</a>
        </div>
    </div>
  )
}

export default Projects