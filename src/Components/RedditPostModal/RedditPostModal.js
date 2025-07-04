import {useEffect,useState} from "react";
import { BsChatRightTextFill } from "react-icons/bs";
import { TiArrowUpThick } from "react-icons/ti";
import { TiArrowDownThick } from "react-icons/ti";
import { currentPostState } from "./RedditPostModalSlice";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import "../RedditPostModal/RedditPostModelStyle.css"
import { useDispatch } from "react-redux";
import { setCurrentPost } from "./RedditPostModalSlice";
import { RedditRealData } from "../Reddit_posts/RedditPostsSlice";
import { getRedditComments } from "./RedditPostModalSlice";
import { categoryState } from "../Categories/categorySlice";
import Comment from "../Comment/Comment"

function RedditPostModal(){       

    //comments display variables using useState, maybe adding this to the store later
    const [comdis,setComdis] = useState(false)

    //different states used in functions
    const {post} = useParams()
    const dispatch = useDispatch()
    const data = useSelector(RedditRealData);
    const cat = useSelector(categoryState)

    const currentPosts = useSelector(currentPostState)

    console.log(currentPosts.img)

    // Retrieving the data for make an individual post page
    useEffect(() => {
        const selectedData = Object.values(data).filter((item) =>item.id === post);
        dispatch(setCurrentPost({
            name:selectedData[0].title,
            img:selectedData[0].img.match(/\.(jpe?g|png)$/i)?selectedData[0].img:null,
            likes:selectedData[0].ups,
            dislikes:selectedData[0].downs,
            explain:selectedData[0].extra_text,
            comments:[]
        }))
    },[post])

    //retrieve the comments for an individual post
    function handleComments(){
        dispatch(getRedditComments({category:cat,postid:post}));
        setComdis(true)
        console.log(comdis)
    }

return (
    <div className="modal_post" id={post}>
        <div id="image_scroll">
        {currentPosts.img === null?null:<img src={currentPosts.img}/>}
        </div>
        <div className="lower_post">
            <div id="post_text">
                <p id="post_modal_description">{currentPosts.name}</p>
                {currentPosts.explain === null?null:<p>Description:</p>}
                {currentPosts.explain === null?null:<div id="extra_post_text" dangerouslySetInnerHTML={{__html: currentPosts.explain}}></div>}
            </div>
            <div id="votes_comments">
            <div className="likes_dislikes">
                <div className="likes">
                    <TiArrowUpThick className="arrow_up" data-testid="Like_button"/>
                    <p>{currentPosts.likes}</p>
                </div>
                <div className="dislikes">
                    <TiArrowDownThick className="arrow_down" data-testid="Dislike_button"/>
                    <p>{currentPosts.dislikes}</p>
                </div>
            </div>
            <div className="comments">
                <BsChatRightTextFill className="comments" onClick={handleComments}/>
            </div>
            </div>
        </div>
        {comdis?        <div className="Commentlist">
            {comdis?<p>comments</p>:null}
            <div id="comments_array">
            {comdis? currentPosts.comments.map((item) =><Comment key={item.key} body={{__html: item.body}} author={item.author}/>):null}
            </div>
        </div>:null}
    </div>   
    )
}

export default RedditPostModal;