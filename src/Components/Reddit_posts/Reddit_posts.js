import React from "react";
import RedditPost from "../Reddit_post/Reddit_post";
import {useSelector} from 'react-redux'
import {RedditPostsState} from './RedditPostsSlice.js'

function RedditPosts(){
  const posts = useSelector(RedditPostsState);
  

return (
<div className='posts'>
    {
    posts.map((item) => {
      return <RedditPost key={item.key} img_src={item.src} description_text={item.text}/>
    })
    }
</div>

)
}

export default RedditPosts;