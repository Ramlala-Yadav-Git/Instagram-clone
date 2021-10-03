import React, { useEffect } from 'react'
import { Avatar } from '@material-ui/core'
import MyLogoImg from "../../Image/Logos/amar pic.jpeg"
import styled from 'styled-components'
import { SuggestionUser } from './SuggestionUser'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { getallUser } from '../../redux/action'
import { GetData } from "../../utils/localStorageData"


const dataSuggestion = [
    {
        MyLogoImg,
        name: "Aj_karnawal",
        type: "New To Instagram",
        accountType: "privet"
    },
    {
        MyLogoImg,
        name: "Aj_karnawal",
        type: "New To Instagram",
        accountType: "public"
    }
]

export const Suggestion = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getallUser)
    }, [])
    const { loggedData, isLoading, allUser } = useSelector(
        (state) => state.homeReducer,
        shallowEqual
    );
    const user = GetData("loginData")
    let { data } = allUser;
    console.log(user, data)
    // <SuggestionUser key={i} item={item} />
    return (
        <div>
            <SuggestionContainer>
                <div className="suggestions__header">
                    <div>Suggestions For You</div>
                    <div className="see_all">See All</div>
                </div>
                <div>{(data) &&
                    data.map((item, i) => (

                        i <= 3 && user.data._id !== item._id && <SuggestionUser key={i} item={item} />
                    ))}</div>
            </SuggestionContainer>

        </div>
    )
}

const SuggestionContainer = styled.div`
    /* width: 325px; */
    /* height: 290px; */
    /* margin-top: 90px; */

    & .suggestions__header {
    font-weight: bold;
    color: #8e8e8e;
    display:flex;
    & .see_all{
        align-items:right;
        padding-left:35%;
        font-weight:400;
    }
}
.suggestions__body {
    height: 256px;
    height: 290px;
    margin-top: 10px;
}
`