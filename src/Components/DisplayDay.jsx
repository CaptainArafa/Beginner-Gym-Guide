import React, { useContext } from 'react'
import { ExercisesContext } from './GlobalContext'
import { Link } from "react-router-dom"

export const DisplayDay = ({day,Num}) => {

    console.log(day)

  return (
    day.ex1=== 'REST DAY' ?
    <div className=' WorkoutPlan-Exercise-Container REST-DAY'>
       <h1>DAY {Num}</h1>
       <h4>{day.ex1}</h4>
    </div>
    :
    <div className='WorkoutPlan-Day-Container'>
      <div className='WorkoutPlan-Day-Title'>
        <h1>DAY {Num}</h1>
      </div>
      {day.ex1&&
      <div className='WorkoutPlan-Exercise-Container'>
        <div>
        <Link style={{textDecoration:"none"}} to={`/Exercises/${day.ex1.target}/${day.ex1.id}`}><h4 className='WorkoutPlan-ExerciseName'>{day.ex1.name}</h4></Link>
        <h5>3 sets x 10-12 reps</h5>
        </div>
        <h5 className='WorkoutPlan-TargetMuscle'>{day.ex1.target}</h5>
      </div>}
      {day.ex2&&
      <div className='WorkoutPlan-Exercise-Container'>
        <div>
        <Link style={{textDecoration:"none"}} to={`/Exercises/${day.ex2.target}/${day.ex2.id}`}><h4 className='WorkoutPlan-ExerciseName'>{day.ex2.name}</h4></Link>
        <h5>3 sets x 10-12 reps</h5>
        </div>        <h5 className='WorkoutPlan-TargetMuscle'>{day.ex2.target}</h5>
      </div>}
      {day.ex3&&
      <div className='WorkoutPlan-Exercise-Container'>
        <div>
        <Link style={{textDecoration:"none"}} to={`/Exercises/${day.ex3.target}/${day.ex3.id}`}><h4 className='WorkoutPlan-ExerciseName'>{day.ex3.name}</h4></Link>
        <h5>3 sets x 10-12 reps</h5>
        </div>        <h5 className='WorkoutPlan-TargetMuscle'>{day.ex3.target}</h5>
      </div>}
      {day.ex4&&
      <div className='WorkoutPlan-Exercise-Container'>
      <div>
        <Link style={{textDecoration:"none"}} to={`/Exercises/${day.ex4.target}/${day.ex4.id}`}><h4 className='WorkoutPlan-ExerciseName'>{day.ex4.name}</h4></Link>
        <h5>3 sets x 10-12 reps</h5>
        </div>        <h5 className='WorkoutPlan-TargetMuscle'>{day.ex4.target}</h5>
      </div>}
      {day.ex5&&
      <div className='WorkoutPlan-Exercise-Container'>
        <div>
        <Link style={{textDecoration:"none"}} to={`/Exercises/${day.ex5.target}/${day.ex5.id}`}><h4 className='WorkoutPlan-ExerciseName'>{day.ex5.name}</h4></Link>
        <h5>3 sets x 10-12 reps</h5>
        </div>        <h5 className='WorkoutPlan-TargetMuscle'>{day.ex5.target}</h5>
      </div>}
      {day.ex6&&
      <div className='WorkoutPlan-Exercise-Container'>
          <div>
        <Link style={{textDecoration:"none"}} to={`/Exercises/${day.ex6.target}/${day.ex6.id}`}><h4 className='WorkoutPlan-ExerciseName'>{day.ex6.name}</h4></Link>
        <h5>3 sets x 10-12 reps</h5>
        </div>        <h5 className='WorkoutPlan-TargetMuscle'>{day.ex6.target}</h5>
      </div>}
    </div>
  )
}
