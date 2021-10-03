import { Avatar } from '@material-ui/core'
import React, { useState } from 'react'
import styled from 'styled-components'
import { useEffect } from 'react'
import { Typography } from '@material-ui/core'

export const SuggestionUser = ({item}) => {
    const [followState,setFollowState] = useState(false)
    const [follow,setFollow] = useState()
    const {profilePic,username} = item
    
    const followChange = function(){

    //     if(!followState){
    //         setFollowState(true)
    //     if(e==="privet"){
    //         e="Requested"
    //     }
    //     else if(e==="public"){
    //         e="Following"
    //     }
    //     console.log(e);
    // }else{
    //     setFollowState(false)
    //     e="Follow"
        
    // }
    // setFollow(e)
}
    return (
        <>
            <SuggestionFriend>
                        <Avatar src={profilePic} className="suggestions__image"/>
                        <div className="suggestions__username">
                            <Typography className="name_sugg">{username}</Typography>
                            <Typography className="type_sugg">Suggested for you</Typography>        
                        </div>
                        <div onClick={()=>setFollowState(!followState)} className="sugg_friend">{
                            followState===false?"Follow":
                            follow==="Following"?"Following":
                            "Follow"
                        }</div>
                    </SuggestionFriend>
        </>
    )
}

export const SuggestionFriend = styled.div`
    display: flex;
    padding: 1px 0px;


& .suggestions__image {
    max-width: 35px;
    margin-top:3%;
    max-height: 35px;
}
& .suggestions__username{
    margin: 12px;
    & .name_sugg{
        font-weight:bold;
    }
}
& .sugg_friend{
    color:#0095F6;
    font-weight:600;
    font-size: 12px;
    line-height: 14px;
    padding-left:30%;
    margin:5% 1%;
    :hover{
        cursor: pointer;
    }
}
`