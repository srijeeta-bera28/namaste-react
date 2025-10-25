import React, { useRef } from 'react'
import {lang} from '../utils/languageConstants'
import { useSelector } from 'react-redux'
//import openai from '../utils/opnai';
import useMovieSearchResult from '../hooks/useMovieSearchResult';

const GptSearchBar = () => {
 // const [query, setQuery] = useState("");
  const gptsearchText = useRef(null);
  const langKey = useSelector(store => store.config.lang);


 const getMovSearchRes = useMovieSearchResult();

  const  handleGPTSearchClick = async ()=>{
        console.log(gptsearchText.current.value);


      //  const gptQuery = "Act as Movie Recommendation system suggest some movies for the query: " + gptsearchText.current.value + ". only give me names of 5 movies, comma separated like the example result given ahed. Example Result: Gadar, Sholay, Phir hera feri, Chup chup ke, Don" ;

       // const gptResult = await openai.chat.completions.create({
       // model: 'gpt-4o',
       // messages: [{ role: 'developer', content: gptQuery}],
// });
const seracheMoviesQuery = gptsearchText.current.value.trim();
//if(seracheMoviesQuery) setQuery(seracheMoviesQuery);
// console.log(gptResult.choices);
const result = await getMovSearchRes(seracheMoviesQuery);
console.log("search movies", result);
  }
  return (
    <div className='pt-[10%] flex justify-center'>
        <form className='w-1/2 bg-black grid grid-cols-12' onSubmit={(e) => e.preventDefault()}>
            <input type='text' ref={gptsearchText} className='p-2 m-4 bg-white col-span-9 rounded-lg'placeholder={lang[langKey].gptSearchPlaceholder} />
            <button className='py-2 px-4 bg-red-700 text-white col-span-3 m-4 cursor-pointer rounded-lg' onClick={handleGPTSearchClick}>
              {lang[langKey].search}
            </button>
        </form>
    </div>
  )
}

export default GptSearchBar