import React, { useState, FC, useLayoutEffect, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUserCourses } from '../../../../actions/UserActions'
import Course from '../Course'
import '../../../../style/Courses.scss'


const MyCourses: FC = () => {

    const store = useSelector((store: RootState) => store.userReducer)
    const dispatch = useDispatch()

    const [courses, setCourses] = useState<CourseObj[]>([])
    const [isLogged, setIsLogged] = useState<boolean>()
    const [id, setId] = useState<string>('')
    const [areCoursesDownloaded, setAreCoursesDownloaded] = useState<boolean>(false)

    useLayoutEffect(() => {
        const localStorage = window.localStorage.getItem('store')
        if (localStorage !== null) {
            const store: User = JSON.parse(localStorage)
            setIsLogged(store.isUserLogged || false)
            store._id && setId(store._id)
        }

        Promise.resolve(store).then(store => {
            if (store.isUserLogged){
                isLogged !== true && setIsLogged(store.isUserLogged)
                store.courses && setCourses(store.courses)
                store._id && setId(store._id)
            }
        })
        return () => {
            setCourses([])
            setIsLogged(false)
    }}, [store])

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    useEffect(() => {
        if (id !== ''){
            dispatch(getUserCourses(id))
        }
    }, [id])

    useEffect(() => {
        courses.length > 0 && !areCoursesDownloaded && setAreCoursesDownloaded(true)
    }, [courses])


const coursesElement =
    <ul>
        {courses.map(course => {
            return course._id && <li key={course._id}><Course
                name={course.name}
                author={course.author}
                description={course.description}
                img={course.imgStringsTab || ''}
                id={course._id}
            /></li>
        })}
    </ul >
return (
    <div className="MyCourses-list" data-aos="fade-up">
        {isLogged ? courses.length ? coursesElement : <h1>Buy some courses and go learn!</h1> :
            <h1>Sign in to see your bought courses</h1>}
    </div>
);
}

export default MyCourses;