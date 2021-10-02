
import { GET_ALLPOST_DATA, GET_ALLPOST_FAILURE, GET_ALLPOST_REQUEST } from "./actionType"
export const getAllPostReq = () => {
    return {
        type: GET_ALLPOST_REQUEST
    }
}
export const getAllPostData = (payload) => {
    return {
        type: GET_ALLPOST_DATA,
        payload
    }
}
export const getAllPostFail = (payload) => {
    return {
        type: GET_ALLPOST_FAILURE,
        payload

    }
}



