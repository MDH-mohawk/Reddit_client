import RedditPost from "../Reddit_post/Reddit_post.js";
import {useSelector} from 'react-redux';
import { RedditDispost, RedditRealData,RedditSearchData,data_error,data_pending} from "./RedditPostsSlice.js";
import { searchState } from "../Searchbar_header/SearchBarSlice.js";
import { useEffect,useState } from "react";
import { useNavigate } from "react-router";
import { categoryState } from "../Categories/categorySlice.js";



function RedditPosts(){

  const posts = useSelector(RedditRealData);
  const searchposts = useSelector(RedditSearchData)
  const cat = useSelector(categoryState)
  const term = useSelector(searchState)
  const pending = useSelector(data_pending);
  const error = useSelector(data_error);
  const navigate = useNavigate();
  const dispost = useSelector(RedditDispost)

  //Tried to create a script where the results for search are filtered. However dispost only is changed when the term is changed.
 
  //Showing error if too many entries have been made
  //Bedause 10 queries per minute is the limit with Reddit API call
  if(error){
    console.log("Too many entries!")
    return <p id="error_message">Too many entries! There's a maximum of 10 entries per minute. Wait a minute please</p>
  }

  //Loading message if the API call hasn't returned data yet
  while (pending){
    return <p id="Loading_message">Loading</p>
  }
  
  return (
    <div className='posts'>
      {
      Object.values(dispost).map((item) => {
      return <RedditPost key={item.key} post_id={item.id} img_src={item.img} description_text={item.title} author={item.author} ups={item.ups} downs={item.downs}/>
      })
      }
    </div>
  )
}

export default RedditPosts;