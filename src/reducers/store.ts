import { createStore } from 'redux'
import { combineReducers } from 'redux'
import { UserReducer } from './UserReducer'
import { CoursesReducer } from './CoursesReducer'
import { ContactReducer } from './ContactReducer'



const rootReducer = combineReducers({
    userReducer: UserReducer,
    coursesReducer: CoursesReducer,
    contactReducer: ContactReducer
}) 
 
export const store = createStore(rootReducer)
