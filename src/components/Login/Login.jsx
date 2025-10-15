import React, { useState } from 'react'
import { NavLink } from 'react-router'
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { auth } from '../Firebase/firebase.init';


  const provider = new GoogleAuthProvider();



const Login = () => {

  const [user,setUser] =useState(null);

   const handleGoogleSignIn = () => { 
     //console.log('asif  ');
     signInWithPopup(auth,provider)
     .then (result => {
      console.log(result);
      setUser (result.user);
     })
    
   }

   const handleSignOut = () => { 
   const auth =getAuth();
   signOut(auth) .then(() => { 
     console.log('sign out ');
     setUser(null);

   });
   }


  return (

    <>
       
       <div>
        
       
              
             {user ?  <button onClick={handleSignOut} className='btn'>Sign out</button> :              <button className='bg-black text-white rounded-full p-6' onClick={handleGoogleSignIn}>Login</button>
}
             
             
             
             <h2>{user?.displayName}</h2>
             <img src={user?.photoURL} alt="" />


       </div>

      



   
    
    </>
      
       
         
       
       
        )
}

export default Login 