import styled from "styled-components"
import { Link } from "react-router-dom"
import img from '.././../Image/Logos/amar pic.jpeg'
import { shallowEqual, useSelector } from "react-redux"
import { GetData } from "../../utils/localStorageData"
import { useHistory } from 'react-router-dom';
const SingleStoryContainer = styled.div`
margin: 0px;
padding: 0px;
display: inline;
cursor: pointer;
text-align: center;
position :relative;
/* font-size: 13px; */
font-weight: 400;
display: flex;
flex-direction: column;

&:hover{
     content: "Add Story";
    
}
& i{
    display: inline;
    color:#fff;
    border:1px solid #fcf3f3;
    position: absolute;
    top: 0px;
    font-size: 12px;
    left: 10px;
    border-radius: 50%;
    padding: 2px;
    background-color: #979393;
}


& img{

width: 66px;
height:66px;
border-radius: 50%;
padding:4%;
margin-top: 2px;
/* margin-bottom: 1px; */

border: ${props => props.watch ? "2px solid #c70505" : "2px solid gray"};

}
& > span{
    font-weight: light;
    margin-top: 1px;
}
`

export const AddStory = () => {
    const history = useHistory()
    let user = GetData('loginData')
    // data = data.data
    // console.log(data);
    const story = true

    const handleDouble = () => {
        // console.log("aaaa");
        history.push("/uploadStory")
    }

    // const showStory = () => {
    //     console.log('story');
    // }
    return <>
        <SingleStoryContainer>
            <div onClick={handleDouble}>
                <img src={user.data && user.data.profilePic} alt="story" />
                <i class="fa fa-plus"></i>
            </div>
            <span>{user.data && user.data.username}</span>
        </SingleStoryContainer>


    </>
}