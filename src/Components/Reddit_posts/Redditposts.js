import RedditPost from "../Reddit_post/Reddit_post.js";
import {useSelector} from 'react-redux';
import { RedditRealData} from "./RedditPostsSlice.js";


function RedditPosts(){

  const posts = useSelector(RedditRealData);
  
  return (
    <div className='posts'>
      {
      Object.values(posts).map((item) => {
      return <RedditPost key={item.key} post_id={item.id} img_src={item.src} description_text={item.titles}/>
      })
      }
    </div>
  )
}

export default RedditPosts;