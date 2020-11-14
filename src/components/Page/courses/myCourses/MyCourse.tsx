import React, { useEffect, useState } from 'react'
import Course from '../Course'

interface CourseObj {
    name: string,
    author: string,
    rate: number,
    img?: unknown,
    description: string,
    price?: number,
    id: number
}


const MyCourses = () => {

    const [courses, setCourses] = useState<CourseObj[]>([])
    let obj: CourseObj
    useEffect(() => {
        obj = { name: 'sfs', author: 'gf', rate: 3, id: 8, description: 'sdfsfferfer' };
        setCourses(prev => [...prev, obj])
        // return () => {
        //     null
        // }
    }, [])

    return (
        <div className="MyCourses-list">
            <ul> 
                {courses.map(course => {
                    return <li key={course.id}><Course
                        name={course.name}
                        author={course.author}
                        rate={course.rate}
                        description={course.description}
                    />
                    </li>
                })}
            </ul>
        </div>
    );
}

export default MyCourses;