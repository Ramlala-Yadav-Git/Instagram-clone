import { useState } from "react"
import styled from "styled-components"
import { MessageInput } from "./MessageInput"
const SecondPersonWrapper = styled.div`
border: 1px solid #d8d6d6;


& >div{
    display: flex;
    justify-content: space-between;
background: #FFFFFF;

}
&>div>div{
    display: flex;
    align-items: center;
    justify-content: center;
background: #FFFFFF;

}
& img{
    width:32px;
    height: 32px;
    border-radius: 50%;
    background: #FFFFFF;
    margin-left: 10px;
    margin-right: 10px;


}
& p{
    font-size: 15px;
    margin-top: 10px;
    display: inline;
}
& > div i{
    font-size: 30px;
    color: #afa8a8;
    cursor: pointer;
}
& >:nth-child(1){
    border-bottom: 1px solid #d8d6d6;
    padding-left: 10px;
    padding-right: 10px;
    align-items: center;


}
& >:nth-child(1) >:nth-child(2){
    margin-right: 10px;

}
& >:nth-child(3){
    padding: 10px;
}
`
const LiveMessageWrapper = styled.div`
max-height: 352px;
min-height: 350px;
/* overflow-y: scroll; */
padding-right: 10px;
padding-left: 10px;
background: #FFFFFF;
& >ul{
    /* border: 1px solid black; */
    box-sizing: border-box;
    list-style: none;
    overflow: auto;
    width: 100%;
    padding: 10px;
    display: flex;
    flex-direction: column-reverse;
    justify-content: end;
}
`


const sample = "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png"

export const SecondPerson = ({ user = "user", img }) => {
    const [inboxItem, setInboxItem] = useState([])
    const handleInput = (data) => {
        setInboxItem([data, ...inboxItem])
    }
    return <>
        <SecondPersonWrapper>
            <div>
                <div>
                    <img src={img} alt="user" />
                    <p>{user}</p>
                </div>

                <div>
                    <svg aria-label="View Thread Details" className="_8-yf5 " color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 48 48" width="24"><path d="M24 48C10.8 48 0 37.2 0 24S10.8 0 24 0s24 10.8 24 24-10.8 24-24 24zm0-45C12.4 3 3 12.4 3 24s9.4 21 21 21 21-9.4 21-21S35.6 3 24 3z"></path><circle clipRule="evenodd" cx="24" cy="14.8" fillRule="evenodd" r="2.6"></circle><path d="M27.1 35.7h-6.2c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5h6.2c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5z"></path><path d="M24 35.7c-.8 0-1.5-.7-1.5-1.5V23.5h-1.6c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5H24c.8 0 1.5.7 1.5 1.5v12.2c0 .8-.7 1.5-1.5 1.5z"></path></svg>
                </div>
            </div>
            <LiveMessageWrapper>
                <ul>

                    {
                        inboxItem.map((e, i) => {
                            return <li key={i}>
                                <h5>{e}</h5>
                            </li>

                        })
                    }
                </ul>
            </LiveMessageWrapper>
            <div>
                <MessageInput handleInput={handleInput} />
            </div>
        </SecondPersonWrapper>

    </>

}