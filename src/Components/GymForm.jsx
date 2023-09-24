import React, { useContext, useEffect} from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { ExercisesContext } from './GlobalContext'

export const LoseFatPath = () => {
    const params = useParams()
    console.log(window.location)
    const Navigate = useNavigate()
    const {data,setData} =useContext(ExercisesContext)
  
    
   

    const handleSubmit = (e) =>{
        e.preventDefault()
    
        


    }
    const handleChange = (e) => {
        
        e.target.value ?
        setData(prevdata=>{
            return {...prevdata, [e.target.name]:e.target.value}
        }) : setData(prevdata=>{
            return {...prevdata, [e.target.name]:e.target.id}
        })
        
    }
   
    const handleClick = () =>{
        if(data.Activity && data.Gender){
            if(window.location.pathname==="/GymGuide/LoseFatPath/Form")
            {
            Navigate("/GymGuide/LoseFatPath/WorkoutPlan")
            }
            else
            {
                Navigate("/GymGuide/GainMusclePath/WorkoutPlan")
            }
        }
       
    }

  return (
    <div className='Calorie-Calculator'>
        <h2 className='Calorie-Form-Title'>Calorie intake Calculator</h2>
        <div className='Calorie-Input-Fields'>
            <form className='Calorie-Form' onSubmit={handleSubmit}>
                <h3>Age</h3>
                <input type='text' id="" name='Age' value={data.Age} onChange={handleChange}/>
                <div className='Weight-Field'>
                    <h3>Weight</h3>
                <input type='text' id="" name='Weight' value={data.Weight} onChange={handleChange} />
                    <div className='unit'>kg</div>
                </div>
                <div className='Height-Field'>
                    <h3>Height</h3>
                    <input type='text' id=""name='Height' value={data.Height}onChange={handleChange} />
                    <div className='unit'>cm</div>
                </div>
                
                
                <label className='Activity-Label' for="Activity">How many workouts per week?</label>
                <select name='Activity' id='Activity-Select' onChange={handleChange}>
                    <option value={"1"}>-- Select an Option --</option>
                    <option value={"1.3"}>1 or 2 times per week</option>
                    <option value={"1.4"}>3 or 4 times per week</option>
                    <option value={"1.6"}>5 or 6 times per week</option>
                    
                </select>
                <div className='Gender-Fields'>
                <h3>Gender</h3>
                <label className='Gender-Label'>
                <input type='radio' id='Male' value={"Male"} name='Gender'onChange={handleChange} />
                <span>Male</span>
                </label>
                <label className='Gender-Label'>
                <input type='radio' id='Female' value={"Female"}  name='Gender'onChange={handleChange} />
                <span>Female</span>
                </label>
                </div>
                <button onClick={handleClick} className='Calorie-Calculate-Button'>Give me my plan</button>
            </form>
        </div>
    </div>
  )
}
