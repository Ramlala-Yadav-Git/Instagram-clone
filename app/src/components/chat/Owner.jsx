
import styled from "styled-components"
const OwnerWrapper = styled.div`

border: 1px solid gray;
/* width: 40%; */
border-right: none;
margin-bottom: 10px;
border-left: none;
display: flex;
/* justify-content:space-evenly; */
padding:5px;
padding-right: 10px;
align-items: center;

&>div{
    width: 50%;
}
&>div >div{
    display: flex;
    justify-content: end;
    cursor: pointer;
    padding-left: 10px;
    text-align: end;
}
&>div>div p{
    font-weight: 500;
    font-size: 15px;
}
&>div >i{
font-size: 28px;
color: gray;
cursor: pointer;
/* margin-left: 300px; */

}
&>:nth-child(2){
   text-align: end;
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
                    <i class="fa fa-chevron-down"></i>
                </div>
            </div>
            <div>
                <i class="fa fa-edit"></i>
            </div>
        </OwnerWrapper>

    </>
}