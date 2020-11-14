import React, {useEffect, useState, FC} from 'react'
import Course from './Course'

interface Course{
    name: string,
    author: string,
    rate: number,
    img?: unknown,
    description: string,
    price?: number,
    id: number
}

 
const myCourses: FC = () => {

    const [courses, setCourses] = useState<Course[]>([])
    let obj: Course
    useEffect(() => {
        obj = {name: 'sfs', author: 'gf', rate: 3, id: 8, description: 'sdfsfferfer'};
        setCourses(prev => [...prev, obj])
    }, [])

    return (
        <div className="MyCourses-list">
            {courses.map(course => {
                return <Course 
                name={course.name}
                author={course.author}
                rate={course.rate}
                description={course.description}
                />
            })}
        </div>
    ); 
}
 
export default myCourses;