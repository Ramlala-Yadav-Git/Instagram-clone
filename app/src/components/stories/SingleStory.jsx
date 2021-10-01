import styled from "styled-components"
import { Link } from "react-router-dom"

const SingleStoryContainer = styled.div`
margin: 0px;
padding: 0px;
display: inline;
cursor: pointer;
text-align: center;
/* font-size: 13px; */
font-weight: 400;
display: flex;
flex-direction: column;

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

export const SingleStory = ({ watch, img, name, id }) => {

    return <>
        <SingleStoryContainer watch={watch} >
            <Link to={`/viewstory/${id}`}>
                <img src={img} alt="story" />
            </Link>
            <span>{name}</span>
        </SingleStoryContainer>


    </>
}