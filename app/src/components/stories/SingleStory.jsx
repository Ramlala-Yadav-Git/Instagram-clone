import styled from "styled-components"
const SingleStoryContainer = styled.div`
margin: 0px;
padding: 0px;
display: inline;
cursor: pointer;
text-align: center;
font-size: 12px;

&> img{
border: linear-gradient( #da3394, #e03c67, #f3753b, #f99b4a);
width: 66px;
height:66px;
border-radius: 50%;
padding:5%;
border: ${props => props.watch ? "2px solid #ce0606f0" : "3px solid gray"};

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