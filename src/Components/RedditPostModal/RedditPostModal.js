import {useState,useEffect} from "react";
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

function RedditPostModal(){   


    //different states used in functions
    const {post} = useParams()
    const dispatch = useDispatch()
    const data = useSelector(RedditRealData);
    const cat = useSelector(categoryState)

    const currentPosts = useSelector(currentPostState)

    // Retrieving the data for make an individual post page
    useEffect(() => {
        const selectedData = Object.values(data).filter((item) =>item.id === post);
        dispatch(setCurrentPost({
            name:selectedData[0].title,
            likes:selectedData[0].ups,
            dislikes:selectedData[0].downs,
            explain:selectedData[0].extra_text,
            comments:[]
        }))
    },[post])

    //function to remove image if there is no image
    let img_element;

    if(currentPosts.img !== undefined){
        img_element = <img src={currentPosts.img} alt="Defines the current post"/>
    } else{
        img_element = null;
    }

    //retrieve the comments for an individual post
    function handleComments(){
        dispatch(getRedditComments({category:cat,postid:post}));
    }
    console.log(currentPosts.comments.map((item) => item))

    

return (
    <div className="modal_post" id={post}>
        {img_element}
        <div className="lower_post">
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
            <div id="post_text">
                <p id="post_modal_description">{currentPosts.name}</p>
                <p id="extra_post_text">{currentPosts.explain}</p>
            </div>
            <div className="comments">
                <BsChatRightTextFill className="comments" onClick={handleComments}/>
            </div>
        </div>
        <div className="Commentlist">
            {currentPosts.comments.map((item) =><p id="comment_item">{item}</p>)}
        </div>
    </div>   
    )
}

export default RedditPostModal;