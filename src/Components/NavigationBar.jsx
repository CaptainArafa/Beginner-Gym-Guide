import React, { useContext, useEffect, useState } from 'react'
import Logo from '../assets/Logo.png'
import { NavLink} from "react-router-dom"
import { ExercisesContext } from './GlobalContext'

import { FaRegUser } from "react-icons/fa";



export const NavigationBar = () => {
  const [mobileMenu,setMobileMenu] = useState(false)
  const {isHome,setIsHome,userInfo} = useContext(ExercisesContext)

  useEffect(()=>{
      window.location.pathname==='/Home' ? setIsHome(true):setIsHome(false)
  },[])
  
  const handleMobileMenu = () => {
    setMobileMenu(!mobileMenu)
  }
  
  return (
    
    <div className={isHome? "isHome" : 'nav-Container'}>
        <h2 className='nav-Logo'><NavLink onClick={()=>setMobileMenu(false)} to={"/"}><img className='Logo' src={Logo} /></NavLink><NavLink style={{textDecoration:"none"}}><h2>BeFit</h2></NavLink></h2>
        <div className='nav-Links'>
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"/GymGuide"}>Gym Guide</NavLink>
            <NavLink to={"/foodtracking"}>Food Tracking</NavLink> 
            <NavLink to={"/Exercises"}>Exercises</NavLink>
            <NavLink to={"/SignIn"}><FaRegUser size={30} /></NavLink>

        </div>
        <div className='Hamburger-Menu'>
          <div className='Hamburger-Logo'>
            <button onClick={handleMobileMenu} className={mobileMenu?'Hamburger-Button Active':'Hamburger-Button'}>
            <div className='bar'>

            </div>
            </button>
          </div>
            <div className={mobileMenu?'Hamburger-Menu-Links':'Hamburger-Menu-Links Hide'}>
            <NavLink onClick={handleMobileMenu} style={{textDecoration:'none'}} to={"/"}>Home</NavLink>
            <NavLink onClick={handleMobileMenu} style={{textDecoration:'none'}} to={"/GymGuide"}>Gym Guide</NavLink>
            <NavLink onClick={handleMobileMenu} style={{textDecoration:'none'}} to={"/foodtracking"}>Food Tracking</NavLink> 
            <NavLink onClick={handleMobileMenu} style={{textDecoration:'none'}} to={"/Exercises"}>Exercises</NavLink>
            <NavLink onClick={handleMobileMenu} to={"/SignIn"}><FaRegUser size={30}  /></NavLink>
            </div>
        </div>
       

    </div>
  )
}
