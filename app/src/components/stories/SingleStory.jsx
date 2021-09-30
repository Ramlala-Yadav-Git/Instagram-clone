import styled from "styled-components"
import { Link } from "react-router-dom"

const SingleStoryContainer = styled.div`
margin: 0px;
padding: 0px;
display: inline;
cursor: pointer;
text-align: center;
font-size: 13px;
font-weight: 400;
display: flex;
flex-direction: column;

& img{
border: linear-gradient( #da3394, #e03c67, #f3753b, #f99b4a);
width: 60px;
height:60px;
border-radius: 50%;
padding:5%;
border: ${props => props.watch ? "2px solid #ce0606f0" : "2px solid gray"};

}
`

export const SingleStory = ({ watch, img, name, id }) => {
    console.log("img", img)
    return <>
        <SingleStoryContainer watch={watch} >
            <Link to={`viewStory/${id}`}>
                <img src={img} alt="story" />
            </Link>
            <span>{name}</span>
        </SingleStoryContainer>


    </>
}