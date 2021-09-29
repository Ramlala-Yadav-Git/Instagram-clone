import styled from "styled-components"



const sample = "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png"

const UserWrapper = styled.div`
display: flex;
align-items: center;
/* width: 40%; */
/* border: 1px solid gray; */
cursor: pointer;
padding-left: 10px;
margin-bottom: 10px;
&:hover{
    background: #bdb6b68f;
}
&>div > img{
width: 60px;
height: 60px;
border-radius: 50%;
}
&>div p{
  margin: 0px;
  padding: 0px;
  padding-left: 10px;
}


`
export const User = ({ name = "name", status = "22h" }) => {



    return <>
        <UserWrapper>
            <div>
                <img src={sample} alt="profilePic" />
            </div>
            <div>
                <p>{name}</p>
                <p>{status}</p>
            </div>
        </UserWrapper>

    </>
}