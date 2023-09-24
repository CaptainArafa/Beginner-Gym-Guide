import React, { useContext, useEffect, useState } from 'react'
import { ExercisesContext } from './GlobalContext';
import { useParams, useSearchParams } from 'react-router-dom';
import { fetchExercises,  options } from '../utilities/fetchExercises';
import { BPExercisesCard } from './BPExercisesCard';
import { Loading } from './Loading';
import { faL } from '@fortawesome/free-solid-svg-icons';
import { GoBackButton } from './GoBackButton';

export const CategoryExercises = () => {
  const {setLoading, loading} = useContext(ExercisesContext)

  const [bPExercises,setBPExercises] = useState()
  const bodyPart = useParams()
  
  useEffect(()=>{

    const CategoryFunction = async () => {
        setLoading(false)
        const responseData= await fetchExercises(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart.id}`,options)
        setLoading(true)
        setBPExercises(responseData)
      
        
      
    }
    CategoryFunction()

    

  },[])

  
 
  return (
    <>
    <GoBackButton />
    <div className='BPExercisesCard-Container'>{loading && bPExercises ?  bPExercises.map((exercise)=>{
      return <BPExercisesCard id={exercise.id} key={exercise.name} exercise={exercise} />
    }): <div className='Loading-Spinner'> 
    <Loading />
</div>}</div>
</>
  )
}
