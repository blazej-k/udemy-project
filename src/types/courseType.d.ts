const ADDCOURSE = 'addcourse'
const GETCOURSES = 'getcourses'
const SENDREQUEST = 'sendrequest'
const COURSESERROR = 'courseserror'

type SendRequest = {
    type: typeof SENDREQUEST,
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
