import { GET_ALL_USER, GET_HOME_DATA, GET_HOME_FAILURE, GET_HOME_REQUEST, GET_LOGGED_DATA, GET_LOGGED_FAILURE, GET_LOGGED_REQUEST } from "./actionTpye"

const initState = {
    data:[],
    isLoading:false,
    isError:false,
    loggedData:[],
    allUser:[]
}

export const homeReducer = (state=initState, {type,payload}) =>{
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
        case GET_LOGGED_DATA:{
            return{
                ...state,
                isLoading:false,
                isError:false,
                loggedData:payload
            }
        }
        case GET_LOGGED_REQUEST:{
            return{
                ...state,
                isLoading:true,
                isError:false
            }
        }
        case GET_LOGGED_FAILURE:{
            return{
                ...state,
            isLoading:false,
            isError:payload
            }
        }
        case GET_ALL_USER:{
            return{
                ...state,
                isLoading:false,
                isError:false,
                allUser:payload
            }
        }
        default:
            return state
    }
}