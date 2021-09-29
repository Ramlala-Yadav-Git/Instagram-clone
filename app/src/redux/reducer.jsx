import { GET_HOME_DATA, GET_HOME_FAILURE, GET_HOME_REQUEST } from "./actionTpye"

const initState = {
    data:[],
    isLoading:false,
    isError:false,
}

export const homeReducer = (state=initState, {type,payload,query}) =>{
    switch(type){
        case GET_HOME_DATA:{
            return {
                ...state,
                data:payload,
                isLoading:false
            }
        }
        case GET_HOME_FAILURE:{
            return {
                ...state,
                isLoading:false,
                isError:payload
            }
        }
        case GET_HOME_REQUEST:{
            return{
                ...state,
                isLoading:true
            }
        }
        default:
            return state
    }
}