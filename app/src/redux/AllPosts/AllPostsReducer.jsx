import { GET_ALLPOST_DATA, GET_ALLPOST_REQUEST, GET_ALLPOST_FAILURE } from "./actionType"
const initState = {
    data: [],
    isLoading: false,
    isError: false,
}

export const AllPostReducer = (state = initState, { type, payload }) => {
    switch (type) {
        case GET_ALLPOST_REQUEST: {
            return {
                isLoading: true,
                isError: false
            }
        }
        case GET_ALLPOST_DATA: {

            return {
                ...state,
                data: payload,
                isLoading: false,
                isError: false

            }
        }
        case "UPDATEPOST": {
            const d = {
                comment: payload.comment,

                userId: payload.userId
            }
            console.log("fndslkfnlkdsnflkds", state.data)
            const data = state.data.map((el) => el._id === payload.id ? { ...el, comment: [...el.comments, d] } : el);
            console.log(data, "reducer data")
            return {
                ...state,
                data: data,
                isLoading: false,
                isError: false

            }
        }
        case GET_ALLPOST_FAILURE: {
            console.log("error")
            return {
                ...state,
                isLoading: false,
                isError: true
            }
        }
        default: return state
    }
}