import React, { useContext, useEffect, useState } from 'react'
import { ExercisesContext } from './GlobalContext'
import { WorkoutPlans } from '../databases/WorkoutPlans'
import { DisplayWeek } from './DisplayWeek'
import {GoBackButton} from './GoBackButton'

export const WorkoutPlan = () => {
  const {data,calorieCalculator,workoutPlan,setWorkoutPlan,result,setResult} = useContext(ExercisesContext)

  useEffect(()=>{
    setResult(calorieCalculator(data.Age,data.Gender,data.Height,data.Weight,data.Activity))
    WorkoutPlans.map((Plan)=>{
    return Plan.frequency === data.Activity && setWorkoutPlan(Plan.workout[0])
    })
    
   
  
    window.location.pathname==="/GymGuide/GainMusclePath/WorkoutPlan"? setResult(prevResult=>prevResult+500): setResult(prevResult=>prevResult-500)
  },[])
  
  return (
    <div className='WorkoutPlan-Container'>
      
      <div className='WorkoutPlan-Calories'>
        <h3>Target Calories</h3>
        <div className='WorkoutPlan-TargetCalories'>{result}</div>
      </div>
      <div className='WorkoutPlan-Days'>
      <DisplayWeek Week={workoutPlan} />
      </div>
    </div>
  )
}
