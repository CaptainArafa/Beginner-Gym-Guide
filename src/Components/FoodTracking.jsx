import React, { useContext, useEffect, } from 'react'
import { FoodTrackingHeader } from './FoodTrackingHeader'
import { FoodTrackingBody } from './FoodTrackingBody'
import { ExercisesContext } from './GlobalContext'

export const FoodTracking = () => {
  const {setIsHome} = useContext(ExercisesContext)

  useEffect(()=>{
      window.location.pathname==='/Home' ? setIsHome(true):setIsHome(false)
  },[])
  return (
    <div className='Food-Tracking-Calories-Container'>
      <FoodTrackingHeader />
      <FoodTrackingBody />
    </div>
  )
}
