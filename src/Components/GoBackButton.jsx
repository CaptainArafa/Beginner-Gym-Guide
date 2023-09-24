import React from 'react'
import { useNavigate } from 'react-router-dom'
import { BiLeftArrowAlt } from "react-icons/bi";

export const GoBackButton = ({howfar}) => {
  const history = useNavigate()
  return (
 <button className='GoBack-Button' onClick={()=>history(howfar ?-0.5:-1)}><BiLeftArrowAlt size={25} /><h3>Return</h3></button>
  )
}
