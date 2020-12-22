const ADDCOURSE = 'addcourse'
const GETCOURSES = 'getcourses'

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
    payload: Promise<Response>
}

type GetCourses = {
    type: typeof GETCOURSES
    payload: Promise<Response>
}
