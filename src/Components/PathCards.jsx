import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ExercisesContext } from './GlobalContext'

export const PathCards = () => {
    const {setIsHome,setGymGoal} = useContext(ExercisesContext)

    useEffect(()=>{
        window.location.pathname==='/Home' ? setIsHome(true):setIsHome(false)
    },[])
  return (

<div className='pathcards-outer'>
<h3 className='Home-title'>Turn Your Dreams into Reality</h3>
   <h1 className='Choose-Path'>Choose Your Path...</h1>
    <div onClick={()=>setGymGoal("weightgain")} className='PathCards-Container'>
        <div className='Gain-Weight'>
            <Link to={"/GymGuide/GainMusclePath/Form"}>
            <img className='Gain-Weight-Pic' src='https://firebasestorage.googleapis.com/v0/b/gym-guide-b4023.appspot.com/o/bulk2.jpg?alt=media&token=f6982546-3324-4ff3-bd12-c5a49978080f' />
            <div className='Gain-Weight-Content'>
                <h1 className='card-content-title'>Gain Muscle</h1>
                <p className='card-content-body'>This path will take you on a journey to build muscle whilst minimizing fat gain using a caloric surplus and a specific workout program designed for your needs and preference</p>
            </div>
            </Link>
        </div>
        <div onClick={()=>setGymGoal("fatloss")} className='Lose-Fat'>
            <Link to={"/GymGuide/LoseFatPath/Form"}>
            <img className='Lose-Fat-Pic' src='https://firebasestorage.googleapis.com/v0/b/gym-guide-b4023.appspot.com/o/cut2.jpeg?alt=media&token=90f7eca5-d9c7-4d26-a963-b02536d727b1' />
            <div className='Fat-Loss-Content'>
                <h1 className='card-content-title'>Lose Fat</h1>
                <p className='card-content-body'>This path will take you on a journey to lose fat whilst maintaing muscle using a caloric deficit and a specific workout program designed for your needs and preference</p>
            </div>
            </Link>
        </div>
    </div>
    </div>
  )
}
