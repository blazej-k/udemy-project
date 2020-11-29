const ADDCOURSE = 'addcourse'
const GETCOURSES = 'getcourses'

type CourseObj = {
    name: string,
    author: string,
    description: string,
    price: number,
    error?: string
    _id?: number
}

type AddCourse = {
    type: typeof ADDCOURSE
    payload: Promise<Response>
}

type GetCourses = {
    type: typeof GETCOURSES
    payload: Promise<Response>
}