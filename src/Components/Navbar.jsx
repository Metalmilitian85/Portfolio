import React, {useState} from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import { Link } from 'react-scroll'

const Navbar = () => {

    const [nav, setNav] = useState(true)

    const handleNav = () => {
        setNav(!nav)
    }

  return (
    <div className="fixed flex justify-between items-center h-24 w-[100%] mx-auto px-4 bg-black text-sky-500 font-bold z-40 hover:cursor-pointer">
        <Link to='About' spy={true} smooth={true} offset={-80} duration={500}><h1 className="w-full text-3xl font-bold text-sky-500 hover:animate-pulse">TIM WARD</h1></Link>
        <ul className="hidden md:flex text-blue">
            <Link to='About' spy={true} smooth={true} offset={-80} duration={500}><li className="p-4 hover:text-[#02daf7] hover:scale-105 duration-300">ABOUT</li></Link>
            <Link to='Projects' spy={true} smooth={true} offset={-80} duration={500}><li className="p-4 hover:text-[#02daf7] hover:scale-105 duration-300">PROJECTS</li></Link>
            <Link to='Skills' spy={true} smooth={true} offset={-80} duration={500}><li className="p-4 hover:text-[#02daf7] hover:scale-105 duration-300">SKILLS</li></Link>
            <Link to='Contact' spy={true} smooth={true} offset={-80} duration={500}><li className="p-4 hover:text-[#02daf7] hover:scale-105 duration-300">CONTACT</li></Link>
        </ul>
        <div onClick={handleNav} className="block md:hidden">
            {!nav ? <AiOutlineClose size={20} color="[#4bb3f8]" /> : <AiOutlineMenu size={20} color="[#4bb3f8]" />}
        </div>
        <div className={!nav ? "fixed left-0 top-0 w-[45%] h-full border-r border-r-gray-900 bg-[#4bb3f8] ease-in-out duration-200" : "fixed left-[-100%]"}>
          <ul className="uppercase p-4 text-black">
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