import {
    LOADING_LOGIN,
    LOGIN_SUCCESSFUL,
    LOGIN_UNSUCCESSFUL,
    LOGOUT_SUCCESSFUL
} from './constants'

export const loadingLogin = () => {
    return {
        type: LOADING_LOGIN
    }
}

export const loginSuccessful = (data) => {
    return {
        type: LOGIN_SUCCESSFUL,
        data
    }
}

export const loginUnsuccessful = (err) => {
    return {
        type: LOGIN_UNSUCCESSFUL,
        data: err
    }
}

export const logoutSuccessful = (data) => {
    return {
        type: LOGOUT_SUCCESSFUL,
        data
    }
}
