import styled from "styled-components"
import { MessageInput } from "./MessageInput"
const SecondPersonWrapper = styled.div`
border: 1px solid gray;
/* border-top: none; */
/* width: 40%; */

& >div{
    display: flex;
    justify-content: space-between;
}
&>div>div{
    display: flex;
    align-items: center;
    justify-content: center;
}
& img{
    width:32px;
    height: 32px;
    border-radius: 50%;
}
& > div i{
    font-size: 30px;
    color: gray;
    cursor: pointer;
}
& >:nth-child(1){
    border-bottom: 1px solid gray;
    padding: 1%;
    padding-left: 10px;
    padding-right: 10px;

}
& >:nth-child(3){
    padding: 10px;
}
`
const LiveMessageWrapper = styled.div`
max-height: 352px;
min-height: 352px;
overflow-y: scroll;
padding-right: 10px;
padding-left: 10px;
`


const sample = "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png"

export const SecondPerson = ({ user = "user" }) => {


    return <>
        <SecondPersonWrapper>
            <div>
                <div>
                    <img src={sample} alt="user" />
                    <p>{user}</p>
                </div>

                <div>
                    <i class="fa fa-info-circle"></i>
                </div>
            </div>
            <LiveMessageWrapper>
                {"live message"}
            </LiveMessageWrapper>
            <div>
                <MessageInput />
            </div>
        </SecondPersonWrapper>

    </>

}