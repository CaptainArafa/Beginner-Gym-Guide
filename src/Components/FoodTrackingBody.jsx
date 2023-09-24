import React, { useContext, useEffect, useState } from 'react'
import {Link} from "react-router-dom"
import { ExercisesContext } from './GlobalContext'

export const FoodTrackingBody = () => {
  const {foodArray,setFoodArray,calories,setCalories,setCaloriesAte} = useContext(ExercisesContext)
  

  useEffect(()=>{
    let BreakfastCals = 0
    let LunchCals = 0
    let DinnerCals = 0
    foodArray.map((food)=>{
      if(food.Meal=="Breakfast"){
       BreakfastCals= BreakfastCals +food.calories
      }
      if(food.Meal=="Lunch"){
        LunchCals=LunchCals + food.calories
       }
       if(food.Meal=="Dinner"){
        DinnerCals= DinnerCals + food.calories
       }
       
    })
    setCaloriesAte(Math.round(BreakfastCals+LunchCals+DinnerCals))
    setCalories({Breakfast:Math.round(BreakfastCals) ,Lunch: Math.round(LunchCals),Dinner:Math.round(DinnerCals)})
  },[foodArray])
  console.log(foodArray)
  const RemoveFood = (ID) => {
      const newFood=foodArray.filter((food)=>{
        return food.id !==ID
      })
      setFoodArray(newFood)
  }

  return (
    <div className='Food-Tracking-Meals-Container'>
      <div className='firstDivs'><div className='Meals-Title'><div>Breakfast 
        
        
      <div className='Added-Meals'>


{foodArray.map((food)=>{
  return food.Meal ==="Breakfast" &&
<div className='Added-Meal-Container'>
<div>
 <h4>{food.name}</h4>
 <h5>{food.serving_size_g} grams</h5>
  </div>
  <div className='SpecificFoodCals-Container'>
  <h4>{Math.round(food.calories)}</h4>
  <button onClick={()=>RemoveFood(food.id)} className='RemoveFood-Button'>x</button>
  </div>
   </div>
   })}
  </div>
        
        
        
        <Link to={"/FoodTracking/Breakfast"} className='Add-Food-Button'>ADD FOOD</Link></div><h4>{calories.Breakfast}</h4></div>
      </div>
      <div className='firstDivs' ><div className='Meals-Title'><div>Lunch 
        
      <div className='Added-Meals'>


{foodArray.map((food)=>{
  return food.Meal ==="Lunch" &&
<div className='Added-Meal-Container'>
<div>
 <h4>{food.name}</h4>
 <h5>{food.serving_size_g} grams</h5>
  </div>
  <div className='SpecificFoodCals-Container'>
  <h4>{Math.round(food.calories)}</h4>
  <button onClick={()=>RemoveFood(food.id)} className='RemoveFood-Button'>x</button>
  </div>
   </div>
   })}
  </div>
        <Link to={"/FoodTracking/Lunch"} className='Add-Food-Button'>ADD FOOD</Link></div><h4>{calories.Lunch}</h4></div>
    

      </div>
      <div className='firstDivs'><div className='Meals-Title'><div>Dinner
        
      <div className='Added-Meals'>

       
{foodArray.map((food)=>{
  return food.Meal ==="Dinner" &&
<div className='Added-Meal-Container'>
<div>
 <h4>{food.name}</h4>
 <h5>{food.serving_size_g} grams</h5>
  </div>
  <div className='SpecificFoodCals-Container'>
  <h4>{Math.round(food.calories)}</h4>
  <button onClick={()=>RemoveFood(food.id)} className='RemoveFood-Button'>x</button>
  </div>
   </div>
   })}</div>
   
  
        
         <Link to={"/FoodTracking/Dinner"} className='Add-Food-Button'>ADD FOOD</Link></div><h4>{calories.Dinner}</h4></div>
      
      </div> 
      <Link className='Nutrition-Button' to={'/foodtracking/nutrition'}>Nutrition</Link>
    </div>
  )
}
