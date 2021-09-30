import { GET_POST_DATA, GET_POST_FAILURE, GET_POST_REQUEST } from "./PostActionType"

const initState = {
    data:[],
    isLoading:false,
    isError:false,
}

export const postReducer = (state=initState, {type,payload}) =>{
    switch(type){
        case GET_POST_DATA:{
            return {
                ...state,
                data:payload,
                isLoading:false
            }
        }
        case GET_POST_FAILURE:{
            return {
                ...state,
                isLoading:false,
                isError:payload
            }
        }
        case GET_POST_REQUEST:{
            return{
                ...state,
                isLoading:true
            }
        }
        default:
            return state
    }
}