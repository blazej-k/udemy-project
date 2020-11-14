import React, {useEffect, useState} from 'react'
import Course from './Course'

interface CourseInfo{
    
}

 
const myCourses = () => {

    const [courses, setCourses] = useState([])

    // useEffect(() => {

    // }, [])

    return (
        <div className="MyCourses-list">
            {courses.map(course => {
                return <Course
                />
            })}
        </div>
    );
}
 
export default myCourses;