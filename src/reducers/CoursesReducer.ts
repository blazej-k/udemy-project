import { ADDCOURSE, GETCOURSES, SENDREQUEST, COURSESERROR } from '../actions/CoursesActions'
import arrayBufferToBase64 from './arrayBufferToBase64'

const initState: CoursesReducer = {
    state: [],
    loading: false,
    error: ''
}
 
export const CoursesReducer = (state = initState, action: CoursesRedcucerType) => {
    switch (action.type) {
        case SENDREQUEST:
            return state = {...state, loading: true}
        case COURSESERROR:
            return state = {...state, loading: false, error: action.payload}
        // case ADDCOURSE:
        //     let newState2: CourseObj[] = []
        //     await Promise.resolve(state).then(res => newState2 = res)
        //     await Promise.resolve(action.payload).then(res => res.json()).then(res => {
        //         if (res.error) return
        //         newState2.push(res)
        //     })
        //     return state = newState2
        case GETCOURSES:
            let newState: CourseObj[] 
            newState = action.payload.map((course) => {
                const imageStr = arrayBufferToBase64(course.img.data.data);
                return {...course, imgStringsTab: `data:${course.img.contentType};base64,` + imageStr}
            })
            return state = {state: newState, loading: false, error: ''}
        default: 
            return state
    }
}