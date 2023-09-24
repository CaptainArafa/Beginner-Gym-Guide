import React, { useEffect, useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import { fetchExercises, options } from '../utilities/fetchExercises'
import { Loading } from './Loading'
import { GoBackButton } from './GoBackButton'


export const SpecificExercise = () => {
    const [exercise,setExercise] = useState()
    const params = useParams()
    console.log(params)
    useEffect(()=>{
        const searchFunction = async () => {
            const responseData= await fetchExercises(`https://exercisedb.p.rapidapi.com/exercises/exercise/${params.id}`,options)
            setExercise(responseData)
         
            
      }
      searchFunction()
    },[])
    console.log(exercise)
  return (
    
    exercise ?
    <>
    <GoBackButton />
    <div className='Specific-Exercise-Container'>
        <div className='Specific-Exercise-Upper'>
            <h2>{exercise.name}</h2>
            <img src={exercise.gifUrl} />
        </div>
        <div className="Specific-Exercise-Lower">
            <h3>Muscles Worked Primarly:<span className='Specific-Exercise-Muscle'>{exercise.target}</span></h3>
            <h3>Equipment Needed to Perform: <span className='Specific-Exercise-Equipment'>{exercise.equipment}</span></h3>
        </div>
    </div>
    </>
    : 
    <>
    <GoBackButton />
    <div className='Loading-Spinner'> 
    <Loading />
    </div>
    </>
   
  )
}
