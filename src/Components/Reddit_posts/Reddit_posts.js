import react,{useEffect,useState} from "react";
import RedditPost from "../Reddit_post/Reddit_post";
import { useParams,useSearchParams } from "react-router-dom";
import { image_arr } from "../../App";

function Reddit_posts(){
  const [filtered,setFiltered] = useState([])
  const {category} = useParams()
  const {searchTerm} = useParams()
  console.log(category)


  let filtered_items = []

  //Category filtering by choosing a specific category
  useEffect(() =>{
    filtered_items = image_arr.filter((i) => i.category === `${category}`);
    setFiltered(filtered_items)
    console.log(filtered)
  },[category]);


return (
<div className='posts'>
    {
    filtered.map((item) => {
      return <RedditPost key={item.key} img_src={item.src} description_text={item.text}/>
    })
    }
</div>

)
}

export default Reddit_posts;