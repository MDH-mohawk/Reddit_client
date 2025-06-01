import RedditPost from "../Reddit_post/Reddit_post.js";
import {useSelector} from 'react-redux';
import { RedditRealData,data_error,data_pending} from "./RedditPostsSlice.js";


function RedditPosts(){

  const posts = useSelector(RedditRealData);
  const pending = useSelector(data_pending);
  const error = useSelector(data_error);

  if(error){
    console.log("Too many entries!")
  }

  
  
  return (
    <div className='posts'>
      {
      Object.values(posts).map((item) => {
      return <RedditPost key={item.key} post_id={item.id} img_src={item.img} description_text={item.title} author={item.author} ups={item.ups} downs={item.downs}/>
      })
      }
    </div>
  )
}

export default RedditPosts;