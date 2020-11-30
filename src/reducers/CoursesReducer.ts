import { ADDCOURSE, GETCOURSES } from '../actions/CoursesActions'

export const CoursesReducer = async (state: CourseObj[] = [], action: CoursesRedcucerType) => {
    switch (action.type) {
        case ADDCOURSE:
            let newState: CourseObj[] = []
            await Promise.resolve(state).then(res => newState = res)
            await Promise.resolve(action.payload).then(res => res.json()).then(res => {
                if (res.error) return
                newState.push(res)
            })
            return state = newState
        case GETCOURSES:  
            await Promise.resolve(action.payload).then(res => res.json()).then(res => state = res)
            return state
        default:
            return state
    }
}