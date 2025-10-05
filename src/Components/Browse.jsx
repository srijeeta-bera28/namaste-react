
import Header from './Header'
import { API_OPTIONS, MOVIE_URL } from '../utils/movieAPI'

import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopratedMovies from '../hooks/useTopratedMovies';

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopratedMovies();
  return (
    <div>
      <Header />
      <MainContainer />
         {/* 
            Main Container 
              - Video Background
              - Video Title
            Secondary Container
              - Movie List * n
              - cards * n
            */}
            <SecondaryContainer />
    </div>
  )
}

export default Browse