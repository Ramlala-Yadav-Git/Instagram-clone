
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
export const getCommentPost = (payload) => {
    return {
        type: payload.type,
        payload

    }
}
export const getAllPosts = () => dispatch => {

    dispatch(getAllPostReq());
    try {

        axios.get("http://localhost:8000/posts").then((res) => {
            // console.log("gettting", res.data.data);
            return dispatch(getAllPostData(res.data.data))
        })
    } catch (err) {
        console.log(err)
        dispatch(getAllPostFail(err));
    }


}
export const updateComment = (payload) => dispatch => {
    console.log("dispatching")
    const data = {
        ...payload,
        type: "UPDATEPOST"
    }

    dispatch(getAllPostReq());
    try {
        dispatch(getCommentPost(data))

    } catch (err) {
        console.log(err)
        dispatch(getAllPostFail(err));
    }


}

export const AddCommentPosts = (payload) => {

    const data = {
        userId: payload.userId._id,
        comment: payload.comment,
        id: payload.id
    }

    axios.post(`http://localhost:8000/posts/addcomment/${payload.id}`, data)




    // console.log(data, "fkkfhlkashdata")


}

