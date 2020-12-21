import React, { FC, useEffect, useLayoutEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCourses } from '../../../../actions/CoursesActions'
import Course from '../Course'
import Loader from 'react-loader-spinner'
import '../../../../style/Courses.scss'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

const Courses: FC = () => {

    const coursesStore = useSelector((store: RootState) => store.coursesReducer)
    const userStore = useSelector((store: RootState) => store.userReducer)
    const [areCoursesDownloaded, setAreCoursesDownloaded] = useState<boolean>(false)
    const dispatch = useDispatch()

    const [courses, setCourses] = useState<CourseObj[]>([])
    const [isLogged, setIsLogged] = useState<boolean>(false)


    useEffect(() => {
        dispatch(getCourses())
        window.scrollTo(0, 0)
    }, [])

    useLayoutEffect(() => {
        Promise.resolve(coursesStore).then((res: CourseObj[]) => {
            setCourses(res)
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
                else{
                    setIsLogged(false)
                }
            })
        }
    }, [userStore, coursesStore])

    useEffect(() => {
        courses.length > 0 && !areCoursesDownloaded && setAreCoursesDownloaded(true)
    }, [courses])


    return (
        <div className='Courses-list' data-aos="fade-up"> 
            {!isLogged && <h2>Sign in to buy course</h2>}
            {!areCoursesDownloaded ? <div className='loader'><Loader type="Oval" color='#fb2c48' height={140} width={140} timeout={10000}/></div> : !courses?.length ? <p>There isn't courses to buy...</p> :
                <ul data-aos="zoom-in-left">
                    {courses.map((course) => {
                        return course._id && <li key={course._id}><Course
                            name={course.name}
                            author={course.author}
                            description={course.description}
                            price={course.price}
                            img={course.imgStringsTab || ''}
                            imgSrc={course.img}
                            id={course._id}
                        /></li>
                    })}
                </ul>}
        </div>
    );
}

export default Courses;