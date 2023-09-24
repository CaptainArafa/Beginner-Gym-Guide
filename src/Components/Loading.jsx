import React from 'react'
import { Oval } from 'react-loader-spinner'

export const Loading = () => {
  return <Oval
    height={80}
    width={80}
    color="#fff"
    wrapperStyle={{}}
    wrapperClass=""
    visible={true}
    ariaLabel='oval-loading'
    secondaryColor="#grey"
    strokeWidth={4}
    strokeWidthSecondary={3}
      
  />
  
}
export const LoadingSmall = () => {
  return <Oval
    height={20}
    width={20}
    color="#fff"
    wrapperStyle={{}}
    wrapperClass=""
    visible={true}
    ariaLabel='oval-loading'
    secondaryColor="#grey"
    strokeWidth={4}
    strokeWidthSecondary={3}
      
  />
  
}
