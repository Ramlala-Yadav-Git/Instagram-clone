import { GET_ALLPOST_DATA, GET_ALLPOST_REQUEST, GET_ALLPOST_FAILURE } from "./actionType"
const initState = {
    data: [],
    isLoading: false,
    isError: false,
}

export const LoggedUserReducer = (state = initState, { type, payload }) => {
    switch (type) {
        case GET_ALLPOST_REQUEST: {
            return {
                ...state,
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