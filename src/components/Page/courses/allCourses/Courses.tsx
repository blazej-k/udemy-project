import React, { FC, useEffect, useLayoutEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCourses } from '../../../../actions/CoursesActions'
import Course from '../Course'
import Loader from 'react-loader-spinner'
import '../../../../style/Courses.scss'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import { useHistory } from 'react-router-dom'

const Courses: FC = () => { 

    const coursesStore = useSelector((store: RootState) => store.coursesReducer)
    const userStore = useSelector((store: RootState) => store.userReducer)
    const [areCoursesDownloaded, setAreCoursesDownloaded] = useState<boolean>(false)
    const [subscribe, setSubscribe] = useState<boolean>(true)

    const dispatch = useDispatch()
    const history = useHistory()

    const [courses, setCourses] = useState<CourseObj[]>([])
    const [isLogged, setIsLogged] = useState<boolean>(false)


    useEffect(() => {
        if(subscribe){
            dispatch(getCourses())
            history.location.hash === '' && window.scrollTo(0, 0)
        }
        return () => setSubscribe(false)
    }, [])

    useLayoutEffect(() => {
        if(subscribe){
            Promise.resolve(coursesStore).then((res: CourseObj[]) => {
                setCourses(res)
                return res
            })
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
                    else {
                        setIsLogged(false)
                    }
                })
            }
        }
    }, [userStore, coursesStore])

    useEffect(() => {
        if(subscribe){
            courses.length > 0 && !areCoursesDownloaded && setAreCoursesDownloaded(true)
        }
    }, [courses])

    useEffect(() => {
        if(subscribe){
            if(areCoursesDownloaded){
                let { hash } = history.location
                hash = hash.substring(1)
                if ((history.location.hash) && (courses.length > 0)) {
                    const offsetTop = document.getElementById(String(hash))?.offsetTop
                    offsetTop && offsetTop - 200 > 0 ? window.scrollTo(0, offsetTop - 200) : window.scrollTo(0, 50)
                }
            }
        }
    }, [areCoursesDownloaded])

    const coursesElements =
        <ul data-aos="zoom-in">
            {courses.map((course) => {
                return course._id && <li key={course._id}><Course
                    name={course.name}
                    author={course.author}
                    description={course.description}
                    price={course.price}
                    img={course.imgStringsTab || ''}
                    imgSrc={course.img}
                    id={course._id}
                    subscribe={subscribe}
                /></li>
            })}
        </ul>

    return (
        <div className="Courses" data-aos="fade-up">
            {isLogged ? <h2>The kingdom of knowladge</h2> : <h2>Sign up to buy some courses</h2>}
            <p>Here you can find courses from every filed. There's programming, psychology, fitness and more! We
                have good price for every course. {courses.length > 0 && <>Choose whatever
                from <b>{courses.length}</b> courses and go learn. Have a fun!</>}</p>
            {!areCoursesDownloaded ? <div className='loader'><Loader
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

export default Courses;