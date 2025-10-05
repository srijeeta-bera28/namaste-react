import React from 'react'
import MovieList from './MovieList'
import MovieCard from './MovieCard'
import { useSelector } from 'react-redux'

function SecondaryContainer() {
  const movies = useSelector(store => store.movies);
  console.log("now plaing movies", movies)
  return (
    movies.nowPlayingMovies && (
    <div className='bg-black'>
      <div className='-mt-52 relative z-3 '>
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
        <MovieList title={"Popular"} movies={movies.popularMovies}/>
        <MovieList title={"Top Rated"} movies={movies.topratedMovies}/>
      </div>
      {/* MovieList - Popular 
       - Movie Card 
      MovieList - Now Playing 
      MovieList - Trending 
      MovieList - Horror */}
    </div>
    )
  )
}

export default SecondaryContainer