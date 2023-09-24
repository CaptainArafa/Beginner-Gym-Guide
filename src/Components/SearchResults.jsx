import React, { useContext } from 'react'
import { ExercisesContext } from './GlobalContext'; 
import {BPExercisesCard } from './BPExercisesCard'
import { GoBackButton } from './GoBackButton';

export const SearchResults = () => {

    const {exercises} = useContext(ExercisesContext)

return (
    <>
    {exercises.length>=1 &&<GoBackButton howfar={true} />}
    <div className='BPExercisesCard-Container'>
        {!exercises.length>=1 && <div className='No-Exercises-Message-div'><h1>Sorry, no exercise with that name.</h1><GoBackButton howfar={true} /></div>}
        {exercises.map((exercise)=>{
            return <BPExercisesCard exercise={exercise} id={exercise.id}/>
        })}
    </div>
    </>
    

  )
}
