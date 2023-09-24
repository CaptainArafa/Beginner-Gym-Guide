import React, { useContext, useEffect} from 'react'
import { ExercisesContext } from './GlobalContext'


export const FoodTrackingHeader = () => {

  const {caloriesAte,goalCalories,setGoalCalories,result,setResult} = useContext(ExercisesContext)

  useEffect(()=>{
    result && setGoalCalories(result)
  },[])

  const handleClick = () =>{
    let newCalories = prompt("Enter Calorie Intake",2500)
    if(isNaN(newCalories)){
      alert("Invalid input,calorie intake MUST be a number")
    }
    
    else if(newCalories){
    setGoalCalories(newCalories)
    }
  }

  return (
    <div>
        <h4>Calories Remaining:</h4>
        <div>
          <div className='Food-Tracking-Calories'> 
            <div><h2>{goalCalories}<button onClick={handleClick} className='edit-Calories-Button'>edit</button></h2><span>Goal</span></div> -
            <div><h2>{caloriesAte}</h2><span>Food</span></div> =
            <div><h2 style={goalCalories-caloriesAte <0? {color:"red"}: {color:"#49E603"}}>{goalCalories-caloriesAte}</h2><span>Remaining</span></div>
          </div>
        </div>
      </div>
  )
}
