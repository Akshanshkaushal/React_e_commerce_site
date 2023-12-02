 import React, { useState } from 'react'
 import { NavLink } from 'react-router-dom'
import { X, Menu } from 'lucide-react'
 
 const Navlinks = () => {
 return (
  <>
       <NavLink to="/">home</NavLink>
       <NavLink to="/">home</NavLink>
       <NavLink to="/">home</NavLink>
       <NavLink to="/">home</NavLink>
</>
 )
 }

 export default function Nav() {

  const [isOpen , setIsOpen] = useState(false);
  

  const toggleNavbar = () => {
    setIsOpen(!isOpen)
  }

   return (
    <>
      <nav className='flex justify-end w-1/3'>
      <div className='hidden w-full justify-between md:flex '>
      <Navlinks/>
      </div>

      <div className='md:hidden '>
        <button onClick={toggleNavbar}>{isOpen ? <X/> : <Menu/>}</button>
      </div>
      </nav>
       {isOpen && (
        <div className={`flex basis-full flex-col items-center transition-all duration-500 ease-in ${isOpen ? 'top-20 ':'top-[-490px]'}`}>
         <Navlinks/>
        </div>
      )}
      </>
   )
 }
 