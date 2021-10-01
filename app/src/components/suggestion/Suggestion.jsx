import React from 'react'
import {Avatar} from '@material-ui/core'
import MyLogoImg from "../../Image/Logos/amar pic.jpeg"
import styled from 'styled-components'
import { SuggestionUser } from './SuggestionUser'


const dataSuggestion = [
    {
        MyLogoImg,
        name:"Aj_karnawal",
        type:"New To Instagram",
        accountType:"privet"
    },
    {
        MyLogoImg,
        name:"Aj_karnawal",
        type:"New To Instagram",
        accountType:"public"
    }
]

export const Suggestion = () => {
    return (
        <div>
            <SuggestionContainer>
            <div className="suggestions__header">
                    <div>Suggestions For You</div>
                    <div className="see_all">See All</div>
                </div>
                <div>{dataSuggestion.map((item)=>(
                    <SuggestionUser item={item}/>
                ))}</div>
            </SuggestionContainer>

        </div>
    )
}

const SuggestionContainer = styled.div`
    width: 325px;
    height: 290px;
    margin-top: 25px;

    & .suggestions__header {
    font-weight: bold;
    color: #8e8e8e;
    display:flex;
    & .see_all{
        align-items:right;
        padding-left:37%;
        font-weight:400;
    }
}
.suggestions__body {
    height: 256px;
    height: 290px;
    margin-top: 10px;
}
`