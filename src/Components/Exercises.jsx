import React, { useEffect, useContext}  from 'react'
import { SearchBar } from './SearchBar'
import { MuscleCategories } from './MuscleCategories'
import { SearchResults } from './SearchResults'
import { ExercisesContext } from './GlobalContext' 
export const Exercises = () => {
  const {exercises,setIsHome} = useContext(ExercisesContext)

  useEffect(()=>{
      window.location.pathname==='/Home' ? setIsHome(true):setIsHome(false)
  },[])

  return (
    <div> 
    
        <SearchBar />
        {exercises ?<SearchResults /> :
        <MuscleCategories />}
       
         
    </div>
  )
}
