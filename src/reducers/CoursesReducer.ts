import {ADDCOURSE} from '../actions/CoursesActions'

export const CourseReducer = async(state: CourseObj[], action: CourseRedcucerType) => {
    switch(action.type){
        case ADDCOURSE:
            await action.payload.then(res => res.json()).then(res => state = res)
            return state
        default:
            return state
    }

}