import React, { FC, useEffect, useLayoutEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCourses } from '../../../../actions/CoursesActions'
import Course from '../Course'

const Courses: FC = () => {

    const coursesStore = useSelector((store: RootState) => store.coursesReducer)
    const userStore = useSelector((store: RootState) => store.userReducer)
    const [areCoursesDownloaded, setAreCoursesDownloaded] = useState<boolean>(false)
    const dispatch = useDispatch()

    const [courses, setCourses] = useState<CourseObj[]>([])
    const [isLogged, setIsLogged] = useState<boolean>(false)


    useEffect(() => {
            dispatch(getCourses())
    }, [])

    useLayoutEffect(() => {
        Promise.resolve(coursesStore).then(res => setCourses(res))
        const localStorage = window.localStorage.getItem('store')
        if (localStorage !== null) {
            const store: User = JSON.parse(localStorage)
            setIsLogged(store.isUserLogged || false)
        }
        else {
            Promise.resolve(userStore).then(store => {
                if (store.isUserLogged) {
                    setIsLogged(store.isUserLogged)
                }
            })
        }
    }, [userStore, coursesStore])
    courses.length > 0 && !areCoursesDownloaded && setAreCoursesDownloaded(true)

    return (
        <div className='Courses-list'>
            {!isLogged && <h2>Sign in to buy course</h2>}
            {!areCoursesDownloaded ? <p>Loading...</p> : !courses.length ? <p>There isn't courses to buy...</p> :
                <ul>
                    {courses.map(course => {
                        return course._id && <li key={course._id}><Course
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