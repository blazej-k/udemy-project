import { applyMiddleware, createStore } from 'redux'
import { combineReducers } from 'redux'
import { UserReducer } from './UserReducer'
import { CoursesReducer } from './CoursesReducer'
import { ContactReducer } from './ContactReducer'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'



const rootReducer = combineReducers({
    userReducer: UserReducer,
    coursesReducer: CoursesReducer,
    contactReducer: ContactReducer
})
 
export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk))) 
