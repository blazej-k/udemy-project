import React, { useEffect, useState, FC } from 'react'
import { useSelector } from 'react-redux'
import Course from '../Course'


const MyCourses: FC = () => {

    const store = useSelector((store: RootUserState) => store.userReducer)
    const [courses, setCourses] = useState<CourseObj[]>([])

    useEffect(() => {
       if(store.courses){
           setCourses(store.courses) 
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
            {store.isUserLogged ? courses.length ? coursesElement : <h1>Buy some courses and go learn!</h1>: 
            <h1>Sign in to see your bought courses</h1>}
        </div>
    );
}

export default MyCourses;