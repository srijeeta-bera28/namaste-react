import React from 'react'
import GptSearchBar from './GptSearchBar';
import GptMovieSuggestions from './GptMovieSuggestions';
import { BG_URL } from '../utils/constants';

const GptSearch = () => {
  return (
    <>
    <div>
      <img className='absolute -z-10' src={BG_URL} />
      <GptSearchBar />
     
    </div>
     <GptMovieSuggestions />
     </>
  )
}

export default GptSearch;