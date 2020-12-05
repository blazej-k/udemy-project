export const ADDCOURSE = 'addcourse'
export const GETCOURSES = 'getcourses'


const sendData = (URL: string, body: FormData): Promise<Response> => (
    fetch(URL, {
        method: 'POST',
        body: body
    })
)

const getData = (URL: string): Promise<Response> => (
    fetch(URL, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
)

export const addCourse = (course: FormData): AddCourse => {

    return{
        type: ADDCOURSE,
        payload: sendData('http://localhost:2000/addCourse', course)
    }

}

export const getCourses = (): GetCourses => {

    return{
        type: GETCOURSES,
        payload: getData('http://localhost:2000/getCourses')
    }

}