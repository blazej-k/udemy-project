import { COURSEADDED, GETCOURSES, COURSES_SENDREQUEST, COURSESERROR } from '../actions/CoursesActions'
import arrayBufferToBase64 from './arrayBufferToBase64'

const initState: CoursesReducer = {
    courses: [],
    loading: false,
    error: ''
}
 
export const CoursesReducer = (state = initState, action: CoursesRedcucerType) => {
    switch (action.type) {
        case COURSES_SENDREQUEST:
            return state = {...state, loading: true}
        case COURSESERROR:
            return state = {...state, loading: false, error: action.payload}
        case COURSEADDED:
            const imageStr = arrayBufferToBase64(action.payload.img.data.data);
            action.payload = {...action.payload, imgStringsTab: `data:${action.payload.img.contentType};base64,` + imageStr}
            return state = {courses: [...state.courses, action.payload], loading: false, error: ''}
        case GETCOURSES:
            let newState: CourseObj[] 
            newState = action.payload.map((course) => {
                const imageStr = arrayBufferToBase64(course.img.data.data);
                return {...course, imgStringsTab: `data:${course.img.contentType};base64,` + imageStr}
            })
            return state = {courses: newState, loading: false, error: ''}
        default: 
            return state
    }
}