import React, { useState, FC, useLayoutEffect, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUserCourses } from '../../../../actions/UserActions'
import Course from '../Course'
import '../../../../style/Courses.scss'
import Loader from 'react-loader-spinner'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"


const MyCourses: FC = () => {

    const store = useSelector((store: RootState) => store.userReducer)
    const dispatch = useDispatch()

    const [courses, setCourses] = useState<CourseObj[]>([])
    const [isLogged, setIsLogged] = useState<boolean>(false)
    const [id, setId] = useState<string>('')
    const [areCoursesDownloaded, setAreCoursesDownloaded] = useState<boolean>(false)
    const [subscribe, setSubscribe] = useState<boolean>(true)

    useLayoutEffect(() => {
        if(subscribe){
            setId(store.user._id || '')
            if (store.user?.isUserLogged) {
                setIsLogged(store.user.isUserLogged)
                setCourses(store.user.courses || [])
            }
        }
        return () => {
            setCourses([])
            setIsLogged(false)
        }
    }, [store])

    useEffect(() => {
        window.scrollTo(0, 0)
        return () => setSubscribe(false)
    }, [])

    useEffect(() => {
        if ((id !== '') && (subscribe)) {
            dispatch(getUserCourses(id))
        }
    }, [id])

    useEffect(() => {
        if(subscribe){
            courses.length > 0 && !areCoursesDownloaded && setAreCoursesDownloaded(true)
        }
    }, [courses])

    const coursesElements =
        <ul>
            {courses.map(course => {
                return course._id && <li key={course._id}><Course
                    name={course.name}
                    author={course.author}
                    description={course.description}
                    img={course.imgString || ''}
                    id={course._id}
                    subscribe={subscribe}
                /></li>
            })}
        </ul >
    return (
        <div className="MyCourses" data-aos="fade-up">
            {isLogged ? <h2>Your bought courses</h2> : <h2>Sign in to see you courses</h2>}
            <p>{courses.length > 0 && <>You've bought <b>{courses.length}</b> courses</>}
            </p>
            {isLogged && !areCoursesDownloaded ? <div className='loader'><Loader
                type="Oval"
                color='#fb2c48'
                height={140}
                width={140}
            />
            </div> :
                <div className='Courses-list'>
                    {coursesElements}
                </div>
            }
        </div>
    );
}

export default MyCourses;