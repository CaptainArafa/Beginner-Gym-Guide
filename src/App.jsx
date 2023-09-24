
import './App.css'
import { NavigationBar } from './Components/NavigationBar'
import { HomePage } from './Components/HomePage'
import { PathCards } from './Components/PathCards'
import { Route, Routes } from "react-router-dom"
import { LoseFatPath } from './Components/GymForm'
import { Exercises } from './Components/Exercises'
import { CategoryExercises } from './Components/CategoryExercises'
import { ExercisesProvider } from './Components/GlobalContext'
import { SpecificExercise } from './Components/SpecificExercise'
import { FoodTracking } from './Components/FoodTracking'
import { FoodTrackingSearch } from './Components/FoodTrackingSearch'
import { FoodResultDetails } from './Components/FoodResultDetails'
import { WorkoutPlan } from './Components/WorkoutPlan'
import { FoodTrackingNutrition } from './Components/FoodTrackingNutrition'
import { SignIn } from './Components/SignIn'
function App() {
  

  return (
    <>
    <ExercisesProvider>
    <NavigationBar />
   
   <Routes>
    <Route path='/' element={<HomePage />} />
    <Route path='/GymGuide' element={<PathCards />} />
    <Route path='/GymGuide/GainMusclePath/Form' element={<LoseFatPath />} />
    <Route path='/GymGuide/LoseFatPath/Form' element={<LoseFatPath />}/>
    <Route path='/GymGuide/LoseFatPath/WorkoutPlan' element={<WorkoutPlan />} />
    <Route path='/GymGuide/GainMusclePath/WorkoutPlan' element={<WorkoutPlan />}/>
    <Route path='/FoodTracking' element={<FoodTracking />} />
    <Route path='/FoodTracking/:id' element={<FoodTrackingSearch />} />
    <Route path='/FoodTracking/:id/:id' element={<FoodResultDetails />} />
    <Route path='/FoodTracking/Nutrition'element={<FoodTrackingNutrition />} />
    <Route path='/Exercises' element={<Exercises />} />
    <Route path='/Exercises/:id' element={<CategoryExercises />} />
    <Route path='/Exercises/:id/:id' element={<SpecificExercise />} />
    <Route path='/SignIn' element={<SignIn />}/>
    
    
    
   </Routes>
   </ExercisesProvider>
    </>
  )
}

export default App
