import {
    LOADING,
    SOMETHING,
    ANOTHER_SOMETHING
} from './constants'

export const loading = () => {
    return {
        type: LOADING
    }
}

export const something = data => {
    return {
        type: SOMETHING,
        data
    }
}

export const anotherSomething = (err) => {
    return {
        type: ANOTHER_SOMETHING,
        data: err
    }
}
