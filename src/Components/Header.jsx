import React, { useEffect } from 'react'
import { auth } from '../utils/firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import {useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO } from '../utils/constants';
import { toggleGptSearchView } from '../utils/gptSlice';
import {SUPPORTED_LANGUAGES} from '../utils/languageConstants';
import { changeLanguage } from '../utils/configStore';

const Header = () => {
  const navigate = useNavigate();
 const dispatch = useDispatch();
 const user = useSelector(store => store.user);
 const showGptSearch = useSelector(store => store.gpt.showGptSearch)
 console.log(user)
  function handleSignOut(){
      signOut(auth).then(() => {    
      // navigate("/");
    }).catch((error) => {
      navigate("/error");
    });
  }


    useEffect(()=>{
     
      const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
              // User is signed in
            
              const {uid, email, displayName, photoURL} = user;
              dispatch(addUser({uid: uid, email:email, displayName: displayName, photoURL:photoURL}));
              navigate("/browse")
            } else {
              // User is signed out
              dispatch(removeUser());
              navigate("/");
            
            }
        });
        // Unsubscribe when the component is unmounts ; Clean up function
        return () =>{
          unsubscribe();
        }

      }, [])

   const showUserInfo = user && location.pathname !== '/';

  const handleGptSearchClick = () =>{
    //Toggle GPT Search
    dispatch(toggleGptSearchView());
  } 
   const handleLanguageChange = (e) => {
      dispatch(changeLanguage(e.target.value));
  }
  return (
    <div className='fixed bg-gradient-to-b from-black absolute flex justify-between w-screen z-10 py-8 px-8'>
    <div className='logo'>
      {LOGO}
    </div>
 
     {showUserInfo &&  
      <div className='flex items-center gap-2'>
           { showGptSearch && (
            <select className='m-2 p-2 bg-gray-800 rounded-lg text-white' onClick={handleLanguageChange}>
                {SUPPORTED_LANGUAGES.map((lang) => (
                  <option value={lang.identifier} key={lang.identifier}>{lang.name}</option>
                ))}    
            </select>
         ) }
        <button onClick={handleGptSearchClick} className='py-2 px-4 mx-4 my-2 bg-yellow-200 text-grey font-medium rounded cursor-pointer'>{showGptSearch ? "Homepage" : "GPT Search"}</button>
      {/* <img className='w-10' src='https://wallpapers.com/images/high/netflix-profile-pictures-1000-x-1000-88wkdmjrorckekha.webp' /> */}
  
      <img className='w-10' src= {user.photoURL} />
      <button onClick={handleSignOut} className='font-medium border border-red-600 p-2 bg-red-500 rounded text-white cursor-pointer'>Sign Out</button>
    </div>
}
    </div>
    
  )
}

export default Header