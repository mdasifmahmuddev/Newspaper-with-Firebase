import { createUserWithEmailAndPassword } from 'firebase/auth';
import React from 'react'
import { auth } from '../Firebase/firebase.init';

const LoginTwo = () => {

    const handleRegister = (e) => { 
        e.preventDefault();
        const password=e.target.password.value ;
        const email=e.target.email.value ; 
 
        createUserWithEmailAndPassword (auth,email,password)
        .then(result => { 
            const user = result.user ;
            console.log(user);
        })
        .catch (error => { 
            console.error('Error:', error.code, error.message)  
        })
    }


  return (
     <>
     
     <form onSubmit={handleRegister} >

        <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Registration  now!</h1>
     
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <fieldset className="fieldset">
          <label  className="label">Email</label>
          <input name='email' type="email" className="input" placeholder="Email" required />
          <label className="label">Password</label>
          <input name='password' type="password" className="input" placeholder="Password" required />
          <div><a className="link link-hover">Forgot password?</a></div>


          <button className="btn btn-neutral mt-4">Registration</button>
        </fieldset>
      </div>
    </div>
  </div>
</div>
     </form>

     
     
     </>
  )
}

export default LoginTwo