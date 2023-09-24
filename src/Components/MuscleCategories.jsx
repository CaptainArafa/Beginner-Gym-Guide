import React, { useContext } from 'react'
import { CategoryCard } from './CategoryCard'
import { ExercisesContext } from './GlobalContext';
import { Loading } from './Loading';

export const MuscleCategories = () => {
  const {muscleCategories,loading, exercises} = useContext(ExercisesContext)
  
  return (
  
    loading ?<div className='Categories-Cards-Container'>{
    muscleCategories.map(
        (category)=>{
        return <div><CategoryCard key={category.name} category={category} /></div>
      })}
 
  </div>
     :
  <div className='Loading-Spinner'> 
    <Loading />
</div>
  )
}
