import { Dispatch } from "react"

export const ADDCOURSE = 'addcourse'
export const GETCOURSES = 'getcourses'
export const COURSES_SENDREQUEST = 'courses_sendrequest'
export const COURSESERROR = 'courseserror'
export const COURSEADDED = 'courseadded'

const { REACT_APP_ADD, REACT_APP_COURSES } = process.env

export const addCourse = (body: FormData) => async (dispatch: Dispatch<CoursesRedcucerType>) => {
    dispatch({ type: COURSES_SENDREQUEST })
    try {
        await fetch(`http://localhost:2000/courses/${REACT_APP_ADD}`, {
            method: 'POST',
            body
        })
            .then(res => res.json())
            .then((res: CourseObj) => dispatch({ type: COURSEADDED, payload: res }))
    } catch {
        dispatch({ type: COURSESERROR, payload: "Upss, it's look like we can't add course. Please go back later" })
    }
}

export const getCourses = () => async (dispatch: Dispatch<CoursesRedcucerType>) => {
    dispatch({ type: COURSES_SENDREQUEST })
    try {
        const response: CourseObj[] = await fetch(`http://localhost:2000/courses/${REACT_APP_COURSES}`).then(res => res.json())
        dispatch({ type: GETCOURSES, payload: response })
    } catch {
        dispatch({ type: COURSESERROR, payload: "Upss, it's look like we can't get courses. Please go back later" })
    }
}