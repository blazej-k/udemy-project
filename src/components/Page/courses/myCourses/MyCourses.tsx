import React, { useEffect, useState, FC } from 'react'
import { useSelector } from 'react-redux'
import Course from '../Course'


const MyCourses: FC = () => {

    const store = useSelector((store: RootUserState) => store.userReducer)

    const [courses, setCourses] = useState<CourseObj[]>([])
    const [isLogged, setIsLogged] = useState<boolean>(false)

    useEffect(() => {
        Promise.resolve(store).then(store => {
            if((store.courses) && (store.isUserLogged)){
                setIsLogged(store.isUserLogged)
                setCourses(store.courses)
            }
        })
       return () => {
        setIsLogged(false)
        setCourses([])
       }
    }, [store])

    const coursesElement =
                <ul>
                    {courses.map(course => {
                        return <li key={new Date().getMilliseconds()}><Course
                            name={course.name}
                            author={course.author}
                            description={course.description}
                            id={course._id || new Date().getMilliseconds()}
                            />
                        </li>
                    })}
                </ul >
    return (
        <div className="MyCourses-list">
            {isLogged ? courses.length ? coursesElement : <h1>Buy some courses and go learn!</h1>: 
            <h1>Sign in to see your bought courses</h1>}
        </div>
    );
}

export default MyCourses;