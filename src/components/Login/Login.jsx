import React from 'react'
import { NavLink } from 'react-router'
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from '../Firebase/firebase.init';


  const provider = new GoogleAuthProvider();



const Login = () => {

   const handleGoogleSignIn = () => { 
     //console.log('asif  ');
     signInWithPopup(auth,provider)
     .then (result => {
      console.log(result);
     })
    
   }


  return (
      
         <button className='bg-black text-white rounded-full p-6' onClick={handleGoogleSignIn}>Login</button>
        )
}

export default Login 