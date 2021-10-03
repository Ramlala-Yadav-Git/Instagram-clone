import "./feedCard.css";
import more from './assets/img/icons/more.svg'
import heart from "./assets/img/icons/heart.svg";
import comment from "./assets/img/icons/comment.svg"
import share from "./assets/img/icons/direct.svg"
import collection from "./assets/img/icons/collection.svg"
import smile from "./assets/img/icons/smile.png"
import styled from "styled-components";
import { useState } from "react";
import { GetData } from "../../utils/localStorageData"

export const FeedCard = ({ img, postImg, SavePost, caption, likes, comments, id, handleRender, userId, username, userPic, showHeart, handleShowHeart }) => {
    const [inputPost, setInputPost] = useState("")
    const [redHeart, setRedHeart] = useState(false)
    const [count, setCount] = useState(0)
    const [isSave, setIsNotSave] = useState(false)
    const [saveCount, setSaveCount] = useState(0)
    const handleInput = (e) => {
        setInputPost(e.target.value)
    }
    const handleCommentInput = () => {
        const payload = {
            userId,
            comment: inputPost,
            id,
        }
        // console.log(payload);
        // getP(payload)
        handleRender(payload)
        setInputPost("")
    }
    const handleHeart = () => {
        const payload = {
            userId,
            id,
        }
        handleShowHeart(payload)
        hearSetup()
    }
    // console.log(userId, checkLike)
    const hearSetup = () => {
        const checkLike = showHeart.filter((el) => el._id === id)
        if (checkLike) {

            const c = checkLike.filter((el) => {
                return el._id === id
            })

            if (c.length !== 0 && count === 0) {
                setRedHeart(true)
                setCount(1)
            }
            else {
                setRedHeart(false)
                setCount(0)
            }
        }
    }
    const handleSave = () => {
        const payload = {
            userId,
            id,
        }
        SavePost(payload)
        handleSaveToLocal()
    }
    const user = GetData("loginData")
    const handleSaveToLocal = () => {

        if (user.data) {

            const getSavePosts = user.data.savedPosts.filter((el) => {

                return el === id
            })
            if (getSavePosts.length !== 0 && saveCount === 0) {
                setIsNotSave(true)
                setSaveCount(1)
            }
            else {
                setIsNotSave(false)
                setSaveCount(0)

            }
            // console.log(getSavePosts, id)

        }
    }
    return (
        <>
            <div className="card">
                <div className="card-top flex">
                    <div className="user-details flex">
                        <div className="userImage">

                            <img src={userPic} alt="" className="round" />
                        </div>
                        <div>
                            <p className="user-name">{username}</p>
                            {/* <p className="user-location">user location</p> */}
                        </div>
                    </div>
                    <div>
                        <img src={more} alt="options" className="more" />
                    </div>
                </div>

                <div className="card-image">
                    <img src={img} alt="Mainimage" />
                </div>

                <div className="card-top flex" >
                    <div className="flex " >
                        <div onClick={handleHeart}>

                            {
                                redHeart ? <svg aria-label="Unlike" className="iconHeart" color="#ed4956" fill="#ed4956" role="img" viewBox="0 0 48 48" ><path d="M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path></svg>

                                    : <img src={heart} alt="" className="icons" />

                            }
                        </div>
                        <img src={comment} alt="" className="icons" />
                        <img src={share} alt="" className="icons" />

                    </div>
                    <div onClick={handleSave}>
                        {!isSave ? <img src={collection} alt="" className="icons" />
                            : <svg aria-label="Remove" className="_8-yf5 " color="#262626" fill="#262626" height="20" role="img" viewBox="0 0 48 48" width="20"><path d="M43.5 48c-.4 0-.8-.2-1.1-.4L24 28.9 5.6 47.6c-.4.4-1.1.6-1.6.3-.6-.2-1-.8-1-1.4v-45C3 .7 3.7 0 4.5 0h39c.8 0 1.5.7 1.5 1.5v45c0 .6-.4 1.2-.9 1.4-.2.1-.4.1-.6.1z"></path></svg>
                        }
                    </div>
                </div>

                <LikeWrapper>
                    <h1 className="likes" >
                        {redHeart ? likes + 1 : likes}

                        {redHeart <= 1 ? " like" : " likes"}
                    </h1>
                </LikeWrapper>
                <CaptionWrapper>
                    <h4>{caption}</h4>
                </CaptionWrapper>
                <h5 style={{ fontWeight: 500, marginLeft: "15px", marginBottom: "10px" }}>
                    {comments.length === 0 ? "0 comment" : `${comments.length} comments.. `}
                </h5>
                <CommentWrapper>
                    {
                        <div>

                            <div>{

                                comments.map((el) => {


                                    return <div className="comments" key={el._id}>
                                        <img src={el.userId.profilePic} alt="" />
                                        <h5>{el.userId.username}</h5>
                                        <p>{el.comment}</p>


                                    </div>

                                })}
                            </div>

                        </div>
                    }

                </CommentWrapper>

                <div className="card-top flex">


                    <img src={smile} alt='sime' className="smileImage" />
                    <input type="text" placeholder="add you comments" className="comment-input"
                        onChange={handleInput}
                        value={inputPost}
                    />
                    <button type="submit" className="btn" onClick={handleCommentInput}>Post</button>


                </div>

            </div>



        </>
    )
}


const CommentWrapper = styled.div`
display: flex;
flex-direction: column-reverse;
/* border: 1px solid black; */
padding: 10px;
max-height: 100px;
overflow: auto;
::-webkit-scrollbar {
  width: 2px;
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey; 
  border-radius: 10px;
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: #b9248d; 
  border-radius: 5px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #a79292; 
}
& >div{
    display: flex;
    gap: 10px;
    flex-direction: column;
    margin-left: 8px;
}
& >div > :nth-child(1){
font-weight: bold;
}
& >div .comments{
    /* border:1px solid black; */
    display: flex;
    align-items: center;
    gap: 10px;
}
& >div .comments img{
  width:30px;
  height :30px;
  border-radius: 50%;

}
& >div .comments h5{
  font-weight: 500;

}
& >div .comments h5:hover{
  text-decoration: underline;
  cursor: pointer;

}


`
const LikeWrapper = styled.div`

`
const CaptionWrapper = styled.div`
margin: 15px;

`