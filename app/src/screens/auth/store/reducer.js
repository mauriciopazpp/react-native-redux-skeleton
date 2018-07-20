import {
    LOADING_LOGIN,
    LOGIN_SUCCESSFUL,
    LOGIN_UNSUCCESSFUL,
    LOGOUT_SUCCESSFUL
} from './constants'

const defaultState = {
    access: null,
    isLoggedIn: false,
    isFetching: false,
    error: false
}
 
export default function reducer(state = defaultState, action) {
    const response = action.data
    switch (action.type) {
        case LOADING_LOGIN:
            return {
                ...state,
                access: null,
                isLoggedIn: false,
                isFetching: true,
                error: false
            }
        case LOGIN_SUCCESSFUL:
            return {
                ...state,
                access: {
                    user: response.user,
                    expiresIn: response.expires_in,
                    accessToken: response.access_token
                },
                isLoggedIn: true,
                isFetching: false,
                error: false
            }
        case LOGOUT_SUCCESSFUL:
            return {
                ...state,
                access: null,
                isLoggedIn: false,
                isFetching: false,
                error: false
            }
        case LOGIN_UNSUCCESSFUL: 
            return {
                ...state,
                access: null,
                isLoggedIn: false,
                isFetching: false,
                error: response.data,
                problem: response.problem
            }
        default:
            return state
    }
}
