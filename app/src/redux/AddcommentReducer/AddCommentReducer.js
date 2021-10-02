import { GET_ALLPOST_DATA, GET_ALLPOST_REQUEST, GET_ALLPOST_FAILURE } from "./actionType"

// import { useSelector } from "react-redux"

const Get = () => {
    // const state = useSelector(state => state.posts)
    // return state.data
}

const initState = {
    data: [],
    isLoading: false,
    isError: false,
}

export const AddCommentReducer = (state = initState, { type, payload }) => {
    switch (type) {
        case GET_ALLPOST_REQUEST: {

            return {
                ...state,
                isLoading: true,
                isError: false
            }
        }
        case GET_ALLPOST_DATA: {
            const data = state.data.map((el) => el._id === payload.id ? { ...el, comment: [...el.comment, payload.body] } : el)
            return {
                ...state,
                data: data,
                isLoading: false,
                isError: false

            }
        }
        case GET_ALLPOST_FAILURE: {
            return {
                ...state,
                isLoading: false,
                isError: true
            }
        }
        default: return state
    }
}