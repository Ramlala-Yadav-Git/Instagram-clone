import { GET_USER_DATA, GET_USER_FAILURE, GET_USER_REQUEST } from "./actionType"
const initState = {
    data: {},
    isLoading: false,
    isError: false,
}

export const LoggedUserReducer = (state = initState, { type, payload }) => {
    switch (type) {
        case GET_USER_REQUEST: {
            return {
                ...state,
                isLoading: true,
                isError: false
            }
        }
        case GET_USER_DATA: {
            return {
                ...state,
                data: payload,
                isLoading: false,
                isError: false

            }
        }
        case GET_USER_FAILURE: {
            return {
                ...state,
                isLoading: false,
                isError: true
            }
        }
        default: return state
    }
}