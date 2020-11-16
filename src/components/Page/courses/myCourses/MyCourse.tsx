import React, { useEffect, useState, FC } from 'react'
import { useSelector } from 'react-redux'
import Course from '../Course'

const MyCourses: FC = () => {

    const store = useSelector((store: RootUserState) => store.userReducer.courses)
    const [courses, setCourses] = useState<CourseObj[]>([])

    useEffect(() => {
       if(store){
           setCourses(store)
       }
       else{
           setCourses([])
       }
    }, [store])


    const coursesElement =
                <ul>
                    {courses.map(course => {
                        return <li key={course.id}><Course
                            name={course.name}
                            author={course.author}
                            description={course.description}
                            />
                        </li>
                    })}
                </ul >

    return (
        <div className="MyCourses-list">
            {courses.length ? {coursesElement} : <h1>Sign In to see your bought courses</h1>}
        </div>
    );
}

export default MyCourses;