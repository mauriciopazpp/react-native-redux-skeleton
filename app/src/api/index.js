import{ AsyncStorage } from 'react-native'
import { create } from 'apisauce'

import config from '!config'

export const TOKEN_KEY = "|app:token"

export const api = create({
    baseURL: config.API_URL,
    headers: config.API_HEADERS,
    timeout: config.API_TIMEOUT
})

export const storeToken = token =>
    AsyncStorage.setItem(TOKEN_KEY, token)

export const removeToken = () => {
    AsyncStorage.removeItem(TOKEN_KEY)
    api.deleteHeader('Authorization')
}

export const getToken = () =>
    AsyncStorage.getItem(TOKEN_KEY)

api.addAsyncRequestTransform(request => async () => {
    const token = await getToken(TOKEN_KEY)

    if(token)
        request.headers['Authorization'] = `Bearer ${token}`
})

api.addResponseTransform(response => {
    if(!response.ok)
        throw response
})
