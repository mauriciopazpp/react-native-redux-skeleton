import { api, storeToken } from '@api/'
import {
    loading,
    something,
    anotherSomething
} from './dispatchers'

export const getSomething = () => {
    return (dispatch) => {
        dispatch(loading())
        api.get(`api/something`)
        .then(({ data }) => {
            dispatch(something(data.all))
        })
        .catch((err) => {
            dispatch(anotherSomething(data))
        })
    }
}
