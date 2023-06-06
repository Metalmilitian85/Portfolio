import React, {useState} from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import { NavLink } from 'react-router-dom'

const Navbar = () => {

    const [nav, setNav] = useState(true)

    const handleNav = () => {
        setNav(!nav)
    }

  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-blue font-bold">
        <h1 className="w-full text-3xl font-bold text-[#4bb3f8]">TIM WARD</h1>
        <ul className="hidden md:flex text-[#4bb3f8]">
            <li className="p-4">MAIN</li>
            <li className="p-4">ABOUT</li>
            <li className="p-4">SKILLS</li>
            <li className="p-4">PROJECTS</li>
            <li className="p-4">CONTACT</li>
        </ul>
        <div onClick={handleNav} className="block md:hidden">
            {!nav ? <AiOutlineClose size={20} color='#4bb3f8'/> : <AiOutlineMenu size={20} color='#4bb3f8'/>}
        </div>
        <div className={!nav ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#4bb3f8] ease-in-out duration-200" : "fixed left-[-100%]"}>
          <h1 className="w-full text-3xl font-bold text-[#4bb3f8] m-4">REACT</h1>
          <ul className="uppercase p-4">
            <li className="p-4 border-b border-gray-600">MAIN</li>
            <li className="p-4 border-b border-gray-600">ABOUT</li>
            <li className="p-4 border-b border-gray-600">SKILLS</li>
            <li className="p-4 border-b border-gray-600">PROJECTS</li>
            <li className="p-4 border-b border-gray-600">CONTACT</li>
          </ul>
        </div>
    </div>
  )
}

export default Navbar