import React from 'react'
import { useSelector } from 'react-redux';
import MovieCard from './MovieCard';
import { IMG_CDN_URL } from '../utils/movieAPI';

const GptMovieSuggestions = () => {
 const searchMovies = useSelector(store => store.movies.searchMovies);
  return (
    <>
      <h1>GPT list</h1>
    <div className='flex flex-wrap gap-4 bg-black/50 justify-center absolute p-4 w-full top-full'>
        {searchMovies?.map((movie) =>( 
          <div style={{ backgroundImage: `url(${IMG_CDN_URL + movie.poster_path})`, backgroundSize: "cover", 
          backgroundRepeat: "no-repeat", backgroundPosition: "center",}} className="pb-[30%] w-[20%] rounded-md relative overflow-hidden shadow-lg"> 
          {/* <MovieCard key={movie.id} posterPath={movie.poster_path}/> */}
          {/* <img className='w-30' src={IMG_CDN_URL + movie.poster_path} /> */}
          <h3 className='absolute bg-white p-2 bottom-0 w-full'>{movie.original_title}</h3>
          </div>
        ))}
    </div>
  </>
  )
}

export default GptMovieSuggestions