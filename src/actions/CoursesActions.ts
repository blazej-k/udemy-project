export const ADDCOURSE = 'addcourse'
export const GETCOURSES = 'getcourses'


const sendData = (URL: string, body: CourseObj): Promise<Response> => (
    fetch(URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
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

export const addCourse = ({name, author, description, price, _id}: CourseObj): AddCourse => {

    const course: CourseObj = {
        name,
        author,
        description,
        price,
        _id 
    }

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