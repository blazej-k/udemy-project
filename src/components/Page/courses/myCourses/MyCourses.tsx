import React, { useState, FC, useLayoutEffect, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { userCoursesActions } from '../../../../actions/UserActions'
import Course from '../Course'
import '../../../../style/Courses.scss'
import Loader from 'react-loader-spinner'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import { FiAlertCircle } from 'react-icons/fi'


const MyCourses: FC = () => {

    const store = useSelector((store: RootState) => store.userReducer)
    const dispatch = useDispatch()

    const [courses, setCourses] = useState<CourseObj[]>([])
    const [isLogged, setIsLogged] = useState<boolean>(false)
    const [id, setId] = useState<string>('')
    const [areCoursesDownloaded, setAreCoursesDownloaded] = useState<boolean>(false)
    const [subscribe, setSubscribe] = useState<boolean>(true)
    const [warning, setWarning] = useState('')

    useLayoutEffect(() => {
        if(subscribe){
            setId(store.user._id || '')
            if (store.user?.isUserLogged) {
                isLogged !== store.user.isUserLogged && setIsLogged(!isLogged)
                courses !== store.user.courses && setCourses(store.user.courses || [])
                areCoursesDownloaded !== !store.loading &&  setAreCoursesDownloaded(!store.loading)
                warning !== store.error && setWarning(store.error)
            }
        }
    }, [store])

    useEffect(() => {
        window.scrollTo(0, 0)
        return () => setSubscribe(false)
    }, [])

    useEffect(() => {
        if ((id !== '') && (subscribe)) {
            dispatch(userCoursesActions(id, null, 'getUserCourses'))
        }
    }, [id])

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
            {isLogged ? courses.length > 0 && <h2>Your bought courses</h2> : <h2 className='no-account'>Sign in to see you courses<br/>
                <FiAlertCircle style={{fontSize: '150%'}}/></h2>
            }
            {isLogged && courses.length > 0 && <p>You've bought <b>{courses.length}</b> courses. Thank you!</p>}
            {areCoursesDownloaded && courses.length === 0 ?
                <div className='no-courses'>{warning.length > 0 ? <>{warning}<br/> <FiAlertCircle style={{fontSize: '150%'}}/></> : 
                    <>You haven't bought any course yet.<br/> <FiAlertCircle style={{fontSize: '150%'}}/></>}
                </div> : <div className='Courses-list'>{coursesElements}</div>
            }   
            {isLogged && !areCoursesDownloaded && <div className='loader'><Loader
                type="Oval"
                color='#fb2c48'
                height={140}
                width={140}
            /></div>}
        </div>
    );
}

export default MyCourses;