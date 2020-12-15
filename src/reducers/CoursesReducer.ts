import { ADDCOURSE, GETCOURSES } from '../actions/CoursesActions'

const arrayBufferToBase64 = (buffer: ArrayBufferLike) => {
    let binary = '';
    const bytes = [].slice.call(new Uint8Array(buffer));
    bytes.forEach((b) => binary += String.fromCharCode(b));
    return window.btoa(binary);
};

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
                res.map((course: CourseObj, index: number) => {
                    const imageStr = arrayBufferToBase64(course.img.data.data);
                    state[index].imgStringsTab = `data:${course.img.contentType};base64,` + imageStr
                    console.log(state[index])
                    // return `data:${course.img.contentType};base64,` + imageStr
                })
                console.log(state)
            })
            return state
        default:
            return state
    }
}