import React from 'react'
import { GiRun } from "react-icons/gi";
import { FaDumbbell } from "react-icons/fa";
import { NavLink, Link } from 'react-router-dom';

export const CategoryCard = ({category}) => {
  return (
    <Link style={{textDecoration:"none"}} to={`${category}`}>
    <div className='Category-Card-Container'>
        {category==="cardio"? <GiRun size={40} fill='black' className='Category-Card-Icon'/>: <FaDumbbell size={40} fill='black' className='Category-Card-Icon'/>}
        <h2 className='Category-Card-Name'>{category}</h2>
    </div>
    </Link>
  )
}
