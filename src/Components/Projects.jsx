import React from 'react'

function Projects() {
  return (
    <div className="text-center">
        <p className='p-10 text-[#4bb3f8] font-bold'>Projects</p>
        <div>
          <a href="https://incomparable-sherbet-60d556.netlify.app/" target="_blank" className="project" >Pet Adoption</a>
          <img src="adoptions.jpg" className="border-4 rounded-xl border-purple-500 mx-auto max-w-[50%]" />
        </div>
        {/*<br></br>
        <div>
          <a href="https://marvelous-dragon-48b7bb.netlify.app" target="_blank" className="weather" >Weather App</a>
        </div>*/}
        <br></br>
        <div>
          <a href="https://prismatic-pasca-506ef1.netlify.app/" target="_blank" className="scrolls" >The Elder Scrolls</a>
          <img src="skyrimbg.webp" className="mx-auto max-w-[50%] border-4 rounded-xl border-gray-500" />
        </div>
    </div>
  )
}

export default Projects