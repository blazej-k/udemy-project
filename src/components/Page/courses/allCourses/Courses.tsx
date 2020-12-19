import React, { FC, useEffect, useLayoutEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCourses } from '../../../../actions/CoursesActions'
import Course from '../Course'
import '../../../../style/Courses.scss'

const Courses: FC = () => {

    const coursesStore = useSelector((store: RootState) => store.coursesReducer)
    const userStore = useSelector((store: RootState) => store.userReducer)
    const [areCoursesDownloaded, setAreCoursesDownloaded] = useState<boolean>(false)
    const [imgStrings, setImgStrings] = useState<string[]>([])
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
        <div className='Courses-list'>
            {!isLogged && <h2>Sign in to buy course</h2>}
            {!areCoursesDownloaded ? <p>Loading...</p> : !courses.length ? <p>There isn't courses to buy...</p> :
                <ul data-aos="zoom-in-left">
                    {courses.map((course) => {
                        return course._id && <li key={course._id}><Course
                            name={course.name}
                            author={course.author}
                            description={course.description}
                            price={course.price}
                            img={course.imgStringsTab || 'fsdfd'}
                            id={course._id}
                        /></li>
                    })}
                </ul>}
        </div>
    );
}

export default Courses;