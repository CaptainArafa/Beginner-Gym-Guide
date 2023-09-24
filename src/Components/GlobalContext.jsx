import React, { useState } from 'react'

export const ExercisesContext = React.createContext()

export function ExercisesProvider({children}) {

  //FOR EXERCISES

  const [exercises, setExercises] = useState()
  const [muscleCategories,setMuscleCategories] = useState([])
  const [loading, setLoading] = useState(false)
  

  // FOR FOOD TRACKING
  const [caloriesAte,setCaloriesAte] = useState(0)
  const [goalCalories,setGoalCalories] = useState(2500)
  const [search,setSearch] = useState("")
  const [quantity,setQuantity] = useState("100")
  const [gymGoal,setGymGoal] = useState()
  const [unit,setUnit] = useState("g")
  const [resultsArray,setResultsArray] = useState([])
  const [result,setResult] = useState("")
  const [foodArray,setFoodArray] = useState([])
  const [workoutPlan,setWorkoutPlan] = useState()
  const [isHome,setIsHome] = useState(false)
  const [loggedIn,SetLoggedIn] =useState(false)
  const [userInfo,setUserInfo] = useState(null)
  const [calories,setCalories] = useState(
    {
      Breakfast:0,
      Lunch:0,
      Dinner: 0
    })
  const [data, setData] = useState({
      Age:"18",
      Gender:null,
      Height:"180",
      Weight:"70",
      Activity:null
  })


  //FUNCTIONS

  const calorieCalculator= (age,gender,height,weight,activity) => {
    const Age = Number(age)
    const Height= Number(height)
    const Weight = Number(weight)
    const Activity = Number(activity)
//Harris-Benedict Equation (BMR*Activity)
   return gender === "Male" ? 
   (10*Weight+6.25*Height-5*Age+5)*Activity: (10*Weight+6.25*Height-5*Age-161)*Activity
}
 
  

  return (
    <ExercisesContext.Provider value={
      {setExercises,exercises,muscleCategories,
        setMuscleCategories,loading,setLoading,
      search, setSearch, quantity,setQuantity,
    unit,setUnit,resultsArray,
    setResultsArray,foodArray,setFoodArray,
   calories,setCalories,goalCalories,setGoalCalories,
  caloriesAte,setCaloriesAte,data,setData,calorieCalculator,
workoutPlan,setWorkoutPlan,gymGoal,setGymGoal,result,setResult,userInfo,setUserInfo,isHome,setIsHome,loggedIn,SetLoggedIn}
      }>
        {children}
    </ExercisesContext.Provider>
  )
}
