import "./feedCard.css";
import more from './assets/img/icons/more.svg'
import dummy from "./assets/img/dummy.jpg";
import heart from "./assets/img/icons/heart.svg";
import comment from "./assets/img/icons/comment.svg"
import share from "./assets/img/icons/direct.svg"
import collection from "./assets/img/icons/collection.svg"
import smile from "./assets/img/icons/smile.png"
export const FeedCard = ()=>{


    return (
        <>
        <div className = "card">
            <div className = "card-top flex">
                <div className= "user-details flex">
                    <div className="userImage">

                    <img src= "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60" alt="" className="round" />
                    </div>
                    <div>
                        <p className = "user-name">user Name</p>
                        <p className = "user-location">user location</p>
                    </div>
                </div>
                <div>
                    <img src = {more} alt = "options" className="more"/>
                </div>
            </div>

            <div className="card-image">
                <img src= {dummy} alt="Mainimage" />
                </div>

                <div className="card-top flex">
            <div className = "flex ">
                <img src= {heart} alt="" className="icons" />
                <img src= {comment} alt="" className="icons" />
                <img src={share} alt="" className="icons" />

            </div>
            <div>
                <img src= {collection} alt="" className="icons" />
            </div>
        </div>

        <div>
            <h1 className="likes">
                23456 likes
            </h1>
        </div>

        <div className="card-top flex">

     
                    <img src = {smile} alt = 'sime' className="smileImage"/>
                    <input type="text" placeholder="add you comments" className="comment-input"/>
                    <button type="submit" className="btn">Post</button>
              

        </div>
           
        </div>
        
        

        </>
    )
}