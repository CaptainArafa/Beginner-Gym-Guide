import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ExercisesContext } from './GlobalContext'
import { GoBackButton } from './GoBackButton'


export const FoodResultDetails = () => {
  const params = useParams()
  const {resultsArray} = useContext(ExercisesContext)
  const [foodItem,setFoodItem] = useState(null)

  useEffect(()=>{
    resultsArray&&console.log(resultsArray)
    const Food =resultsArray &&resultsArray.filter((food)=>{
      return food[0]?.name === params.id
    })
    setFoodItem(Food[0][0])
    foodItem&&console.log(foodItem)

  },[])
  return (

    foodItem&&
    <>
    
    <div className='FoodResultDetails-Container'>
    <GoBackButton />
     <div className='FoodResultDetails-Header'>
        <h1>{foodItem.name}</h1>
     </div>
     <div className='FoodResultDetails-BelowHeader'>
      <div><h3>{Math.round(foodItem.calories)}</h3><h4>cals</h4></div>
      <div><h3>{Math.round(foodItem.serving_size_g)}</h3><h4>g</h4></div>
     </div>
     <div className='FoodResultDetails-Info'>
      <div className='FoodResultDetails-Info-Specific'><h2>Protein</h2><h4>{foodItem.protein_g}g</h4></div>
      <div className='FoodResultDetails-Info-Specific'><h2>Carbohydrates</h2><h4>{foodItem.carbohydrates_total_g}g</h4></div>
      <div className='FoodResultDetails-Info-Specific'><h2>Fats</h2><h4>{foodItem.fat_total_g}g</h4></div>
      <div className='FoodResultDetails-Info-Specific'><h2>Saturated Fats</h2><h4>{foodItem.fat_saturated_g}g</h4></div>
      <div className='FoodResultDetails-Info-Specific'><h2>Fiber</h2><h4>{foodItem.fiber_g}g</h4></div>
      <div className='FoodResultDetails-Info-Specific'><h2>Sugar</h2><h4>{foodItem.sugar_g}g</h4></div>
      <div className='FoodResultDetails-Info-Specific'><h2>Sodium</h2><h4>{foodItem.sodium_mg}mg</h4></div>
      <div className='FoodResultDetails-Info-Specific'><h2>Potassium</h2><h4>{foodItem.potassium_mg}mg</h4></div>
      <div className='FoodResultDetails-Info-Specific'><h2>Cholestrol</h2><h4>{foodItem.cholesterol_mg}mg</h4></div>




     </div>
    </div>
    </>
  )
}
