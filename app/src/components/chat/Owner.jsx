
import styled from "styled-components"
const OwnerWrapper = styled.div`

border: 1px solid #d8d6d6;
/* width: 40%; */
border-right: none;
margin-bottom: 10px;
border-left: none;
display: flex;
/* justify-content:space-evenly; */
padding:5px;
padding-right: 10px;
align-items: center;
background: #FFFFFF;


&>div{
    width: 50%;
background: #FFFFFF;

}
&>div >div{
    display: flex;
    justify-content: end;
    cursor: pointer;
    margin-left: 15px;
    text-align: end;
background: #FFFFFF;

}
&>div>div p{
    font-weight: 500;
    font-size: 15px;
}

&>:nth-child(2){
   text-align: end;
   padding-right: 10px;
}
&>:nth-child(1) span{
  align-items: center;
  margin-bottom: 11px;
  margin-left: 3px;
}
&>div>div i{
    font-size: 15px;
    font-weight: 100;
    margin-left: 2px;
    color: gray;
    margin-top: 2px;

}
`


export const Owner = ({ ownerName = "Amerjeet" }) => {



    return <>
        <OwnerWrapper>
            <div>
                <div>
                    <p>{ownerName}</p>
                    <span style={{ display: "inline", transform: "rotate(180deg)" }}><svg aria-label="Down Chevron Icon" className="_8-yf5 " color="#262626" fill="#4d4949" height="15" role="img" viewBox="0 0 48 48" width="15"><path d="M40 33.5c-.4 0-.8-.1-1.1-.4L24 18.1l-14.9 15c-.6.6-1.5.6-2.1 0s-.6-1.5 0-2.1l16-16c.6-.6 1.5-.6 2.1 0l16 16c.6.6.6 1.5 0 2.1-.3.3-.7.4-1.1.4z"></path></svg></span>
                </div>
            </div>
            <div>
                <svg aria-label="New Message" className="_8-yf5 " color="#686565" fill="#645e5e" height="24" role="img" viewBox="0 0 44 44" width="24"><path d="M33.7 44.12H8.5a8.41 8.41 0 01-8.5-8.5v-25.2a8.41 8.41 0 018.5-8.5H23a1.5 1.5 0 010 3H8.5a5.45 5.45 0 00-5.5 5.5v25.2a5.45 5.45 0 005.5 5.5h25.2a5.45 5.45 0 005.5-5.5v-14.5a1.5 1.5 0 013 0v14.5a8.41 8.41 0 01-8.5 8.5z"></path><path d="M17.5 34.82h-6.7a1.5 1.5 0 01-1.5-1.5v-6.7a1.5 1.5 0 01.44-1.06L34.1 1.26a4.45 4.45 0 016.22 0l2.5 2.5a4.45 4.45 0 010 6.22l-24.3 24.4a1.5 1.5 0 01-1.02.44zm-5.2-3h4.58l23.86-24a1.45 1.45 0 000-2l-2.5-2.5a1.45 1.45 0 00-2 0l-24 23.86z"></path><path d="M38.2 14.02a1.51 1.51 0 01-1.1-.44l-6.56-6.56a1.5 1.5 0 012.12-2.12l6.6 6.6a1.49 1.49 0 010 2.12 1.51 1.51 0 01-1.06.4z"></path></svg>
            </div>
        </OwnerWrapper>

    </>
}