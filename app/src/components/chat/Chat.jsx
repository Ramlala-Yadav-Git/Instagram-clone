import { Owner } from "./Owner"
import { SecondPerson } from "./SecondPerson"
import { User } from "./User"
import styled from "styled-components"

const ChatWrapper = styled.div`
border: 1px solid gray;
width: 100%;
display: flex;
justify-content: center;
padding: 12%;
padding-top: 4%;
padding-bottom: 4%;
background: #FAFAFA;
& > div{
    width: 50%;
    max-height: 500px;
    overflow:hidden;

}
& > :nth-child(1){
    width: 35%;

    border: 1px solid gray;
    border-top: none;
    border-right: none;

}
& > :nth-child(1) >:nth-child(2){
    overflow-y: scroll;
    max-height: 400px;

}
`







export const Chat = () => {


    return <>
        <ChatWrapper>
            <div>
                <div>
                    <Owner />
                </div>
                <div>
                    <User />
                    <User />
                    <User />
                    <User />
                    <User />
                    <User />
                    <User />
                    <User />
                </div>

            </div>
            <div>
                <SecondPerson />
            </div>
        </ChatWrapper>
    </>
}