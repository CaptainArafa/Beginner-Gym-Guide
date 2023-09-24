import React, { useContext } from 'react'
import {Link, useNavigate, useParams} from "react-router-dom"
import { ExercisesContext } from './GlobalContext'
import {v4 as uuidv4} from 'uuid';



export const FoodSearchItem = ({result, unit}) => {
    const {foodArray,setFoodArray,calories,setCalories} = useContext(ExercisesContext)
    const navigate = useNavigate()
    const params=useParams()
    const handleClick= () => {
      result&&
        setFoodArray(prevFoodArray=>[...prevFoodArray,{...result[0], Meal:params.id, id:uuidv4()}])
        navigate("/foodtracking")
    
 
    }
  return (

    <div className='FoodSearch-Item-Container'>
        
        <Link className='noTextDecoration' to={`/FoodTracking/${params.id}/${result[0]?.name}`}>
        <div>
            <h3>{result[0]?.name}</h3>
            <div className='FoodSearch-Item-Inner'>
            <h5>{result[0]?.calories} cal,</h5>
            <h5>{unit ==="oz"? Math.round(result[0]?.serving_size_g/28.3495): result[0]?.serving_size_g} {unit ==="oz" ? "oz":"grams"}</h5>
            </div>

        </div>
        </Link>
        <button onClick={handleClick} className='AddFoodItem-button'>+</button>
      

    </div>

   
  )
}
