import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { Loading } from './Loading'



export const BPExercisesCard = ({exercise, id}) => {
  const params=useParams()
  
  return (
    <div className='BPExerciseCard-Container'>
      <Link to={`/Exercises/${params.id}/${id}`} style={{textDecoration:"none"}}>
        <div className='BPExerciseCard-Upper'>
        <img className='card-Image' src={exercise.gifUrl} alt={exercise.name} />
        </div>
        <div className='BPExerciseCard-Lower'> 
        <h2 className='BPExerciseCard-Title'>{exercise.name}</h2> 
        </div>
      </Link>
    </div>
  )
}
