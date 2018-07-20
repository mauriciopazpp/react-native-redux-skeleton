import { combineReducers } from 'redux'

import auth from '@screen/auth/store/reducer'
/*import exampleReducer from '@screen/anotherScreen/store/reducer'*/

const rootReducer = combineReducers({
    auth: auth,
    /*exampleReducer: exampleReducer*/
})

export default rootReducer
