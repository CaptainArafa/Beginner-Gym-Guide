import React, { useContext, useEffect, useState } from 'react'
import { ExercisesContext } from './GlobalContext'
import { GoBackButton } from './GoBackButton'
export const FoodTrackingNutrition = () => {


    const {foodArray,setFoodArray} = useContext(ExercisesContext)
    const [totalNutrition,setTotalNutrition] = useState(null)

    useEffect(()=>{
        let Nutrition={
         Calories:0,
         Carbs:0,
         Fats:0,
         SatFats:0,
         Fiber:0,
         Protein:0,
         Sugar:0,
         Sodium:0,
         Potassium:0,
         Cholestrol:0
            
        }
        
       foodArray&& foodArray.map((food)=>{
            Nutrition.Calories+=food.calories
            Nutrition.Protein+=food.protein_g
            Nutrition.Fats+=food.fat_total_g
            Nutrition.Carbs+=food.carbohydrates_total_g
            Nutrition.SatFats+=food.fat_saturated_g
            Nutrition.Fiber+=food.fiber_g
            Nutrition.Sugar+=food.sugar_g
            Nutrition.Sodium+=food.sodium_mg
            Nutrition.Potassium+=food.potassium_mg
            Nutrition.Cholestrol+=food.cholesterol_mg

        })
        setTotalNutrition(Nutrition)
        console.log(totalNutrition)
    },[foodArray])

  return (
    totalNutrition &&
    <div className='FoodResultDetails-Container All'>
    <GoBackButton />
     <div className='FoodResultDetails-Header-All'>
       <h1>{Math.round(totalNutrition.Calories)}<h4>Calories</h4></h1>
     </div>
     <div className='FoodResultDetails-Info'>
      <div className='FoodResultDetails-Info-Specific'><h2>Protein</h2><h4>{Math.round(totalNutrition.Protein)}g</h4></div>
      <div className='FoodResultDetails-Info-Specific'><h2>Carbohydrates</h2><h4>{Math.round(totalNutrition.Carbs)}g</h4></div>
      <div className='FoodResultDetails-Info-Specific'><h2>Fats</h2><h4>{Math.round(totalNutrition.Fats)}g</h4></div>
      <div className='FoodResultDetails-Info-Specific'><h2>Saturated Fats</h2><h4>{Math.round(totalNutrition.SatFats)}g</h4></div>
      <div className='FoodResultDetails-Info-Specific'><h2>Fiber</h2><h4>{Math.round(totalNutrition.Fiber)}g</h4></div>
      <div className='FoodResultDetails-Info-Specific'><h2>Sugar</h2><h4>{Math.round(totalNutrition.Sugar)}g</h4></div>
      <div className='FoodResultDetails-Info-Specific'><h2>Sodium</h2><h4>{Math.round(totalNutrition.Sodium)}mg</h4></div>
      <div className='FoodResultDetails-Info-Specific'><h2>Potassium</h2><h4>{Math.round(totalNutrition.Potassium)}mg</h4></div>
      <div className='FoodResultDetails-Info-Specific'><h2>Cholestrol</h2><h4>{Math.round(totalNutrition.Cholestrol)}mg</h4></div>




     </div>
    </div>
  )
}
