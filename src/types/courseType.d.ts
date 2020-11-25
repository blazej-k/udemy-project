const ADDCOURSE = 'addcourse'

type CourseObj = {
    name: string,
    author: string,
    description: string,
    price: number,
    _id: number
}

type AddCourse = {
    type: typeof ADDCOURSE
    payload: Promise<Response>
}