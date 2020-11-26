import React, { FC, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCourses } from '../../../../actions/CoursesActions'
import Course from '../Course' 

const Courses: FC = () => {

    const coursesStore = useSelector((store2: RootUserState) => store2.courseReducer)
    const userStore = useSelector((store: RootUserState ) => store.userReducer)
    const dispatch = useDispatch()

    const [courses, setCourses] = useState<CourseObj[]>([])
    const [isLogged, setIsLogged] = useState<boolean>(false)


    useEffect(() => {
        Promise.resolve(coursesStore).then(res => setCourses(res))
        Promise.resolve(userStore).then(store => {
            if(store.isUserLogged){
                setIsLogged(store.isUserLogged)
            }
        }) 
    }, [userStore, coursesStore])

    useEffect(() => {
        Promise.resolve(coursesStore).then((store) => {
            if(store.length === 0){
                dispatch(getCourses())
            } 
        })
    }, [coursesStore])

    return ( 
        <div className='Courses-list'>
            {!isLogged && <h2>Sign in to buy course</h2>}
            {!coursesStore ? <p>There isn't courses to buy</p> :
            <ul>
                {courses.map(course => {
                    return <li key={course._id}><Course
                        name={course.name}
                        author={course.author}
                        description={course.description}
                        price={course.price}
                        id={course._id}
                    /></li>
                })}
            </ul>}
        </div>
    );
}

export default Courses;