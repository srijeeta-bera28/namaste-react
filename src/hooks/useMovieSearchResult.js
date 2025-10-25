import { useDispatch } from "react-redux"
import { addSearchMovies } from "../utils/moviesSlice";
//import { useEffect } from "react";
import { API_OPTIONS } from "../utils/movieAPI";


const useMovieSearchResult = () => {
    const dispatch = useDispatch();
  
    const getMovieSearchResult = async (query) =>{ 
        const data = await fetch(`https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(query)}&include_adult=false&language=en-US&page=1`, API_OPTIONS);
        const json = await data.json();
        dispatch(addSearchMovies(json.results));
        console.log("search result",json.results)
        return json.results; // Need to return as we need to use data 
        

        
    };
    // useEffect(()=>{
    //     getMovieSearchResult();
    // }, [])
    return getMovieSearchResult; 
}

export default useMovieSearchResult;