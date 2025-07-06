
import './Reddit_post.css';
import { TiArrowUpThick } from "react-icons/ti";
import { TiArrowDownThick } from "react-icons/ti";
import { useNavigate} from "react-router";
import { useSelector } from 'react-redux';
import { categoryState } from '../Categories/categorySlice';


function RedditPost({img_src,description_text,post_id,author,ups,downs}){

    const currentcat = useSelector(categoryState)

    const navigate = useNavigate()

    //Navigate to specific post
    function handlePost(){
        navigate(`/${currentcat}/${post_id}`)
    }


    return (
                <div className="post" id={post_id} data-testid="post_test">
                    {!img_src.match(/\.(jpe?g|png)$/i)?null:<img src={img_src}/>}
                    <div className="lower_post">
                        <p id="post_description" >{description_text}</p>
                        <div className="likes_dislikes">
                            <TiArrowUpThick className="arrow_up" data-testid="Like_button"/><p>{ups}</p>
                            <TiArrowDownThick className="arrow_down" data-testid="Dislike_button"/><p>{downs}</p>
                        </div>
                        <div id="author_and_button">
                        <p>posted by <b>{author}</b></p>
                        <button type="button" onClick={handlePost} data-testid="Go_post"> see post</button>
                        </div>
                    </div>
                </div>
    )
}

export default RedditPost;