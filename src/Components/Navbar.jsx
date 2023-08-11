import React, {useState} from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import { Link } from 'react-scroll'

const Navbar = () => {

    const [nav, setNav] = useState(true)

    const handleNav = () => {
        setNav(!nav)
    }

  return (
    <div className="fixed flex justify-between items-center h-24 w-[100%] mx-auto px-4 bg-gradient-to-b from-black to-[#4bb3f8] text-blue font-bold z-50">
        <Link to='About' spy={true} smooth={true} offset={-80} duration={500}><h1 className="w-full text-3xl font-bold text-black hover:animate-pulse">TIM WARD</h1></Link>
        <ul className="hidden md:flex text-black">
            <Link to='About' spy={true} smooth={true} offset={-80} duration={500}><li className="p-4 hover:text-[#02daf7] hover:scale-105 duration-300">ABOUT</li></Link>
            <Link to='Projects' spy={true} smooth={true} offset={-80} duration={500}><li className="p-4 hover:text-[#02daf7] hover:scale-105 duration-300">PROJECTS</li></Link>
            <Link to='Skills' spy={true} smooth={true} offset={-80} duration={500}><li className="p-4 hover:text-[#02daf7] hover:scale-105 duration-300">SKILLS</li></Link>
            <Link to='Contact' spy={true} smooth={true} offset={-80} duration={500}><li className="p-4 hover:text-[#02daf7] hover:scale-105 duration-300">CONTACT</li></Link>
        </ul>
        <div onClick={handleNav} className="block md:hidden">
            {!nav ? <AiOutlineClose size={20} color='#000'/> : <AiOutlineMenu size={20} color='#000'/>}
        </div>
        <div className={!nav ? "fixed left-0 top-0 w-[45%] h-full border-r border-r-gray-900 bg-[#4bb3f8] ease-in-out duration-200" : "fixed left-[-100%]"}>
          <Link to="/"><h1 className="w-full text-3xl font-bold text-black-500 m-3 ml-8">TIM WARD</h1></Link>
          <ul className="uppercase p-4">
            <Link to="About" spy={true} smooth={true} offset={-80} duration={500}><li onClick={handleNav} className="p-4 border-b border-gray-600 hover:cursor-pointer">ABOUT</li></Link>
            <Link to="Projects" spy={true} smooth={true} offset={-80} duration={500}><li onClick={handleNav} className="p-4 border-b border-gray-600 hover:cursor-pointer">PROJECTS</li></Link>
            <Link to="Skills" spy={true} smooth={true} offset={-80} duration={500}><li onClick={handleNav} className="p-4 border-b border-gray-600 hover:cursor-pointer">SKILLS</li></Link>
            <Link to="Contact" spy={true} smooth={true} offset={-80} duration={500}><li onClick={handleNav} className="p-4 border-b border-gray-600 hover:cursor-pointer">CONTACT</li></Link>
          </ul>
        </div>
    </div>
  )
}

export default Navbar