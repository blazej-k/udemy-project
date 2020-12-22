import { ADDCOURSE, GETCOURSES } from '../actions/CoursesActions'
import arrayBufferToBase64 from './arrayBufferToBase64'
 
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
            state = []  
            await Promise.resolve(action.payload).then(res => res.json()).then(res => {
                state = res
                res.map((course: CourseObj, index: number): string => {
                    const imageStr = arrayBufferToBase64(course.img.data.data);
                    return state[index].imgStringsTab = `data:${course.img.contentType};base64,` + imageStr
                })
            })
            return state 
        default: 
            return state
    }
}