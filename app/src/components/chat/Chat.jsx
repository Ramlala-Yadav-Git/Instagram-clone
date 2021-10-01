import { Owner } from "./Owner"
import { SecondPerson } from "./SecondPerson"
import { User } from "./User"
import styled from "styled-components"
import axios from "axios"
import { useEffect, useState } from "react"
import { Navbar } from "../navbar/navbar"

const ChatWrapper = styled.div`
width: 100%;
display: flex;
justify-content: center;
padding: 12%;
padding-top: 4%;
padding-bottom: 4%;
background: #FAFAFA;
margin-top: 30px;
& > *{

    border-radius: 3px;
}
& > div{
    width: 50%;
    max-height: 500px;
    overflow:hidden;
    background: #FFFFFF;

}
& > :nth-child(1){
    width: 35%;

    border: 1px solid #d8d6d6;
    border-top: none;
    border-right: none;
    background: #FFFFFF;


}
& > :nth-child(1) >:nth-child(2){
    overflow-y: auto;
    max-height: 400px;

}
`







export const Chat = () => {
    const [users, setUsers] = useState([])
    const [second, setSecond] = useState("")
    useEffect(() => {
        getData()


    }, [])
    const getData = () => {
        axios.get("http://localhost:8000/users").then((res) => {
            setUsers(res.data.data)

        })
    }
    const handleClick = (id) => {
        const user = users.filter((el) => {
            return el._id === id
        })
        setSecond(user[0])
    }

    return <>
        <Navbar />
        <ChatWrapper>
            <div>
                <div>
                    <Owner />
                </div>
                <div>


                    {
                        users && users.map((el) => {

                            return <User name={el.username} img={el.profilePic} onClick={handleClick} id={el._id} />
                        })
                    }

                </div>

            </div>
            <div>
                <SecondPerson img={second.profilePic} user={second.username} />
            </div>
        </ChatWrapper>
    </>
}