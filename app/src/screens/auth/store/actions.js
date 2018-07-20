import { api, removeToken, storeToken } from '@api/'
import { stringify } from "qs"
import {
    loadingLogin as loading,
    loginSuccessful,
    loginUnsuccessful,
    logoutSuccessful
} from './dispatchers'

export const loginRedux = (email, password) => {
    return (dispatch) => {
        dispatch(loading())
        api.post('api/login', stringify({
            email: email,
            password: password
        }))
        .then(({ data }) => {
            storeToken(data.access_token)
            dispatch(loginSuccessful(data))
        })
        .catch((err) => {
            removeToken()
            dispatch(loginUnsuccessful(err))
        })
    }
}

export const logoutRedux = () => {
    return (dispatch) => {
        api.post('api/logout')
        .then(({ data }) => {
            dispatch(logoutSuccessful(data))
        })
        .catch((err) => {
            console.log('err', err)
        })
    }
}
