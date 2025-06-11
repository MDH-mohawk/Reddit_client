
import './Reddit_post.css';
import { TiArrowUpThick } from "react-icons/ti";
import { TiArrowDownThick } from "react-icons/ti";
import { useNavigate} from "react-router";


function RedditPost({img_src,description_text,post_id,author,ups,downs}){

    const navigate = useNavigate()

    //Navigate to specific post
    function handlePost(){
        navigate(`/${currentcat}/${post_id}`)
    }


    return (
                <div className="post" id={post_id}>
                    {!img_src.match(/\.(jpe?g)$/i)?null:<img src={img_src}/>}
                    <div className="lower_post">
                        <div className="likes_dislikes">
                            <TiArrowUpThick className="arrow_up" data-testid="Like_button"/><p>{ups}</p>
                            <TiArrowDownThick className="arrow_down" data-testid="Dislike_button"/><p>{downs}</p>
                        </div>
                            <p id="post_description" >{description_text}</p>
                        <p>posted by <b>{author}</b></p>
                        <button type="button" onClick={handlePost}> see post</button>
                    </div>
                </div>
    )
}

export default RedditPost;