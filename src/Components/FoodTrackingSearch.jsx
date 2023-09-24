import React, { useContext, useEffect, useState } from 'react'
import {useParams} from "react-router-dom"
import { FoodOptions, fetchFood } from '../utilities/fetchExercises'
import { FoodSearchItem } from './FoodSearchItem'
import { ExercisesContext } from './GlobalContext'
import { GoBackButton } from './GoBackButton'
import { LoadingSmall } from './Loading'
import { faLeaf } from '@fortawesome/free-solid-svg-icons'





export const FoodTrackingSearch = () => {
    const [isVisible,setIsVisable]=useState(false)
    const [loading, setLoading] = useState(false)
    const [currentResult,setCurrentResult]=useState()
    const params= useParams()
    const {search,setSearch,quantity,setQuantity,unit,setUnit,resultsArray,setResultsArray} = useContext(ExercisesContext)

    useEffect(()=>{
      resultsArray&&
setCurrentResult(resultsArray[resultsArray.length - 1])
// console.log(`this is current ${currentResult[0]?.name}`)
    },[resultsArray])
   

    function handleSubmit (e) {
        e.preventDefault()
        setLoading(true)
        const searchFunction = async () => {
          
              const responseData= await fetchFood(`https://api.api-ninjas.com/v1/nutrition?query=${quantity +" "+ unit} ${search}`,FoodOptions)
              setLoading(false)
                setResultsArray(prevResults=>[...prevResults, responseData])
              }
        
          try{
            
            searchFunction()
            
          }
          catch(e){
            console.log('a7a neik')
          }
          finally{
          
            resultsArray && console.log(resultsArray)
          }
    }
   
    useEffect(() => {
      //


      // if there is no input to begin with...
      if(!currentResult){
        setIsVisable(false)
        return
      }
      
    //if there is an error...
      if(!currentResult[0]?.name){
        
        setIsVisable(true)
        const timer = setTimeout(() => {
          setIsVisable(false)
          setResultsArray(prevResult=>prevResult.filter(result=>{
            return result[0]?.name
          }))
       }, 2000);
       return () => clearTimeout(timer);
      }
      
      
    }, [currentResult])

    
  return (
    <div className='Food-Tracking-Calories-Container'>
      <GoBackButton />
        <div className='Food-Search-Container'>
            <h2>Enter {params.id} Food</h2>
            <form id='FoodSearch' onSubmit={handleSubmit }>
            <input style={{position:"relative"}} type='text' value={search} onChange={(e)=>setSearch(e.target.value)} required placeholder='Type in Food...' />
            {isVisible&&<span className='Input-Error-Message'>Sorry, food not found</span>}
            <input type="number" value={quantity} onChange={(e)=>setQuantity(e.target.value)} required placeholder='Enter quantity' />
            <select value={unit} onChange={(e)=>setUnit(e.target.value)}>
                <option>g</option>
                <option>oz</option>
            </select>
            </form>
            <div style={{position:'relative',display:'flex',justifyContent:'center',alignItems:'center'}}>
            <button form='FoodSearch' type='submit' className='Food-Search-Submit'>Search</button>
            {loading&&<div className='Loading-Spinner-Small'> 
                          <LoadingSmall />
                      </div>}
            </div>
        </div>
        <div className='Food-Search-Result'>
          <h2>Search Results:</h2>
          <ul>
            {resultsArray.map((result)=>{
              return result[0]?.name&&<FoodSearchItem key={result?.name} result={result} unit={unit}/>
             
            
            })}
          </ul>
         
        </div>
    </div>
  )
}
