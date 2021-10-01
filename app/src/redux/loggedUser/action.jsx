
import { GET_USER_DATA, GET_USER_FAILURE, GET_USER_REQUEST } from "./actionType"
import axios from "axios"
export const getUserDataReq = () => {
    return {
        type: GET_USER_REQUEST
    }
}
export const getUserDataSucc = (payload) => {
    return {
        type: GET_USER_DATA,
        payload
    }
}
export const getUserDataFail = (payload) => {
    return {
        type: GET_USER_FAILURE,
        payload

    }
}
export const getUser = (payload) => dispatch => {

    dispatch(getUserDataReq());
    try {

        axios.post("http://localhost:8000/login", payload).then((res) => {
            // console.log("gettting", res.data.data);
            return dispatch(getUserDataSucc(res.data.data))
        })
    } catch (err) {

        dispatch(getUserDataFail(err));
    }

}
