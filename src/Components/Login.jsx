//rafce = React Arrow Funtion Component Export

import React, { useState } from 'react'
import Header from './Header'
import { useRef } from 'react';
import {checkValidateData} from '../utils/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile  } from "firebase/auth";
import { auth } from '../utils/firebase';
import { addUser } from '../utils/userSlice';
import { useDispatch } from 'react-redux';
import { BG_URL, USER_AVATAR } from '../utils/constants';

const Login = () => {
  const dispatch = useDispatch();
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errMessage, setErrorMessage] = useState([]);

  const email = useRef(null);
  const password = useRef(null);
  const uname = useRef(null);

  const toggleSignInForm = () =>{
    setIsSignInForm(!isSignInForm);
  }
  const handleButtonClick = () => {
    //Validate form data
    
    console.log(email.current.value);
    console.log(password.current.value);

 
      //const formValue = checkValidateData(isSignInForm ? email.current.value , password.current.value : uname.current.value, email.current.value, password.current.value);
    
      const formValue = checkValidateData(isSignInForm ? "" : uname.current.value, email.current.value, password.current.value                   

      );
    
    console.log(formValue);
    setErrorMessage(formValue);


    if(!formValue) return;

      //sign in sign up logic
      if(!isSignInForm){
        //sign up form
        createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
          .then((userCredential) => {
           // Signed up 
          const user = userCredential.user;
          // so that redux store can update in first go;
            updateProfile(user,  {
               displayName:  uname.current.value, 
               photoURL: USER_AVATAR
          }).then(() => {
              const {uid, email, displayName, photoURL} = auth.currentUser; // auth.currentUser is the updated value, user is the old value
              dispatch(addUser({uid: uid, email:email, displayName: displayName, photoURL:photoURL}));
              console.log(user);
             
         }).catch((error) => {
            setErrorMessage(error.message);
      });
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      setErrorMessage([errorCode + "-" + errorMessage])
    });
      }else{
        signInWithEmailAndPassword(auth, email.current.value, password.current.value)
          .then((userCredential) => {
         // Signed in 
        const user = userCredential.user; 
        console.log(user);
        
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
          setErrorMessage([errorCode + "-" + errorMessage])
      });

      }
  }
  return (
    <div>
      <Header />
      <div className='bg-gradient-to-b from-black relative'>
         <img className='relative' src={BG_URL} />
      </div>
      <form onSubmit={(e) => e.preventDefault()} className='w-3/12 absolute p-12 rounded rounded-lg bg-black/70 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mx-auto'>
        <h1 className='text-white pb-4 text-xl'>{isSignInForm? "Sign In" : "Sign Up"}</h1>
        {!isSignInForm && (      
          <input type='text' ref={uname} placeholder='Full Name' className='p-2 rounded my-2 w-full bg-gray-300'/>   
          )}
        <input type='email' ref={email} placeholder='Email address' className='p-2 rounded my-2 w-full bg-gray-300'/>
        <input type='password' ref={password} placeholder='Password' className='p-2 my-2 rounded w-full bg-gray-200' />
        {errMessage && errMessage.length > 0 && (
          <ul className='text-red-200 text-xs font-bold mt-2'>
            {errMessage.map((err, index) =>(
              <li key={index}> <p>{err}</p></li>
            ))}
          </ul>
        )}
        <button className='py-2 mt-6 bg-red-700 rounded cursor-pointer w-full text-white fw-semibold' onClick={handleButtonClick}>
          {isSignInForm? "Sign In" : "Sign Up"}
        </button>
        <p className='text-white py-4 text-sm cursor-pointer' onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix? Sign Up now." : "Already registered? Sign In now."}</p>
      </form>
   </div>
  )
}

export default Login