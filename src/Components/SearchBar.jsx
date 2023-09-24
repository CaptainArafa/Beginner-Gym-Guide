import React, { useContext, useEffect, useState } from 'react'
import { GrSearch } from "react-icons/gr";
import { fetchExercises, options } from '../utilities/fetchExercises';
import { ExercisesContext } from './GlobalContext';
import { Loading } from './Loading';
import { LoadingSmall } from './Loading';
export const SearchBar = () => {

 
 const {setLoading,loading,setMuscleCategories,setExercises, exercises} = useContext(ExercisesContext)
  const [search,setSearch] = useState("")
  const [smallLoading,setSmallLoading] = useState(false)
  


  useEffect(()=>{
    const fetchCategories = async () =>{
      setLoading(false)
      const categories = await fetchExercises("https://exercisedb.p.rapidapi.com/exercises/bodyPartList",options)
     setMuscleCategories(categories)
     setLoading(true)
    } 
    
    fetchCategories()
    
  },[])
  

  const searchFunction = async () => {
    if(search){
      setSmallLoading(true)
      const responseData= await fetchExercises('https://exercisedb.p.rapidapi.com/exercises',options)
      setSmallLoading(false)
      
      setExercises(responseData?.filter((exercise)=>{
        return exercise.bodyPart.toLowerCase().includes(search)|| exercise.name.toLowerCase().includes(search) || exercise.target.toLowerCase().includes(search)
     
      }))
     
     exercises && console.log(exercises) 
    }
 
   
  
   
  }
 
 
  return (
    <div className='Search-Bar'>
        <GrSearch className='Search-Icon'/>
        <input type='text' value={search} onChange={(e)=>setSearch(e.target.value.toLowerCase())} placeholder='Search for Exercise...' />
        <button onClick={searchFunction} className='Search-Bar-Button'>Search</button>
        {smallLoading&& <div className='Loading-Spinner-Small-Exercise '> 
                          <LoadingSmall />
                      </div>}
    </div>
  )
}
