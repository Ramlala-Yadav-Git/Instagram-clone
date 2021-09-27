import styled from "styled-components"
const SingleStoryContainer = styled.div`
margin: 0px;
padding: 0px;
display: inline;
cursor: pointer;
text-align: center;
font-size: 12px;
&> img{
width: 60px;
height:60px;
border-radius: 50%;
padding:5%;
border: ${props => props.watch ? "3px solid #ce0606f0" : "3px solid gray"};

}
`

export const SingleStory = ({ watch, img, name }) => {

    return <>
        <SingleStoryContainer watch={watch}>
            <img src={img} alt="storyImage" />
            <span>{name}</span>
        </SingleStoryContainer>

    </>
}