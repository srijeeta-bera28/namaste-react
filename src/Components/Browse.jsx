
import Header from './Header'
import { API_OPTIONS, MOVIE_URL } from '../utils/movieAPI'

import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer';

const Browse = () => {
  useNowPlayingMovies();
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
    </div>
  )
}

export default Browse