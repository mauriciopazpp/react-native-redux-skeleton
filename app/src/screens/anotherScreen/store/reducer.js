import {
    LOADING,
    SOMETHING,
    ANOTHER_SOMETHING
} from './constants'

const defaultState = {
    isFetching: false,
    data: [],
    error: null,
    problem: null
}

export default function reducer(state = defaultState, action) {
    const response = action.data
    switch (action.type) {
        case LOADING:
            return {
                ...state,
                isFetching: true,
                data: [],
                error: null,
                problem: null
            }
            case SOMETHING:
                return {
                    ...state,
                    isFetching: false,
                    data: response,
                    error: null,
                    problem: null
                }
            case ANOTHER_SOMETHING:
                return {
                    ...state,
                    isFetching: false,
                    data: [],
                    error: response.data,
                    problem: response.problem
                }
        default:
            return state
    }
}
