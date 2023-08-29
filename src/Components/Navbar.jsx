import Aos from 'aos'
import React, {useEffect, useState} from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import { Link } from 'react-scroll'

const Navbar = () => {

  useEffect(() => {
    Aos.init();
  }, [])

    const [nav, setNav] = useState(true)

    const handleNav = () => {
        setNav(!nav)
    }
  
  return (
    <div className="fixed flex justify-between items-center h-20 w-[100%] mx-auto px-4 bg-black text-sky-500 font-bold z-10">
        <Link to='About' spy={true} smooth={true} offset={-80} duration={500}><h1 className="w-full text-3xl font-bold text-sky-500 hover:animate-pulse hover:cursor-pointer">TIM WARD</h1></Link>
        <div className="hidden md:flex justify-between mr-auto mx-7">
          <a href="https://www.linkedin.com/in/tim-ward-827b111ab/" target="_blank" ><img src="linkedin.png" className="h-6 hover:cursor-pointer mr-7 hover:scale-110 duration-300" /></a>
          <a href="https://github.com/Metalmilitian85?tab=repositories" target="_blank" ><img src="github.png" className="h-6 hover:cursor-pointer rounded-full mr-7 hover:scale-110 duration-300" /></a>
        </div>
        <ul className="hidden md:flex text-blue">
            <Link to='About' spy={true} smooth={true} offset={-80} duration={500}><li className="p-4 hover:text-[#02daf7] hover:scale-105 duration-300 hover:cursor-pointer">ABOUT</li></Link>
            <Link to='Projects' spy={true} smooth={true} offset={-80} duration={500}><li className="p-4 hover:text-[#02daf7] hover:scale-105 duration-300 hover:cursor-pointer">PROJECTS</li></Link>
            <Link to='Skills' spy={true} smooth={true} offset={-80} duration={500}><li className="p-4 hover:text-[#02daf7] hover:scale-105 duration-300 hover:cursor-pointer">SKILLS</li></Link>
            <Link to='Contact' spy={true} smooth={true} offset={-80} duration={500}><li className="p-4 hover:text-[#02daf7] hover:scale-105 duration-300 hover:cursor-pointer">CONTACT</li></Link>
        </ul>
        <div onClick={handleNav} className="block md:hidden">
            {!nav ? <AiOutlineClose size={20} color="[#4bb3f8]" /> : <AiOutlineMenu size={20} color="[#4bb3f8]" />}
        </div>
        <div className={!nav ? "fixed left-0 top-0 w-[45%] h-full border-r border-r-gray-900 bg-[#4bb3f8] ease-in-out duration-200 md:hidden" : "fixed left-[-100%] ease-in-out duration-200"}>
          <ul className="uppercase p-4 text-black">
            <Link to="About" spy={true} smooth={true} offset={-80} duration={500}><li onClick={handleNav} className="p-4 border-b border-gray-600 hover:cursor-pointer">ABOUT</li></Link>
            <Link to="Projects" spy={true} smooth={true} offset={-80} duration={500}><li onClick={handleNav} className="p-4 border-b border-gray-600 hover:cursor-pointer">PROJECTS</li></Link>
            <Link to="Skills" spy={true} smooth={true} offset={-80} duration={500}><li onClick={handleNav} className="p-4 border-b border-gray-600 hover:cursor-pointer">SKILLS</li></Link>
            <Link to="Contact" spy={true} smooth={true} offset={-80} duration={500}><li onClick={handleNav} className="p-4 border-b border-gray-600 hover:cursor-pointer">CONTACT</li></Link>
          </ul>
          <div className="flex justify-center space-x-10">
            <a href="https://www.linkedin.com/in/tim-ward-827b111ab/" target="_blank" ><img src="linkedin.png" className="h-6 hover:cursor-pointer" /></a>
            <a href="https://github.com/Metalmilitian85?tab=repositories" target="_blank" ><img src="github.png" className="h-6 hover:cursor-pointer rounded-full" /></a>
        </div>
        </div>
    </div>
  )
}

export default Navbar