import { createStore, applyMiddleware } from "redux"
import rootReducer from "./rootReducer"
import thunk from 'redux-thunk'

const store = applyMiddleware(thunk)(createStore)(rootReducer)

export default store