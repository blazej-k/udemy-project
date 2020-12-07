import React, { FC, useEffect, useLayoutEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCourses } from '../../../../actions/CoursesActions'
import Course from '../Course'

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
    }, [])


    const arrayBufferToBase64 = (buffer: ArrayBufferLike) => {
        let binary = '';
        const bytes = [].slice.call(new Uint8Array(buffer));
        bytes.forEach((b) => binary += String.fromCharCode(b));
        return window.btoa(binary);
    };

    useLayoutEffect(() => {
        Promise.resolve(coursesStore).then(res => {
            const base64Flag = 'data:image/jpeg;base64,';
            const imgStringsTab: string[] = []
            courses !== coursesStore && res.map(course => {
                const imageStr = arrayBufferToBase64(course.img.data.data);
                return imgStringsTab.push(base64Flag + imageStr) 
            })
            setImgStrings(imgStringsTab)
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
                <ul>
                    {courses.map((course, index) => {
                        return course._id && <li key={course._id}  data-aos="zoom-in-left"><Course
                            name={course.name}
                            author={course.author}
                            description={course.description}
                            price={course.price}
                            img={imgStrings[index]}
                            id={course._id}
                        /></li>
                    })}
                </ul>}
        </div>
    );
}

export default Courses;