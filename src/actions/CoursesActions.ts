export const ADDCOURSE = 'addcourse'


const sendData = (URL: string, body: CourseObj): Promise<Response> => (
    fetch(URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    })
)

export const addCourse = ({name, author, description, price}: CourseObj): AddCourse => {

    const course: CourseObj = {
        name,
        author,
        description,
        price,
        _id: new Date().getMilliseconds()
    }

    return{
        type: ADDCOURSE,
        payload: sendData('http://localhost:2000/addCourse', course)
    }

}