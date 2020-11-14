import React, { useEffect, useState, FC } from 'react'
import Course from '../Course'

const MyCourses: FC = () => {

    const [courses, setCourses] = useState<CourseObj[]>([])
    let obj: CourseObj
    useEffect(() => {
        obj = { name: 'sfs', author: 'gf', rate: 3, id: 8, description: 'sdfsfferfer' };
        setCourses(prev => [...prev, obj])
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