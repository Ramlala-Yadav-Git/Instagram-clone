
import { GET_ALLPOST_DATA, GET_ALLPOST_FAILURE, GET_ALLPOST_REQUEST } from "./actionType"
import axios from "axios"
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
export const getUser = (payload) => dispatch => {

    dispatch(getAllPostReq());
    try {

        axios.get("http://localhost:8000/posts").then((res) => {
            // console.log("gettting", res.data.data);
            return dispatch(getAllPostData(res.data.data))
        })
    } catch (err) {

        dispatch(getAllPostFail(err));
    }

}
