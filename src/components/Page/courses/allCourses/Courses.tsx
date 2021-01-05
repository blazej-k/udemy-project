import React, { FC, useEffect, useLayoutEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCourses } from '../../../../actions/CoursesActions'
import Course from '../Course'
import Loader from 'react-loader-spinner'
import '../../../../style/Courses.scss'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import { useHistory } from 'react-router-dom'
import { FiAlertCircle } from "react-icons/fi";
import { detect } from 'detect-browser'

const Courses: FC = () => {

    const coursesStore = useSelector((store: RootState) => store.coursesReducer)
    const userStore = useSelector((store: RootState) => store.userReducer)
    const [areCoursesDownloaded, setAreCoursesDownloaded] = useState<boolean>(false)
    const [subscribe, setSubscribe] = useState<boolean>(true)
    const [warning, setWarning] = useState<string>('')

    const dispatch = useDispatch()
    const history = useHistory()

    const [coursesTab, setCoursesTab] = useState<CourseObj[]>([])
    const [isLogged, setIsLogged] = useState<boolean>(false)


    useEffect(() => {
        if (subscribe) {
            if (coursesStore.courses.length === 0) dispatch(getCourses())
            if (history.location.hash === '') window.scrollTo(0, 0)
        }
        return () => setSubscribe(false)
    }, [])

    useLayoutEffect(() => {
        if (subscribe) {
            const localStorage = window.localStorage.getItem('store')
            if (localStorage !== null) {
                const store: User = JSON.parse(localStorage)
                setIsLogged(store.isUserLogged as unknown as boolean)
            }
            else {
                userStore.user?.isUserLogged && setIsLogged(userStore.user.isUserLogged)
            }
        }
    }, [userStore, coursesStore])

    useEffect(() => {
        if (subscribe) {
            const { courses, loading, error } = coursesStore
            coursesTab !== courses && setCoursesTab(courses)
            loading !== !areCoursesDownloaded && setAreCoursesDownloaded(!loading)
            warning !== error && setWarning(error)
        }
    }, [coursesStore])

    useEffect(() => {
        if (subscribe) {
            if (areCoursesDownloaded) {
                let { hash } = history.location
                hash = hash.substring(1)
                const browser = detect();
                if ((history.location.hash) && (coursesTab.length > 0)) {
                    const offsetTop = document.getElementById(String(hash))?.offsetTop
                    const elHeight = document.getElementById(String(hash))?.offsetHeight
                    if (browser?.name === 'safari') {
                        window.scrollTo({
                            left: 0,
                            top: (offsetTop || 0) - 100
                        })
                    }
                    else {
                        window.scrollTo({
                            left: 0,
                            top: (offsetTop || 0) + (elHeight || 0)
                        })
                    }
                }
            }
        }
    }, [areCoursesDownloaded])

    const coursesElements =
        <ul data-aos="zoom-in">
            {coursesTab.map((course) => {
                return course._id && <li key={course._id}><Course
                    name={course.name}
                    author={course.author}
                    description={course.description}
                    price={course.price}
                    img={course.imgString || ''}
                    imgSrc={course.img}
                    id={course._id}
                    subscribe={subscribe}
                /></li>
            })}
        </ul>

    return (
        <div className="Courses" data-aos="fade-up">
            <h2>The kingdom of knowladge</h2>
            <p>Here you can find courses from every filed. There's programming, psychology, fitness and more! We
            have good price for every course.
                {coursesTab.length > 0 && <> Choose whatever from <b>{coursesTab.length}</b> courses and go learn. Have a fun!</>}
                {!isLogged && <span> (Sign in to buy some courses)</span>}
            </p>
            {areCoursesDownloaded && coursesTab.length === 0 ?
                <div className='no-courses'>{warning.length > 0 ? <>{warning}<br /> <FiAlertCircle style={{ fontSize: '150%' }} /></> :
                    <>There's no courses to buy right now.<br /> <FiAlertCircle style={{ fontSize: '150%' }} /></>}
                </div> :
                <div className='Courses-list'>{coursesElements}</div>
            }
            {!areCoursesDownloaded && <div className='loader'><Loader
                type="Oval"
                color='#fb2c48'
                height={140}
                width={140}
            />
            </div>}
        </div>
    );
}

export default Courses;