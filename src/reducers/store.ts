import {createStore} from 'redux'
import {combineReducers} from 'redux'
import {UserReducer} from './UserReducer'



const rootReducer = combineReducers({
    userReducer: UserReducer
})

export const store = createStore(rootReducer)
export type RootState = ReturnType<typeof rootReducer>