const ADDCOURSE = 'addcourse'
const GETCOURSES = 'getcourses'
const COURSES_SENDREQUEST = 'courses_sendrequest'
const COURSESERROR = 'courseserror'
const COURSEADDED = 'courseadded'

type Courses_SendRequest = {
    type: typeof COURSES_SENDREQUEST,
}

type CoursesError = {
    type: typeof COURSESERROR
    payload: string
}

type CourseObj = {
    name: string,
    author: string,
    description: string,
    price: number,
    img?: Image | File,
    _id?: number,
    imgString?: string,
}

type AddCourse = {
    type: typeof ADDCOURSE
}

type GetCourses = {
    type: typeof GETCOURSES
    payload: CourseObj[]
}

type CourseAdded = {
    type: typeof COURSEADDED
    payload: CourseObj
}

