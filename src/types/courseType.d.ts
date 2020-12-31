const ADDCOURSE = 'addcourse'
const GETCOURSES = 'getcourses'
const COURSES_SENDREQUEST = 'courses_sendrequest'
const COURSESERROR = 'courseserror'

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
    error?: string
    _id?: number,
    imgStringsTab?: string,
}

type AddCourse = {
    type: typeof ADDCOURSE
}

type GetCourses = {
    type: typeof GETCOURSES
    payload: CourseObj[]
}

type CoursesReducer = {
    state: CourseObj[]
    loading: boolean,
    error: string
}
