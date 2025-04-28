import react,{useEffect,useState} from "react";
import RedditPost from "../Reddit_post/Reddit_post";
import { useParams } from "react-router-dom";
import { image_arr } from "../../App";

function Reddit_posts({array}){
  const [filtered,setFiltered] = useState([])
  const {category} = useParams()
  console.log(category)

  //Category filtering by choosing a specific category
  useEffect(() =>{
    let filtered_items = image_arr.filter((i) => i.category === `${category}`);
    setFiltered(filtered_items);
    console.log(category)
  },[category]);
  //Search filtering by t


return (
<div className='posts'>
    {
    array.map((item) => {
      return <RedditPost key={item.key} img_src={item.src} description_text={item.text}/>
    })
    }
</div>

)
}

export default Reddit_posts;