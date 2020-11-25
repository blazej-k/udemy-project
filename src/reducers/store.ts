import { createStore } from 'redux'
import { combineReducers } from 'redux'
import { UserReducer } from './UserReducer'
import { CourseReducer } from './CoursesReducer'



const rootReducer = combineReducers({
    userReducer: UserReducer,
    courseReducer: CourseReducer
})

export const store = createStore(rootReducer)
export type RootState = ReturnType<typeof rootReducer>