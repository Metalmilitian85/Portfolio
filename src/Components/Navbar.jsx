import React, {useState} from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import { Link } from 'react-router-dom'
import About from './About'

const Navbar = () => {

    const [nav, setNav] = useState(true)

    const handleNav = () => {
        setNav(!nav)
    }

  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-blue font-bold">
        <h1 className="w-full text-3xl font-bold text-[#4bb3f8] hover:scale-105 duration-300">TIM WARD</h1>
        <ul className="hidden md:flex text-[#4bb3f8]">
            <Link to='/'><li className="p-4 hover:text-[#02daf7] hover:scale-105 duration-300">HOME</li></Link>
            <Link to='/about'><li className="p-4 hover:text-[#02daf7] hover:scale-105 duration-300">ABOUT</li></Link>
            <Link to='/skills'><li className="p-4 hover:text-[#02daf7] hover:scale-105 duration-300">SKILLS</li></Link>
            <Link to='/projects'><li className="p-4 hover:text-[#02daf7] hover:scale-105 duration-300">PROJECTS</li></Link>
            <Link to='/contact'><li className="p-4 hover:text-[#02daf7] hover:scale-105 duration-300">CONTACT</li></Link>
        </ul>
        <div onClick={handleNav} className="block md:hidden">
            {!nav ? <AiOutlineClose size={20} color='#4bb3f8'/> : <AiOutlineMenu size={20} color='#4bb3f8'/>}
        </div>
        <div className={!nav ? "fixed left-0 top-0 w-[40%] h-full border-r border-r-gray-900 bg-[#4bb3f8] ease-in-out duration-200" : "fixed left-[-100%]"}>
          <h1 className="w-full text-3xl font-bold text-black-500 m-3 ml-8">MENU</h1>
          <ul className="uppercase p-4">
            <Link to='/'><li onClick={handleNav} className="p-4 border-b border-gray-600">HOME</li></Link>
            <Link to='/about'><li onClick={handleNav} className="p-4 border-b border-gray-600">ABOUT</li></Link>
            <Link to='/skills'><li onClick={handleNav} className="p-4 border-b border-gray-600">SKILLS</li></Link>
            <Link to='/projects'><li onClick={handleNav} className="p-4 border-b border-gray-600">PROJECTS</li></Link>
            <Link to='/contact'><li onClick={handleNav} className="p-4 border-b border-gray-600">CONTACT</li></Link>
          </ul>
        </div>
    </div>
  )
}

export default Navbar