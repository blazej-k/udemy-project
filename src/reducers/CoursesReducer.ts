import { ADDCOURSE, GETCOURSES } from '../actions/CoursesActions'

export const CourseReducer = async (state: CourseObj[] = [], action: CourseRedcucerType) => {
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
            await Promise.resolve(action.payload).then(res => res.json()).then(res => state = res).then(res => console.log(res))
            return state
        default:
            return state
    }
}