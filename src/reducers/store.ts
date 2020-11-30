import { createStore } from 'redux'
import { combineReducers } from 'redux'
import { UserReducer } from './UserReducer'
import { CoursesReducer } from './CoursesReducer'



const rootReducer = combineReducers({
    userReducer: UserReducer,
    coursesReducer: CoursesReducer
})
 
export const store = createStore(rootReducer)
