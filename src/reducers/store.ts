import {createStore} from 'redux'
import {combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {UserReducer} from './UserReducer'



const rootReducer = combineReducers({
    userReducer: UserReducer,
    // applyMiddleware(thunk){}
})

export const store = createStore(rootReducer)
export type RootState = ReturnType<typeof rootReducer>