import styles from "./navbar.module.css"
import { FaSistrix, FaSyncAlt } from "react-icons/fa"
import Avatar from '@material-ui/core/Avatar';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import BookmarkBorderTwoToneIcon from '@material-ui/icons/BookmarkBorderTwoTone';
import SettingsIcon from '@material-ui/icons/Settings';
import { useState } from "react"
import { useHistory } from "react-router";
import { Link } from "react-router-dom"
// import axios from "axios";
import { shallowEqual, useSelector } from "react-redux";
import { GetData } from "../../utils/localStorageData";
import styled from "styled-components";
import { SuggestionFriend } from "../suggestion/SuggestionUser";
import { Typography } from "@material-ui/core";
const sample = "https://templates.joomla-monster.com/joomla30/jm-news-portal/components/com_djclassifieds/assets/images/default_profile.png"



export const Navbar = () => {
    const [profile, setProfile] = useState(false);
    const [home, setHome] = useState(true)
    const [message, setMessage] = useState(false);
    const [reels, setReels] = useState(false);
    const [likes, setLikes] = useState(false);
    const [search, setSearch] = useState(true)
    const [dropDown,setDropDown] = useState(false)
    const history = useHistory()
    const user = GetData("loginData")
    const myLoggedData = user.data.data
    console.log(myLoggedData);
    const handleProfile = () => {
        setProfile(!profile)

    }
    const handleHome = () => {
        setHome(true)
        setMessage(false)
        setReels(false)
        setLikes(false)
        setProfile(false)
        history.push("/")
    }
    const handleMessage = () => {
        setHome(false)
        setMessage(true)
        setReels(false)
        setLikes(false)
        setProfile(false)
        handleChatPush()
    }
    const handlePost = () => {
        setHome(false)
        setMessage(false)
        setReels(true)
        setLikes(false)
        setProfile(false)
        history.push("/postFirst")
    }
    const handleLikes = () => {
        setHome(false)
        setMessage(false)
        setReels(false)
        setLikes(true)
        setProfile(false)
    }
    const handleSearch = () => {
        setSearch(false)
    }
    const handleSearch1 = () => {
        setSearch(true)
    }
    const handleHomeLogo = () => {
        history.push("/")
    }
    const handleChatPush = () => {
        history.push("/directMessage")
    }
    //search work by amarjeet
    const [searchUser, setSearchUser] = useState([])
    const [query, setQuery] = useState()
    const { loggedData, isLoading, allUser } = useSelector(
        (state) => state.homeReducer,
        shallowEqual
    );
    let { data } = allUser

    const handleChange = (event) => {
        console.log(data);
        const { value } = event.target
        setQuery(value)
    }

    const openDropDown = () =>{
        setDropDown(!dropDown)
    }
    return <>

        <div  className={styles.navHeader}>

            <div className={styles.navbarFirst}>
                <div className={styles.instaLogo} onClick={handleHomeLogo}>
                    <img src={process.env.PUBLIC_URL + "/images/instalogo.png"} alt="" />
                </div>

            </div>
            <div className={styles.navbarMiddle}>
                <div className={styles.middleSearch}>
                    {(search) ? <div className={styles.navBarSearch} onClick={handleSearch}>  <FaSistrix className={styles.searchIcon} />Search</div> :
                        <div><input type="text" placeholder="Search" className={styles.navBarSearch1} onChange={handleChange} onClick={openDropDown} />
                            {(dropDown)&&
                            <DropDown>
                                {data?.length > 0 &&
                                <div className={styles.autocomplete}>
                                    
                                    {data?.filter((el) => el.fullname.includes(query) || el.username.includes(query)).map((filteredName, i) => (
                                        <div key={i} className={styles.autocompleteItems}>
                                            {/* <span>{filteredName.fullname}</span> */}
                                            <SuggestionFriend className="indi-comp">
                                            <Avatar src={filteredName.profilePic} className="suggestions__image"/>
                                            <div className="suggestions__username">
                            <Typography className="name_sugg">{filteredName.fullname}</Typography>
                            <Typography className="type_sugg">{filteredName.username}</Typography>        
                        </div>
                                            </SuggestionFriend>
                                        </div>))})
                                </div>}
                            </DropDown>
                            }
                            <HighlightOffIcon onClick={handleSearch1} className={styles.searchIcon1} /></div>
                    }




                </div>


            </div>
            <div className={styles.navbarLast}>
                <li onClick={handleHome} >
                    {(home) ? <svg aria-label="Home" className="_8-yf5 " color="#262626" fill="#262626" height="22" role="img" viewBox="0 0 48 48" width="22"><path d="M45.5 48H30.1c-.8 0-1.5-.7-1.5-1.5V34.2c0-2.6-2.1-4.6-4.6-4.6s-4.6 2.1-4.6 4.6v12.3c0 .8-.7 1.5-1.5 1.5H2.5c-.8 0-1.5-.7-1.5-1.5V23c0-.4.2-.8.4-1.1L22.9.4c.6-.6 1.6-.6 2.1 0l21.5 21.5c.3.3.4.7.4 1.1v23.5c.1.8-.6 1.5-1.4 1.5z"></path></svg> :
                        <svg aria-label="Home" className="_8-yf5 " color="#262626" fill="#262626" height="22" role="img" viewBox="0 0 48 48" width="22"><path d="M45.3 48H30c-.8 0-1.5-.7-1.5-1.5V34.2c0-2.6-2-4.6-4.6-4.6s-4.6 2-4.6 4.6v12.3c0 .8-.7 1.5-1.5 1.5H2.5c-.8 0-1.5-.7-1.5-1.5V23c0-.4.2-.8.4-1.1L22.9.4c.6-.6 1.5-.6 2.1 0l21.5 21.5c.4.4.6 1.1.3 1.6 0 .1-.1.1-.1.2v22.8c.1.8-.6 1.5-1.4 1.5zm-13.8-3h12.3V23.4L24 3.6l-20 20V45h12.3V34.2c0-4.3 3.3-7.6 7.6-7.6s7.6 3.3 7.6 7.6V45z"></path></svg>}
                </li>

                <li onClick={handleMessage}>

                    {(message) ? <svg aria-label="Direct" className="_8-yf5 " color="#262626" fill="#262626" height="22" role="img" viewBox="0 0 48 48" width="22" ><path d="M47.8 3.8c-.3-.5-.8-.8-1.3-.8h-45C.9 3.1.3 3.5.1 4S0 5.2.4 5.7l13.2 13c.5.4 1.1.6 1.7.3l16.6-8c.7-.3 1.6-.1 2 .5.4.7.2 1.6-.5 2l-15.6 9.9c-.5.3-.8 1-.7 1.6l4.6 19c.1.6.6 1 1.2 1.1h.2c.5 0 1-.3 1.3-.7l23.2-39c.5-.5.5-1.1.2-1.6z"></path></svg> :
                        <svg aria-label="Direct" className="_8-yf5 " color="#262626" fill="#262626" height="22" role="img" viewBox="0 0 48 48" width="22"><path d="M47.8 3.8c-.3-.5-.8-.8-1.3-.8h-45C.9 3.1.3 3.5.1 4S0 5.2.4 5.7l15.9 15.6 5.5 22.6c.1.6.6 1 1.2 1.1h.2c.5 0 1-.3 1.3-.7l23.2-39c.4-.4.4-1 .1-1.5zM5.2 6.1h35.5L18 18.7 5.2 6.1zm18.7 33.6l-4.4-18.4L42.4 8.6 23.9 39.7z"></path></svg>}

                </li>
                <li onClick={handlePost}>
                    {(reels) ? <svg aria-label="New Post" className="_8-yf5 " color="#262626" fill="#262626" height="22" role="img" viewBox="0 0 48 48" width="22"><path d="M31.8 48H16.2c-6.6 0-9.6-1.6-12.1-4C1.6 41.4 0 38.4 0 31.8V16.2C0 9.6 1.6 6.6 4 4.1 6.6 1.6 9.6 0 16.2 0h15.6c6.6 0 9.6 1.6 12.1 4C46.4 6.6 48 9.6 48 16.2v15.6c0 6.6-1.6 9.6-4 12.1-2.6 2.5-5.6 4.1-12.2 4.1zM16.2 3C10 3 7.8 4.6 6.1 6.2 4.6 7.8 3 10 3 16.2v15.6c0 6.2 1.6 8.4 3.2 10.1 1.6 1.6 3.8 3.1 10 3.1h15.6c6.2 0 8.4-1.6 10.1-3.2 1.6-1.6 3.1-3.8 3.1-10V16.2c0-6.2-1.6-8.4-3.2-10.1C40.2 4.6 38 3 31.8 3H16.2z"></path><path d="M36.3 25.5H11.7c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5h24.6c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5z"></path><path d="M24 37.8c-.8 0-1.5-.7-1.5-1.5V11.7c0-.8.7-1.5 1.5-1.5s1.5.7 1.5 1.5v24.6c0 .8-.7 1.5-1.5 1.5z"></path></svg> :
                        <svg aria-label="New Post" className="_8-yf5 " color="#262626" fill="#262626" height="22" role="img" viewBox="0 0 48 48" width="22"><path d="M31.8 48H16.2c-6.6 0-9.6-1.6-12.1-4C1.6 41.4 0 38.4 0 31.8V16.2C0 9.6 1.6 6.6 4 4.1 6.6 1.6 9.6 0 16.2 0h15.6c6.6 0 9.6 1.6 12.1 4C46.4 6.6 48 9.6 48 16.2v15.6c0 6.6-1.6 9.6-4 12.1-2.6 2.5-5.6 4.1-12.2 4.1zM16.2 3C10 3 7.8 4.6 6.1 6.2 4.6 7.8 3 10 3 16.2v15.6c0 6.2 1.6 8.4 3.2 10.1 1.6 1.6 3.8 3.1 10 3.1h15.6c6.2 0 8.4-1.6 10.1-3.2 1.6-1.6 3.1-3.8 3.1-10V16.2c0-6.2-1.6-8.4-3.2-10.1C40.2 4.6 38 3 31.8 3H16.2z"></path><path d="M36.3 25.5H11.7c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5h24.6c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5z"></path><path d="M24 37.8c-.8 0-1.5-.7-1.5-1.5V11.7c0-.8.7-1.5 1.5-1.5s1.5.7 1.5 1.5v24.6c0 .8-.7 1.5-1.5 1.5z"></path></svg>
                    }
                </li>
                <li onClick={handleLikes}>
                    {
                        (likes) ? <svg aria-label="Activity Feed" className="_8-yf5 " color="#262626" fill="#262626" height="22" role="img" viewBox="0 0 48 48" width="22"><path d="M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path></svg> :
                            <svg aria-label="Activity Feed" className="_8-yf5 " color="#262626" fill="#262626" height="22" role="img" viewBox="0 0 48 48" width="22"><path d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path></svg>

                    }
                </li>
                <Avatar src={user ? user.data.profilePic : sample} alt="" className={styles.profilePic} onClick={handleProfile} />
            </div>

        </div>

        {(profile) ?
            <div className={styles.settings}>
                <div className={styles.settingPart}>
                    <div className={styles.settingStyle}>
                        <AccountCircleOutlinedIcon />
                    </div>
                    <div className={styles.settingTitle}>
                        <Link to="/profile" className={styles.link}>
                            <p >Profile</p>
                        </Link>
                    </div>
                </div>

                <div className={styles.settingPart}>
                    <div className={styles.settingStyle}>
                        <BookmarkBorderTwoToneIcon />
                    </div>
                    <div className={styles.settingTitle}>
                        <p>Saved</p>
                    </div>
                </div>

                <div className={styles.settingPart}>
                    <div className={styles.settingStyle}>
                        <SettingsIcon />
                    </div>
                    <div className={styles.settingTitle}>
                        <p>Settings</p>
                    </div>
                </div>

                <div className={styles.settingPart}>
                    <div className={styles.settingStyle}>
                        <FaSyncAlt className={styles.switch} />
                    </div>
                    <div className={styles.settingTitle}>
                        <p>Switch accounts</p>
                    </div>
                </div>

                <div className={styles.settingPart1}>

                    <div  className={styles.settingTitle}>
                        <p>Log out</p>
                    </div>
                </div>
            </div>
            : ""
        }
    </>
}

const DropDown = styled.div`
width:300px;
max-height:400px;
position: absolute;
display: inline-block;
border:1px solid red;
left:-12%;
top:6vh;
background-color: #f6f6f6;
min-width: 230px;
overflow: auto;
border: 1px solid #ddd;
z-index: 1;
font-size:16px;

& .indi-comp:hover{
    background-color:#ececec
}
`






