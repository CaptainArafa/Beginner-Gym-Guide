import React, { useContext, useEffect, useState } from 'react'
import { ExercisesContext } from './GlobalContext'
import {auth,provider} from "../firebase-Config"
import {createUserWithEmailAndPassword,signInWithPopup,signOut,signInWithEmailAndPassword,onAuthStateChanged} from "firebase/auth"
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from 'react-router-dom';

export const SignIn = () => {
    const [signInEmail,setSignInEmail] = useState("")
    const [signInPassword,setSignInPassword] = useState("")
    const [LogInEmail,setLogInEmail] = useState("")
    const [LogInPassword,setLogInPassword] = useState("")
    const [willSignIn,setWillSignIn] = useState(false)
    const [error,setError] = useState(null)
    const navigate = useNavigate()

    const {setIsHome,setUserInfo,userInfo} = useContext(ExercisesContext)
    useEffect(()=>{
        window.location.pathname==='/Home' ? setIsHome(true):setIsHome(false)
    },[])
    useEffect(()=>{
     const timer=setTimeout(()=>{
        setError(null)
     },2000)

     return()=>{
        clearTimeout(timer)
     }
    },[error])

    const SignIn = async () => {
        if(willSignIn){
            try{
                await createUserWithEmailAndPassword(auth,signInEmail,signInPassword)
                setSignInEmail("")
                setSignInPassword("")
                onAuthStateChanged(auth,(user)=>{
                    if(user){
                        setUserInfo({name:user.email})
                    }
                    else{
                        console.log('no user')
                    }
                })
            }
            catch(err){
                setError("Invalid Email or Password")
            }
        }
        else{
            try{
            await signInWithEmailAndPassword(auth,signInEmail,signInPassword)
            setLogInEmail("")
            setLogInPassword("")
            }
            catch(err){
                setError("Invalid Email or Password")
            }
        }
        
        
    }
    const LogOut = async() =>{
        try{
        await signOut(auth)
        onAuthStateChanged(auth,(user)=>{
            if(user){
                console.log('Logged In')
            }
            else{
                console.log('no user')
            }
        })
    }
        catch(err){
            console.error(err.message)
        }

    }
    const Google = () =>{
       
        signInWithPopup(auth,provider).then((result)=>{
            setUserInfo({
                name:result.user.displayName,
                email:result.user.email,
                photo:result.user.photoURL})
        })
      
        .catch((err)=>{
        console.error(err.message)
        })
            
        
       
    }
   

  return (
    !userInfo?
    <div className='User-Verification-Container'>
        <h2 className='User-Verification-Title'>{willSignIn?"Sign In":"Login"}</h2>
        <input placeholder='Enter Email'type='text' required value={willSignIn?signInEmail:LogInEmail} onChange={(e)=>willSignIn?setSignInEmail(e.target.value):setLogInEmail(e.target.value)} />
        {error&&<h5 style={{color:"red" ,textDecoration:"none",textAlign:"left"}}>{error}</h5>}
        <input placeholder='Enter Password' type="password" required value={willSignIn?signInPassword:LogInPassword} onChange={(e)=>willSignIn?setSignInPassword(e.target.value):setLogInPassword(e.target.value)} />
    
        <button className='SignIn-Button' onClick={SignIn}>{willSignIn?"Sign In":"Login"}</button>        
        
        <h5 onClick={()=>setWillSignIn(prev=>!prev)}>{willSignIn?"Not New? Login":"New? Create Account"}</h5>
        <button className='SignIn-Google' onClick={Google}><FcGoogle size={30}/></button>

    </div>
    :
    <div>
    <h1>Welcome,{userInfo.name}!</h1>
    </div>
  )
}
