import React, { useContext, useEffect, useRef, useState } from 'react'
import { NavigationBar } from './NavigationBar'
import { ExercisesContext } from './GlobalContext'
import { Link } from 'react-router-dom'
import { BiSolidDownArrow } from "react-icons/bi";




export const HomePage = () => {
  const Explore = useRef(null)
  
  const [toggleBody1,setToggleBody1]=useState(true)
  const [toggleBody2,setToggleBody2]=useState(true)
  const [toggleBody3,setToggleBody3]=useState(true)
  const [render,setRender]=useState(false)

  const {setIsHome} = useContext(ExercisesContext)
  useEffect(()=>{
    setIsHome(true)
  },[])
  useEffect(()=>{
  
    const widthListener=window.addEventListener('resize',event=>{
      if(window.screen.width<=600){
        setToggleBody1(true)
        setToggleBody2(true)
        setToggleBody3(true)
        render(true)
      }
      else if(window.screen.width<=600){
        setToggleBody1(false)
        setToggleBody2(false)
        setToggleBody3(false)
        render(false)
        
      }
    })
      
    return()=>{
      window.removeEventListener('resize',widthListener)
    }
    
    
  },[])
 
 
  const scrollToSections = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior:'smooth'
    })
  }
  return (
    <div className='HomePage'>
      <div className='HomePage-Overlay'>
        <div className='HomePage-Title'><h1><span>YOUR</span> all-in-one tool for the gym</h1>
        <button onClick={()=>scrollToSections(Explore)} className='HomePage-Title-Button'>EXPLORE</button></div>
      </div>
      <section ref={Explore} style={{backgroundColor:'rgb(29, 29, 29)'}} className='HomePage-Section'>
        <div className='section-Title'><h2>Gym Guide</h2>
              </div>
        <p>Whether you're a beginner or an experienced bodybuilder, you probably always have one of those two objectives in mind: either put on weight and build muscle, or take off fat and put on definition.
           Fortunately for you, our Gym Guide service develops a customized plan based on your individual measurements and 
           fitness objectives and generates a workout schedule and the necessary number of calories so you can start
            making progress right away! </p>
            
          <Link className='TakeMeThereButton1' to={'/GymGuide'} style={{textDecoration:"none"}}>Take Me There</Link>
      </section>
      <section style={{backgroundColor:'rgb(55, 55, 55)'}} className='HomePage-Section'>
        <div className='section-Title'><h2>food tracking service</h2>
              </div>
        <p>By automatically entering your caloric needs based on the Gym Guide service results or by your own input
          , our food tracking service makes it 100 times easier to keep track of your calories. 
          You can also view the full macronutrient and micronutrient breakdown of the foods
           you entered to get a more accurate and clearer picture of the foods you eat throughout the day.
           </p>
           <Link className='TakeMeThereButton2'  to={'/FoodTracking'} style={{textDecoration:"none"}}>Take Me There</Link>
          <div class="triangle triangle1">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M1200 0L0 0 598.97 114.72 1200 0z" class="shape-fill"></path>
          </svg>

</div>
      </section>
      
      <section style={{backgroundColor:'rgb(83, 83, 83)'}} className='HomePage-Section'>
       <div className='section-Title'><h2>Exercise search tool</h2>
              </div>
        <p>not familiar with the overhead tricep extension? Interested in the exercises that strengthen your back? 
          You can browse and learn the technique of various exercises that train a particular muscle group using our
           exercise search tool, or you can use the search bar to look for a specific muscle or exercise.
        </p>
        <Link className='TakeMeThereButton3' to={'/Exercises'} style={{textDecoration:"none"}}>Take Me There</Link>
          <div class="triangle triangle2">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M1200 0L0 0 598.97 114.72 1200 0z" class="shape-fill"></path>
          </svg>
</div>
      </section>
      
     
    </div>
  )
}
