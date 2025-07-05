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
        console.log(selectedData[0].img)
        console.log(selectedData[0].extra_text)
        dispatch(setCurrentPost({
            name:selectedData[0].title,
            img:selectedData[0].img.match(/\.(jpe?g)$/i)?selectedData[0].img:null,
            likes:selectedData[0].ups,
            dislikes:selectedData[0].downs,
            explain:selectedData[0].extra_text,
            comments:[]
        }))
    },[post])

    //retrieve the comments for an individual post
    function handleComments(){
        setComdis(true)
        console.log(comdis)
        dispatch(getRedditComments({category:cat,postid:post}));
    }
    

    const stringToHTML = (str) => {
	const parser = new DOMParser();
	const doc = parser.parseFromString(str, 'text/html');
	return doc.body;
    };

    const htmlObject = document.createElement("div");
    htmlObject.innerHTML = currentPosts.explain
    console.log(typeof htmlObject.firstChild)

return (
    <div className="modal_post" id={post}>
        <img src={currentPosts.img}/>
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
                <div id="extra_post_text" dangerouslySetInnerHTML={{__html: currentPosts.explain}}></div>
            </div>
            <div className="comments">
                <BsChatRightTextFill className="comments" onClick={handleComments}/>
            </div>
        </div>
        <div className="Commentlist">
            {comdis? currentPosts.comments.map((item) =><Comment key={item.key} body={item.body} author={item.author}/>):null}
        </div>
    </div>   
    )
}

export default RedditPostModal;