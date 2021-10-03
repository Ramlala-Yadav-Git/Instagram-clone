import styles from "./ProfileTop.module.css"
import Avatar from '@material-ui/core/Avatar';
import { Navbar } from "../navbar/navbar";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { GetData } from "../../utils/localStorageData";
import axios from "axios";
import { Button } from "@material-ui/core";

const Post = styled.div`
  color: ${props => props.theme1 ? "black" : "#8e8e8e"};
  border-top:${props => props.theme1 ? "1px solid black" : "none"} ;
  font-size: 16px;
  padding: 2%;
    margin-right: 10%;
    text-align: center;
    
    width: 15%;
    cursor: pointer;

`

const Igtv = styled.div`
  color: ${props => props.theme2 ? "black" : "#8e8e8e"};
  border-top:${props => props.theme2 ? "1px solid black" : "none"} ;
  font-size: 16px;
  padding: 2%;
    margin-right: 10%;
    text-align: center;
    width: 15%;
    cursor: pointer;

`
const Saved = styled.div`
  color: ${props => props.theme3 ? "black" : "#8e8e8e"};
  border-top:${props => props.theme3 ? "1px solid black" : "none"} ;
  font-size: 16px;
  padding: 2%;
    margin-right: 10%;
    text-align: center;
    width: 15%;
    cursor: pointer;

`
const Tagged = styled.div`
  color: ${props => props.theme4 ? "black" : "#8e8e8e"};
  border-top:${props => props.theme4 ? "1px solid black" : "none"} ;
  font-size: 16px;
  padding: 2%;

    margin-right: 10%;
    text-align: center;
    width: 16%;
    cursor: pointer;

`


function ProfileTop() {
    const [theme1, setTheme1] = useState(true)
    const [theme2, setTheme2] = useState(false)
    const [theme3, setTheme3] = useState(false)
    const [theme4, setTheme4] = useState(false)
    const [post,setPost] = useState()

    const handlePost = () => {
        setTheme1(true)
        setTheme2(false)
        setTheme3(false)
        setTheme4(false)
    }
    const handleIgtv = () => {
        setTheme1(false)
        setTheme2(true)
        setTheme3(false)
        setTheme4(false)
    }
    const handleSaved = () => {
        setTheme1(false)
        setTheme2(false)
        setTheme3(true)
        setTheme4(false)
    }
    const handleTagged = () => {
        setTheme1(false)
        setTheme2(false)
        setTheme3(false)
        setTheme4(true)
    }
    
       let state = GetData("loginData")
        state = state.data.data
        let posts
    const getPost = (id)=>{
        axios.get(`http://localhost:8000/posts/user/${id}`)
        .then((res)=>{
            posts = res.data
            setPost(posts.data)
        })
    }
    useEffect(() => {
        getPost(state._id)
    }, [])
    console.log(post,'post');
    return <>
        <Navbar />
        <div className={styles.mainDiv}>
            <div className={styles.profilePicDiv}>
                <Avatar src={state.profilePic} alt="profilePic" className={styles.profilePic} />
            </div>
            <div className={styles.userInfo}>
                <div className={styles.firstDiv}>
                    <div className={styles.userName}>
                        <p className={styles.name1}>{state.username}</p>

                    </div>
                    <div className={styles.editButtonDiv}>
                        <Button variant="outlined" className={styles.button}>
                            <Link to="/settings" className={styles.buttonLink}>
                                Edit Profile
                            </Link>
                        </Button>
                        

                    </div>
                    <div className={styles.stettingDiv}>
                        <Link to="/settings">

                            <svg aria-label="Options" class="_8-yf5 " color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 48 48" width="24"><path clip-rule="evenodd" d="M46.7 20.6l-2.1-1.1c-.4-.2-.7-.5-.8-1-.5-1.6-1.1-3.2-1.9-4.7-.2-.4-.3-.8-.1-1.2l.8-2.3c.2-.5 0-1.1-.4-1.5l-2.9-2.9c-.4-.4-1-.5-1.5-.4l-2.3.8c-.4.1-.8.1-1.2-.1-1.4-.8-3-1.5-4.6-1.9-.4-.1-.8-.4-1-.8l-1.1-2.2c-.3-.5-.8-.8-1.3-.8h-4.1c-.6 0-1.1.3-1.3.8l-1.1 2.2c-.2.4-.5.7-1 .8-1.6.5-3.2 1.1-4.6 1.9-.4.2-.8.3-1.2.1l-2.3-.8c-.5-.2-1.1 0-1.5.4L5.9 8.8c-.4.4-.5 1-.4 1.5l.8 2.3c.1.4.1.8-.1 1.2-.8 1.5-1.5 3-1.9 4.7-.1.4-.4.8-.8 1l-2.1 1.1c-.5.3-.8.8-.8 1.3V26c0 .6.3 1.1.8 1.3l2.1 1.1c.4.2.7.5.8 1 .5 1.6 1.1 3.2 1.9 4.7.2.4.3.8.1 1.2l-.8 2.3c-.2.5 0 1.1.4 1.5L8.8 42c.4.4 1 .5 1.5.4l2.3-.8c.4-.1.8-.1 1.2.1 1.4.8 3 1.5 4.6 1.9.4.1.8.4 1 .8l1.1 2.2c.3.5.8.8 1.3.8h4.1c.6 0 1.1-.3 1.3-.8l1.1-2.2c.2-.4.5-.7 1-.8 1.6-.5 3.2-1.1 4.6-1.9.4-.2.8-.3 1.2-.1l2.3.8c.5.2 1.1 0 1.5-.4l2.9-2.9c.4-.4.5-1 .4-1.5l-.8-2.3c-.1-.4-.1-.8.1-1.2.8-1.5 1.5-3 1.9-4.7.1-.4.4-.8.8-1l2.1-1.1c.5-.3.8-.8.8-1.3v-4.1c.4-.5.1-1.1-.4-1.3zM24 41.5c-9.7 0-17.5-7.8-17.5-17.5S14.3 6.5 24 6.5 41.5 14.3 41.5 24 33.7 41.5 24 41.5z" fill-rule="evenodd"></path></svg>

                        </Link>
                    </div>

                </div>
                <div className={styles.secondDiv}>
                    <div className={styles.postFollowers}>
                        <div className={styles.data}>{state.tagedPosts}</div>
                        <div className={styles.text}>posts</div>

                    </div>
                    <div className={styles.postFollowers}>
                        <div className={styles.data}>{state.followers}</div>
                        <div className={styles.text}>followers</div>

                    </div>
                    <div className={styles.postFollowers}>
                        <div className={styles.data}>{state.following}</div>
                        <div className={styles.text}>following</div>

                    </div>

                </div>
                <div className={styles.thirdDiv}>
                    <h1 className={styles.name}>{state.fullname}</h1>
                    <br />
                    <div className={styles.bio}>
                    <span >{state.bio}</span>
                    </div>
                </div>
            </div>


        </div>



        <div className={styles.postsMainDiv}>
            <div className={styles.titleHeading}>
                <Post theme1={theme1} onClick={handlePost}>
                    <svg aria-label="" className={styles.svg} color="#262626" fill="#262626" height="12" role="img" viewBox="0 0 48 48" width="12"><path clip-rule="evenodd" d="M45 1.5H3c-.8 0-1.5.7-1.5 1.5v42c0 .8.7 1.5 1.5 1.5h42c.8 0 1.5-.7 1.5-1.5V3c0-.8-.7-1.5-1.5-1.5zm-40.5 3h11v11h-11v-11zm0 14h11v11h-11v-11zm11 25h-11v-11h11v11zm14 0h-11v-11h11v11zm0-14h-11v-11h11v11zm0-14h-11v-11h11v11zm14 28h-11v-11h11v11zm0-14h-11v-11h11v11zm0-14h-11v-11h11v11z" fill-rule="evenodd"></path></svg>
                    <p>POSTS</p>
                </Post>
                <Igtv theme2={theme2} onClick={handleIgtv}>
                    <svg aria-label="" className={styles.svg} color="#262626" fill="#262626" height="12" role="img" viewBox="0 0 48 48" width="12"><path d="M41 10c-2.2-2.1-4.8-3.5-10.4-3.5h-3.3L30.5 3c.6-.6.5-1.6-.1-2.1-.6-.6-1.6-.5-2.1.1L24 5.6 19.7 1c-.6-.6-1.5-.6-2.1-.1-.6.6-.7 1.5-.1 2.1l3.2 3.5h-3.3C11.8 6.5 9.2 7.9 7 10c-2.1 2.2-3.5 4.8-3.5 10.4v13.1c0 5.7 1.4 8.3 3.5 10.5 2.2 2.1 4.8 3.5 10.4 3.5h13.1c5.7 0 8.3-1.4 10.5-3.5 2.1-2.2 3.5-4.8 3.5-10.4V20.5c0-5.7-1.4-8.3-3.5-10.5zm.5 23.6c0 5.2-1.3 7-2.6 8.3-1.4 1.3-3.2 2.6-8.4 2.6H17.4c-5.2 0-7-1.3-8.3-2.6-1.3-1.4-2.6-3.2-2.6-8.4v-13c0-5.2 1.3-7 2.6-8.3 1.4-1.3 3.2-2.6 8.4-2.6h13.1c5.2 0 7 1.3 8.3 2.6 1.3 1.4 2.6 3.2 2.6 8.4v13zM34.6 25l-9.1 2.8v-3.7c0-.5-.2-.9-.6-1.2-.4-.3-.9-.4-1.3-.2l-11.1 3.4c-.8.2-1.2 1.1-1 1.9.2.8 1.1 1.2 1.9 1l9.1-2.8v3.7c0 .5.2.9.6 1.2.3.2.6.3.9.3.1 0 .3 0 .4-.1l11.1-3.4c.8-.2 1.2-1.1 1-1.9s-1.1-1.2-1.9-1z"></path></svg>
                    <p>IGTV</p>
                </Igtv>
                <Saved theme3={theme3} onClick={handleSaved}>
                    <svg aria-label="" className={styles.svg} color="#262626" fill="#262626" height="12" role="img" viewBox="0 0 48 48" width="12"><path d="M43.5 48c-.4 0-.8-.2-1.1-.4L24 29 5.6 47.6c-.4.4-1.1.6-1.6.3-.6-.2-1-.8-1-1.4v-45C3 .7 3.7 0 4.5 0h39c.8 0 1.5.7 1.5 1.5v45c0 .6-.4 1.2-.9 1.4-.2.1-.4.1-.6.1zM24 26c.8 0 1.6.3 2.2.9l15.8 16V3H6v39.9l15.8-16c.6-.6 1.4-.9 2.2-.9z"></path></svg>
                    <p>SAVED</p>
                </Saved>
                <Tagged theme4={theme4} onClick={handleTagged}>
                    <svg aria-label="" className={styles.svg} color="#262626" fill="#262626" height="12" role="img" viewBox="0 0 48 48" width="12"><path clip-rule="evenodd" d="M45 1.5H3c-.8 0-1.5.7-1.5 1.5v42c0 .8.7 1.5 1.5 1.5h42c.8 0 1.5-.7 1.5-1.5V3c0-.8-.7-1.5-1.5-1.5zm-40.5 3h11v11h-11v-11zm0 14h11v11h-11v-11zm11 25h-11v-11h11v11zm14 0h-11v-11h11v11zm0-14h-11v-11h11v11zm0-14h-11v-11h11v11zm14 28h-11v-11h11v11zm0-14h-11v-11h11v11zm0-14h-11v-11h11v11z" fill-rule="evenodd"></path></svg>
                    <p>TAGGED</p>
                </Tagged>
            </div>

        </div>

        {(theme1) ? <div className={styles.posts}>
            {(post)&&
            post.map((item,i)=>(
            <div className={styles.pictures}>
                <img src="https://moneyscotch.com/wp-content/uploads/2019/09/69770954_2374368629345152_8522385848193008203_n-Cropped.jpg" alt="" />
            </div>
            ))}
            <div className={styles.pictures}>
                <img src="https://s3.ap-southeast-1.amazonaws.com/images.deccanchronicle.com/dc-Cover-bkjeh4gluvdkobm158k2m4ps21-20180725143525.Medi.jpeg" alt="" />
            </div>
            <div className={styles.pictures}>
                <img src="https://www.youngisthan.in/wp-content/uploads/2017/10/Virat-Kohli.jpg" alt="" />
            </div>
            <div className={styles.pictures}>
                <img src="https://www.youngisthan.in/wp-content/uploads/2017/10/Virat-Kohli.jpg" alt="" />
            </div>

            <div className={styles.pictures}>
                <img src="https://www.youngisthan.in/wp-content/uploads/2017/10/Virat-Kohli.jpg" alt="" />
            </div>

        </div> : ""}
        {(theme2) ? <div className={styles.posts}>
            <div className={styles.pictures}>
                <img src="https://femina.wwmindia.com/content/2021/jul/ladakhshutterstock10730658471627274968.jpg" alt="" />
            </div>
            <div className={styles.pictures}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/f/f8/Rangdum_village_grazing_fields.jpg" alt="" />
            </div>
            <div className={styles.pictures}>
                <img src="https://www.thrillophilia.com/blog/wp-content/uploads/2017/05/how-to-reach-ladakh-1.jpg" alt="" />
            </div>


        </div> : ""}
        {(theme3) ? <div className={styles.posts}>
            <div className={styles.pictures}>
                <img src="https://moneyscotch.com/wp-content/uploads/2019/09/69770954_2374368629345152_8522385848193008203_n-Cropped.jpg" alt="" />
            </div>
            <div className={styles.pictures}>
                <img src="https://s3.ap-southeast-1.amazonaws.com/images.deccanchronicle.com/dc-Cover-bkjeh4gluvdkobm158k2m4ps21-20180725143525.Medi.jpeg" alt="" />
            </div>



        </div> : ""}
        {(theme4) ? <div className={styles.posts}>
            <div className={styles.pictures}>
                <img src="https://moneyscotch.com/wp-content/uploads/2019/09/69770954_2374368629345152_8522385848193008203_n-Cropped.jpg" alt="" />
            </div>



        </div> : ""}






    </>


}

export default ProfileTop