
import Header from './Header'
import { API_OPTIONS, MOVIE_URL } from '../utils/movieAPI'

import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopratedMovies from '../hooks/useTopratedMovies';
import GptSearch from './GptSearch';
import { useSelector } from 'react-redux';
//import useMovieSearchResult from '../hooks/useMovieSearchResult';

const Browse = () => {
  const showGptSearch = useSelector(store => store.gpt.showGptSearch);

  useNowPlayingMovies();
  usePopularMovies();
  useTopratedMovies();
 
  return (
    <div>
      <Header />
      {showGptSearch ? (
        <GptSearch />
      ):(
        <>
         <MainContainer />
         <SecondaryContainer />
        </>
      )}
      
     
         {/* 
            Main Container 
              - Video Background
              - Video Title
            Secondary Container
              - Movie List * n
              - cards * n
            */}
            
    </div>
  )
}

export default Browse