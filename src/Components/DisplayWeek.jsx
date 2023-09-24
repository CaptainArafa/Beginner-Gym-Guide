import React, { useContext } from 'react'
import { DisplayDay } from './DisplayDay'
import { ExercisesContext } from './GlobalContext'

export const DisplayWeek = ({Week}) => {
    const {workoutPlan} = useContext(ExercisesContext)
  return (
    workoutPlan &&
    <>
    <DisplayDay day={Week.Day1} Num={1} />
    <DisplayDay day={Week.Day2} Num={2} />
    <DisplayDay day={Week.Day3} Num={3} />
    <DisplayDay day={Week.Day4} Num={4}/>
    <DisplayDay day={Week.Day5} Num={5}/>
    <DisplayDay day={Week.Day6} Num={6}/>
    <DisplayDay day={Week.Day7} Num={7}/>
    </>
  )
}
